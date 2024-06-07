import React, { useState } from 'react'
import axios from 'axios';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import { differenceInDays, parseISO } from 'date-fns';
//import FullCalendar from '@fullcalendar/react';
//import dayGridPlugin from '@fullcalendar/daygrid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

//import DaysElapsedCalculator from 'src/components/DaysElapsedCalculator';

function dias360(startDate, endDate) {
  // Obtener los componentes de fecha

  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);

  const startDay = startDateObj.getDate();
  const startMonth = startDateObj.getMonth() + 1;
  const startYear = startDateObj.getFullYear();

  const endDay = endDateObj.getDate();
  const endMonth = endDateObj.getMonth() + 1;
  const endYear = endDateObj.getFullYear();

  // Calcular los días de 360
  const daysInStartMonth = Math.min(30, 30 - startDay + 1);
  const daysInEndMonth = Math.min(30, endDay);

  const monthsElapsed = (endYear - startYear) * 12 + (endMonth - startMonth) - 1;
  const days360 = monthsElapsed * 30 + daysInStartMonth + daysInEndMonth + 1;

  return days360;
}

const CustomStyles = () => {
  const [formData, setFormData] = useState({
    Documento:'',
    Nombres:'',
    Apellidos:'',
    CorreoElectronico:'',
    File:''
});

//const [startDate, setStartDate] = useState(new Date());
const [campoNombresApellidos, setCampoNombresApellidos] = useState('');
const [campoAsignacionBasicaMensual, setCampoAsignacionBasicaMensual] = useState('');
const [campoSubsidioTransporte,setCampoSubsidioTransporte] = useState('');
const [campoSubsidioAlimentacion,setCampoSubsidioAlimentacion] = useState('');
const [campoInferiorA, setCampoInferiorA] = useState('');
const [campoBonificacionServicioPrestado, setCampoBonificacionServicioPrestado] = useState('');
const [campoPorcentajeBonificacionServicioPrestado, setPorcentajeBonificacionServicioPrestado] = useState('');
const [campoTotalBonificacionServicioPrestado, setTotalBonificacionServicioPrestado] = useState('');
const [campoDoceavaBonificacionServicioPrestado, setDoceavaBonificacionServicioPrestado] = useState('');
const [campoSalarioBaseMensualLiquidacionBonificacionServicios, setSalarioBaseMensualLiquidacionBonificacionServicios] = useState('');
const [campoSalarioBaseDiarioLiquidacionBonificacionServicios, setSalarioBaseDiarioLiquidacionBonificacionServicios] = useState('');
const [campoDiasAplicaBeneficioServicioPrestado, setDiasAplicaBeneficioServicioPrestado] = useState('');
const [campoTotalPrimaServicio, setTotalPrimaServicio] = useState('');

const [campoDoceavaBonificacionPrimaVacaciones,  setDoceavaBonificacionPrimaVacaciones] = useState('');
const [campoDoceavaPrimaServicios,  setDoceavaPrimaServicios] = useState('');
const [campoSalarioBaseMensualLiquidacionBonificacionPrimaVacaciones, setSalarioBaseMensualLiquidacionBonificacionPrimaVacaciones] = useState('');
const [campoSalarioBaseDiarioLiquidacionBonificacionPrimaVacaciones, setSalarioBaseDiarioLiquidacionBonificacionPrimaVacaciones] = useState('');
const [campoDiasAplicaBeneficioPrimaVacaciones, setDiasAplicaBeneficioPrimaVacaciones] = useState('');
const [campoTotalPrimaVacaciones, setTotalPrimaVacaciones] = useState('');

const [campoIndemnizacionDoceavaBonificacionPrimaVacaciones,  setIndemnizacionDoceavaBonificacionPrimaVacaciones] = useState('');
const [campoIndemnizacionDoceavaPrimaServicios,  setIndemnizacionDoceavaPrimaServicios] = useState('');
const [campoIndemnizacionSalarioBaseMensualLiquidacionBonificacionPrimaVacaciones, setIndemnizacionSalarioBaseMensualLiquidacionBonificacionPrimaVacaciones] = useState('');
const [campoIndemnizacionSalarioBaseDiarioLiquidacionBonificacionPrimaVacaciones, setIndemnizacionSalarioBaseDiarioLiquidacionBonificacionPrimaVacaciones] = useState('');
const [campoIndemnizacionDiasAplicaBeneficioPrimaVacaciones, setIndemnizacionDiasAplicaBeneficioPrimaVacaciones] = useState('');
const [campoTotalIndemnizacionVacaciones, setTotalIndemnizacionVacaciones] = useState('');

const [campoSalarioBaseMensualLiquidacionBonificacionRecreacion, setRecreacionSalarioBaseMensualLiquidacion] = useState('');
const [campoRecreacionSalarioBaseDiarioLiquidacionBonificacion, setRecreacionSalarioBaseDiarioLiquidacion] = useState('');
const [campoRecreacionDiasAplicaBeneficio, setRecreacionDiasAplicaBeneficio] = useState('');
const [campoTotalBonificacionRecreacion, setTotalBonificacionRecreacion] = useState('');

const [campoDoceavaBonificacionPrimaNavidad,  setDoceavaBonificacionPrimaNavidad] = useState('');
const [campoDoceavaPrimaServiciosNavidad,  setDoceavaPrimaServiciosNavidad] = useState('');
const [campoDoceavaPrimaVacacionesNavidad,  setDoceavaPrimaVacacionesNavidad] = useState('');
const [campoSalarioBaseMensualLiquidacionPrimaNavidad, setSalarioBaseMensualLiquidacionBonificacionPrimaNavidad] = useState('');
const [campoSalarioBaseDiarioLiquidacionBonificacionPrimaNavidad, setSalarioBaseDiarioLiquidacionBonificacionPrimaNavidad] = useState('');
const [campoDiasAplicaBeneficioPrimaNavidad, setDiasAplicaBeneficioPrimaNavidad] = useState('');
const [campoTotalPrimaNavidad, setTotalPrimaNavidad] = useState('');

const [campoDoceavaBonificacionCesantias,  setDoceavaBonificacionCesantias] = useState('');
const [campoDoceavaPrimaServiciosCesantias,  setDoceavaPrimaServiciosCesantias] = useState('');
const [campoDoceavaPrimaVacacionesCesantias,  setDoceavaPrimaVacacionesCesantias] = useState('');
const [campoDoceavaPrimaNavidadCesantias,  setDoceavaPrimaNavidadCesantias] = useState('');
const [campoSalarioBaseMensualLiquidacionCesantias, setSalarioBaseMensualLiquidacionBonificacionCesantias] = useState('');
const [campoSalarioBaseDiarioLiquidacionBonificacionCesantias, setSalarioBaseDiarioLiquidacionBonificacionCesantias] = useState('');
const [campoCesantiasDiasAplicaBeneficio, setDiasAplicaBeneficioCesantias] = useState('');
const [campoTotalCesantias, setTotalCesantias] = useState('');

const [campoSalarioBaseMensualLiquidacionInteresCesantias, setSalarioBaseMensualLiquidacionBonificacionInteresCesantias] = useState('');
const [campoSalarioBaseDiarioLiquidacionBonificacionInteresCesantias, setSalarioBaseDiarioLiquidacionBonificacionInteresCesantias] = useState('');
const [campoInteresCesantiasDiasAplicaBeneficio, setDiasAplicaBeneficioInteresCesantias] = useState('');
const [campoTotalInteresCesantias, setTotalInteresCesantias] = useState('');

const setInputNombresApellidos = (event) => {
  const value = event.target.value;
  setCampoNombresApellidos(value);
};

 // Fecha de inicio y fecha de fin en formato ISO (cadena)
 const startDate = '2020-01-01';
 const endDate = '2020-09-03';

 const dias = dias360(startDate, endDate);
 const porcentajeNumeroDias = (dias * campoPorcentajeBonificacionServicioPrestado) /360 

//const [campo2, setCampo2] = useState('');
//const [inputAsignacionBasicaMensual, setInputAsignacionBasicaMensual] = useState('');

const setInputSalarioBase = (event) => {
  const value = event.target.value;
  setCampoAsignacionBasicaMensual(value);
};

const setInputSubsidioTransporte = (event) => {
  const value = event.target.value;
  setCampoSubsidioTransporte(value)
}

const setSlSubsidioTransporte = (event) => {
  const value = event.target.value;
  setCampoSubsidioTransporte(0)
  if(value == 1){
    setInputSubsidioTransporte()
  }
}

const setInputSubsidioAlimentacion = (event) => {
  const value = event.target.value;
  setCampoSubsidioAlimentacion(value)
}

const setSlSubsidioAlimentacion = (event) => {
  const value = event.target.value;
  setCampoSubsidioAlimentacion(0)
  if(value == 1){
    setInputSubsidioAlimentacion()
  }
}

const setInputInferiorA = (event) => {
  const value = event.target.value;
  setCampoInferiorA(value);
  //setCampo2(value);
  if(value==1){
    setPorcentajeBonificacionServicioPrestado(35);
  }
  else{
    setPorcentajeBonificacionServicioPrestado(50);
  }
  // Aquí puedes realizar cualquier lógica adicional, como calcular un nuevo valor para el campo2
  //setCampo2(value.toUpperCase()); // Por ejemplo, convirtiendo el valor de campo1 a mayúsculas y actualizándolo en campo2
};

const setInputPorcentajeBonificacionServicioPrestado = (event) => {
  const value = event.target.value;
  setCampoBonificacionServicioPrestado(value);
  if(value==1){
    setPorcentajeBonificacionServicioPrestado(35);
  }
  else{
    setPorcentajeBonificacionServicioPrestado(50);
  }
  // Aquí puedes realizar cualquier lógica adicional, como calcular un nuevo valor para el campo2
  //setCampo2(value.toUpperCase()); // Por ejemplo, convirtiendo el valor de campo1 a mayúsculas y actualizándolo en campo2
};

const setSlBonificacionServicioPrestado = (event) => {
  const value = event.target.value;
  const form = event.currentTarget
  if (form.checkValidity() === false) {
    event.preventDefault()
    event.stopPropagation()
  }
  setValidated(true)
  //setCampoInferiorA(value);
  //setCampo2(value);
  
  if(value==1){
    //if(campoNombresApellidos!=""){
      setTotalBonificacionServicioPrestado(campoAsignacionBasicaMensual*porcentajeNumeroDias/100);
   // }
   // else{ 
      //alert("Debe ingresar los nombres");
   // }
    
  }
  else{
    setTotalBonificacionServicioPrestado(0);
  }
  // Aquí puedes realizar cualquier lógica adicional, como calcular un nuevo valor para el campo2
  //setCampo2(value.toUpperCase()); // Por ejemplo, convirtiendo el valor de campo1 a mayúsculas y actualizándolo en campo2

};

const handleChange = (e) => {
  const { name, value} = e.target;
  setFormData({
      ...formData,
      [name]: value
  });
};

const setSlPrimaServicio = (event) => {
  setDoceavaBonificacionServicioPrestado(campoTotalBonificacionServicioPrestado/12)
  setSalarioBaseMensualLiquidacionBonificacionServicios(0)
  setSalarioBaseMensualLiquidacionBonificacionServicios(parseFloat(campoAsignacionBasicaMensual)+parseFloat(campoTotalBonificacionServicioPrestado/12))
  setSalarioBaseDiarioLiquidacionBonificacionServicios((parseFloat(campoAsignacionBasicaMensual)+parseFloat(campoTotalBonificacionServicioPrestado/12))/30)
  setDiasAplicaBeneficioServicioPrestado((15*dias)/360)
  if( event.target.value == true){
    setTotalPrimaServicio(((parseFloat(campoAsignacionBasicaMensual)+parseFloat(campoTotalBonificacionServicioPrestado/12))/30)*((15*dias)/360))
  }
}

const setSlPrimaVacaciones = (event) => {
  setDoceavaBonificacionPrimaVacaciones(campoTotalBonificacionServicioPrestado/12)
  setDoceavaPrimaServicios(campoTotalPrimaServicio/12)
  setSalarioBaseMensualLiquidacionBonificacionPrimaVacaciones(0)
  setSalarioBaseMensualLiquidacionBonificacionPrimaVacaciones(parseFloat(campoAsignacionBasicaMensual)+parseFloat(campoTotalBonificacionServicioPrestado/12) +parseFloat(campoTotalPrimaServicio/12))
  setSalarioBaseDiarioLiquidacionBonificacionPrimaVacaciones((parseFloat(campoAsignacionBasicaMensual)+parseFloat(campoTotalBonificacionServicioPrestado/12) +parseFloat(campoTotalPrimaServicio/12) )/30)
  setDiasAplicaBeneficioPrimaVacaciones((15*dias)/360)
  if( event.target.value == true){
    setTotalPrimaVacaciones(((parseFloat(campoAsignacionBasicaMensual)+parseFloat(campoTotalBonificacionServicioPrestado/12) +parseFloat(campoTotalPrimaServicio/12) )/30)*((15*dias)/360))
  }
}

const setSlIndemnizacionVacaciones = (event) => {
  setIndemnizacionDoceavaBonificacionPrimaVacaciones(campoTotalBonificacionServicioPrestado/12)
  setIndemnizacionDoceavaPrimaServicios(campoTotalPrimaServicio/12)
  setIndemnizacionSalarioBaseMensualLiquidacionBonificacionPrimaVacaciones(0)
  setIndemnizacionSalarioBaseMensualLiquidacionBonificacionPrimaVacaciones(parseFloat(campoAsignacionBasicaMensual)+parseFloat(campoTotalBonificacionServicioPrestado/12) +parseFloat(campoTotalPrimaServicio/12))
  setIndemnizacionSalarioBaseDiarioLiquidacionBonificacionPrimaVacaciones((parseFloat(campoAsignacionBasicaMensual)+parseFloat(campoTotalBonificacionServicioPrestado/12) + parseFloat(campoTotalPrimaServicio/12))/30)
  setIndemnizacionDiasAplicaBeneficioPrimaVacaciones((15*dias)/360)
  if( event.target.value == true){
    setTotalIndemnizacionVacaciones(((parseFloat(campoAsignacionBasicaMensual)+parseFloat(campoTotalBonificacionServicioPrestado/12) + parseFloat(campoTotalPrimaServicio/12))/30)*((15*dias)/360))
  }
}

const setSlBonificacionRecreacion = (event) => {

  setRecreacionSalarioBaseMensualLiquidacion(0)
  setRecreacionSalarioBaseMensualLiquidacion(parseFloat(campoAsignacionBasicaMensual))
  setRecreacionSalarioBaseDiarioLiquidacion(parseFloat(campoAsignacionBasicaMensual)/30)
  setRecreacionDiasAplicaBeneficio((dias*2)/360)
  if( event.target.value == true){
    setTotalBonificacionRecreacion((parseFloat(campoAsignacionBasicaMensual)/30) *((dias*2)/360)) 
  }
}

const setSlPrimaNavidad = (event) => {
  setDoceavaBonificacionPrimaNavidad(campoTotalBonificacionServicioPrestado/12)
  setDoceavaPrimaServiciosNavidad(campoTotalPrimaServicio/12)
  setDoceavaPrimaVacacionesNavidad(campoTotalPrimaVacaciones/12)
  setSalarioBaseMensualLiquidacionBonificacionPrimaNavidad(0)
  setSalarioBaseMensualLiquidacionBonificacionPrimaNavidad(parseFloat(campoAsignacionBasicaMensual)+parseFloat(campoTotalBonificacionServicioPrestado/12) +parseFloat(campoTotalPrimaServicio/12) + campoTotalPrimaVacaciones/12 )
  setSalarioBaseDiarioLiquidacionBonificacionPrimaNavidad((parseFloat(campoAsignacionBasicaMensual)+parseFloat(campoTotalBonificacionServicioPrestado/12) + parseFloat(campoTotalPrimaServicio/12) +campoTotalPrimaVacaciones/12 )/30)
  setDiasAplicaBeneficioPrimaNavidad((30*dias)/360)
  if( event.target.value == true){
    setTotalPrimaNavidad(((parseFloat(campoAsignacionBasicaMensual)+parseFloat(campoTotalBonificacionServicioPrestado/12) + parseFloat(campoTotalPrimaServicio/12) + campoTotalPrimaVacaciones/12 )/30)*((30*dias)/360))
  }
}

const setSlCesantias = (event) => {
  setDoceavaBonificacionCesantias(campoTotalBonificacionServicioPrestado/12)
  setDoceavaPrimaServiciosCesantias(campoTotalPrimaServicio/12)
  setDoceavaPrimaVacacionesCesantias(campoTotalPrimaVacaciones/12)
  setDoceavaPrimaNavidadCesantias(campoTotalPrimaNavidad/12)
  setSalarioBaseMensualLiquidacionBonificacionCesantias(0)
  setSalarioBaseMensualLiquidacionBonificacionCesantias(parseFloat(campoAsignacionBasicaMensual)+parseFloat(campoTotalBonificacionServicioPrestado/12) +parseFloat(campoTotalPrimaServicio/12) + parseFloat(campoTotalPrimaVacaciones/12) + parseFloat(campoTotalPrimaNavidad/12))
  setSalarioBaseDiarioLiquidacionBonificacionCesantias((parseFloat(campoAsignacionBasicaMensual)+parseFloat(campoTotalBonificacionServicioPrestado/12) + parseFloat(campoTotalPrimaServicio/12) + parseFloat(campoTotalPrimaVacaciones/12) +  parseFloat(campoTotalPrimaNavidad/12))/30)
  setDiasAplicaBeneficioCesantias((30*dias)/360)
  if( event.target.value == true){
    setTotalCesantias(((parseFloat(campoAsignacionBasicaMensual)+parseFloat(campoTotalBonificacionServicioPrestado/12) + parseFloat(campoTotalPrimaServicio/12) + parseFloat(campoTotalPrimaVacaciones/12) + parseFloat(campoTotalPrimaNavidad/12) )/30)*((30*dias)/360))
  }
}

const setSlInteresCesantias = (event) => {
  setSalarioBaseMensualLiquidacionBonificacionInteresCesantias(0)
  setSalarioBaseMensualLiquidacionBonificacionInteresCesantias(parseFloat(campoAsignacionBasicaMensual)+parseFloat(campoTotalBonificacionServicioPrestado/12) +parseFloat(campoTotalPrimaServicio/12) + parseFloat(campoTotalPrimaVacaciones/12) + parseFloat(campoTotalPrimaNavidad/12))
  setSalarioBaseDiarioLiquidacionBonificacionInteresCesantias((parseFloat(campoAsignacionBasicaMensual)+parseFloat(campoTotalBonificacionServicioPrestado/12) + parseFloat(campoTotalPrimaServicio/12) + parseFloat(campoTotalPrimaVacaciones/12) +  parseFloat(campoTotalPrimaNavidad/12))/30)
  setDiasAplicaBeneficioInteresCesantias((30*dias)/360)
  if( event.target.value == true){
    setTotalInteresCesantias((parseFloat(campoTotalCesantias)*0.12*dias)/360)
  }
}

/*const FileUpload = () => {
    const [file, setFile] = useState(null);
  
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleUpload = async () => {
      const formData = new FormData();
      formData.append('file', file);
  
      try {
        const response = await axios.post('http://localhost:8000/upload/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log('File uploaded successfully');
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    };
}
*/
const [file, setFile] = useState(null);

const handleFileChange = (e) => {
  setFile(e.target.files[0]);
};

  const [validated, setValidated] = useState(false)
  const handleSubmit = async (e) => {

  //const [file, setFile] = useState(null);
   e.preventDefault();

    const formData = new FormData();
    //ormData.append('file', file);
    //formData.append('file', file);
     
   /* const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
    */
    formData.append('file', file);
    console.log(formData)
    
    //try {
      //const response = await axios.post('http://127.0.0.1:8000/api1/clientes', formData
        //body: JSON.stringify(formData)
        //body: formData,
                            //  );
      /*console.log(response)
      if (response.ok) {
        console.log('Formulario enviado correctamente');
      } else {
        console.error(response.body+'Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
  }*/
  axios.post('http://127.0.0.1:8000/api1/clientes', formData)
  .then(response => {
    console.log(response.data);
    // Handle success, show success message to the user
  })
  .catch(error => {
    console.error('Error uploading file:', error);
    // Handle error, show error message to the user
  });
//};

    /*try {
      const response = await fetch('http://127.0.0.1:8000/api1/clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      console.log(formData)
      if (response.ok) {
        console.log('Formulario enviado correctamente');
      } else {
        console.error(response.body+'Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
  }
}*/
  }
  
  return (
    <CForm
      className="row gy-1 gx-4 align-items-center needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
    <CRow className="g-1">
      <CFormLabel htmlFor="inputNombresApellidos" className="col-sm-2 col-form-label custom-label" 
      
      >Nombres y Apellidos</CFormLabel>
      <CCol sm={4} >
        <CFormInput type="text" id="inputNombresApellidos"
              className ="custom-height-text"
              onChange={setInputNombresApellidos}
              defaultValue=""
              feedbackValid=""
              required
        />
      </CCol>

      <CFormLabel htmlFor="inputSalarioBase" className="col-sm-2 col-form-label custom-label">Salario Base</CFormLabel>
      <CCol sm={3} >
        <CFormInput type="text" id="inputSalarioBase"  onChange={setInputSalarioBase}
        required
        className ="custom-height-text"
        />
      </CCol>

      <CFormLabel htmlFor="inputYear" className="col-sm-1 col-form-label custom-label">Año</CFormLabel>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputDocumento" className="col-sm-2 col-form-label custom-label">Documento Identificación</CFormLabel>
      <CCol sm={4} >
        <CFormInput type="text" id="inputDocumento"
        required
        className ="custom-height-text"
        />
      </CCol>

      <CFormLabel htmlFor="inputInferiorA" className="col-sm-2 col-form-label custom-label">Inferior a $1.763.224</CFormLabel>
      <CCol sm={3} >
          <CFormSelect size="md" className="mb-1" aria-label="Large select example"  onChange={setInputInferiorA}
          class ="custom-height-text">
            <option>Seleccionar</option>
            <option value="1">SI</option>
            <option value="0">NO</option>
        </CFormSelect>
      </CCol>

      <CCol sm={1} >
        <CFormInput type="text" id="inputAnio" className ="custom-height-text" />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputFechaIngreso" className="col-sm-2 col-form-label custom-label" >Fecha de Ingreso</CFormLabel>
      <CCol sm={4} >
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="yyyy-MM-dd"
       
      />
      </CCol>

      <CFormLabel htmlFor="inputInferiorA" className="col-sm-2 col-form-label custom-label" >Subsidio de Transporte</CFormLabel>
      <CCol sm={3} >
        <CFormInput type="text" id="inputSubsidioTransporte" 
        onChangeCapture={setInputSubsidioTransporte}
        required
        className ="custom-height-text"
        />
      </CCol>

      <CCol sm={1} >
          <CFormSelect size="md" className ="custom-height-text" id="slSubsidioTransporte" aria-label="Large select example"
          onChange={setSlSubsidioTransporte}
          required
          >
            <option></option>
            <option value="1">SI</option>
            <option value="0">NO</option>
        </CFormSelect>
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputFechaSalida" className="col-sm-2 col-form-label custom-label">Fecha de Salida</CFormLabel>
      <CCol sm={4} >
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="yyyy-MM-dd"
        className ="custom-height-text"
      />
      </CCol>

      <CFormLabel htmlFor="inputSubsidioAlimentacion" className="col-sm-2 col-form-label custom-label">Subsidio de Alimentación</CFormLabel>
      <CCol sm={3} >
        <CFormInput type="text" id="inputSubsidioAlimentacion"
        onChangeCapture={setInputSubsidioAlimentacion}
        required
        className ="custom-height-text"/>
      </CCol>

      <CCol sm={1} >
          <CFormSelect size="md" className="mb-3" id="slSubsidioAlimentacion" aria-label="Large select example"
          onChangeCapture={setSlSubsidioAlimentacion}
          required
          class ="custom-height-text">
            <option></option>
            <option value="1">SI</option>
            <option value="0">NO</option>
        </CFormSelect>
      </CCol>
    </CRow>

  <CRow>
    <CCol sm="auto">
    <CRow className="g-1">
      <CFormLabel htmlFor="slBonficiacionServicioPrestado" className="col-sm-6 col-form-label custom-label">1.) Bonificación por Servicio Prestado</CFormLabel>
      <CCol sm={6} >
          <CFormSelect size="md-10" 
         
            id="slBonficiacionServicioPrestado" 
            aria-label="Large select example" 
            onChange={setSlBonificacionServicioPrestado} 
            className ="custom-height-text"
            required>
            <option></option>
            <option value="1">SI</option>
            <option value="0">NO</option>
        </CFormSelect>
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputAsignacionBasicaMensual" 
          className="col-sm-5 col-form-label custom-label">Asignación Básica mensual </CFormLabel>
      <CCol sm={5} >
        <CFormInput 
          type="text" 
          id="inputAsignacionBasicaMensual" 
          value={campoAsignacionBasicaMensual}
          required = {false}
          className ="custom-height-text"
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputPorcentajeBonificacionServicioPrestado" className="col-sm-5 col-form-label custom-label">Porcentaje</CFormLabel>
      <CCol sm={5} >
        <CFormInput type="text" id="inputPorcentajeBonificacionServicioPrestado" className ="custom-height-text" value={campoPorcentajeBonificacionServicioPrestado+"%"} />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputFechaInicialLiquidacion" className="col-sm-5 col-form-label custom-label">Fecha Inicial Liquidación</CFormLabel>
      <CCol sm={5} >
        <CFormInput type="text" id="inputFechaInicialLiquidacion" className ="custom-height-text" value="1/1/2020"/>
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputFechaFinalLiquidacion" className="col-sm-5 col-form-label  custom-label">Fecha Final Liquidación</CFormLabel>
      <CCol sm={5} >
        <CFormInput type="text" id="inputFechaFinalLiquidacion"  className ="custom-height-text" value="9/3/2020" />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputFechaIngreso" className="col-sm-5 col-form-label  custom-label">Días Transcurridos a Cotizar</CFormLabel>
      <CCol sm={5} >
        <CFormInput type="text" id="inputFechaIngreso" className ="custom-height-text" value= {dias} />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputFPorcentajeNumeroDias" className="col-sm-5 col-form-label custom-label" >Porcentaje Según Número Días</CFormLabel>
      <CCol sm={5} >
        <CFormInput type="text" id="inputFPorcentajeNumeroDias" className ="custom-height-text" value = {porcentajeNumeroDias}/>
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputTotalBonificacionServicioPrestado" className="col-sm-5 col-form-label custom-label">Total Bonificación por Servicio Prestado</CFormLabel>
      <CCol sm={5} >
        <CFormInput type="text" id="inputTotalBonificacionServicioPrestado" className ="custom-height-text" value={campoTotalBonificacionServicioPrestado} />
      </CCol>
    </CRow>


    </CCol>
    <CCol sm="auto">One of three columns</CCol>
    <CCol sm="auto">One of three columns</CCol>
  </CRow>


    { /* 1.) Bonificación por Servicio Prestado */ }
  

    { /* 2.) Prima de Servicio */ }
    <CRow className="g-1">
      <CFormLabel htmlFor="slPrimaServicio" className="col-sm-3 col-form-label custom-label">2.) Prima Servicio</CFormLabel>
      <CCol sm={1} >
          <CFormSelect size="md" 
            className ="custom-height-text"
            id="slPrimaServicio" 
            aria-label="Large select example" 
            onChange={setSlPrimaServicio} 
            required>
            <option></option>
            <option value="1">SI</option>
            <option value="0">NO</option>
        </CFormSelect>
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputAsignacionBasicaMensualPrimaServicio" 
          className="col-sm-2 col-form-label">Asignación Básica mensual </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputAsignacionBasicaMensualPrimaServicio" 
          value={campoAsignacionBasicaMensual}
          required = {false}
          className ="custom-height-text"
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputSubsidioTransportePrimaServicio" 
          className="col-sm-2 col-form-label">Subsidio de Transporte </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputSubsidioTransportePrimaServicio" 
         value = {campoSubsidioTransporte}
          required = {false}
          className ="custom-height-text"
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputSubsidioAlimentacionPrimaServicio" 
          className="col-sm-2 col-form-label">Subsidio de Alimentación </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputSubsidioAlimentacionPrimaServicio" 
          value={campoSubsidioAlimentacion}
          required = {false}
          className ="custom-height-text"
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputDoceavaBonificacionServicios" 
          className="col-sm-2 col-form-label">Doceava Bonificación de Servicios </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputDoceavaBonificacionServicios" 
          value = {campoDoceavaBonificacionServicioPrestado}
          required = {false}
          className ="custom-height-text"
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputSalarioBaseMensualLiquidacionBonificacionServicios" 
          className="col-sm-2 col-form-label">Salario Base Mensual de Liquidación </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputSalarioBaseMensualLiquidacionBonificacionServicios" 
          value = {campoSalarioBaseMensualLiquidacionBonificacionServicios}
          required = {false}
          className ="custom-height-text"
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputSalarioBaseDiarioLiquidacionBonificacionServicios" 
          className="col-sm-2 col-form-label">Salario Base Diario de Liquidación </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputSalarioBaseDiarioLiquidacionBonificacionServicios" 
          value = {campoSalarioBaseDiarioLiquidacionBonificacionServicios}
          required = {false}
          className ="custom-height-text"
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputPorcentajeBonificacionServicioPrestado" className="col-sm-2 col-form-label">Porcentaje</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputPorcentajeBonificacionServicioPrestado" 
        value={campoPorcentajeBonificacionServicioPrestado+"%"} 
        className ="custom-height-text"/>
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputFechaInicialLiquidacion" className="col-sm-2 col-form-label">Fecha Inicial Liquidación</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputFechaInicialLiquidacion" 
        value="1/1/2020" className ="custom-height-text"/>
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputFechaFinalLiquidacion" className="col-sm-2 col-form-label">Fecha Final Liquidación</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputFechaFinalLiquidacion" className ="custom-height-text" value="9/3/2020" />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputFechaIngreso" className="col-sm-2 col-form-label">Días Transcurridos a Cotizar</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputFechaIngreso" value= {dias} className ="custom-height-text" />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputDiasAplicaBeneficioServicioPrestado" className="col-sm-2 col-form-label" >Dias que Aplica el Beneficio</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputDiasAplicaBeneficioServicioPrestado" 
        className ="custom-height-text"
        value = {campoDiasAplicaBeneficioServicioPrestado}/>
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputTotalPrimaServicio" className="col-sm-2 col-form-label">Total Prima de Servicio</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputTotalPrimaServicio" value={campoTotalPrimaServicio}
        className ="custom-height-text" />
      </CCol>
    </CRow>

    { /* 3.) Prima de Vacaciones */ }
    <CRow className="g-1">
      <CFormLabel htmlFor="slPrimaVacaciones" className="col-sm-3 col-form-label">3.) Prima Vacaciones</CFormLabel>
      <CCol sm={1} >
          <CFormSelect size="md" 
            className ="custom-height-text"
            id="slPrimaVacaciones" 
            aria-label="Large select example" 
            onChange={setSlPrimaVacaciones} 
            required>
            <option></option>
            <option value="1">SI</option>
            <option value="0">NO</option>
        </CFormSelect>
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputAsignacionBasicaMensualPrimaVacaciones" 
          className="col-sm-2 col-form-label">Asignación Básica mensual </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputAsignacionBasicaMensualPrimaVacaciones" 
          value={campoAsignacionBasicaMensual}
          required = {false}
          className ="custom-height-text"
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputSubsidioTransportePrimaVacaciones" 
          className="col-sm-2 col-form-label">Subsidio de Transporte </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputSubsidioTransportePrimaVacaciones" 
         value = {campoSubsidioTransporte}
          required = {false}
          className ="custom-height-text"
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputSubsidioAlimentacionPrimaVacaciones" 
          className="col-sm-2 col-form-label">Subsidio de Alimentación </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputSubsidioAlimentacionPrimaVacaciones" 
          value={campoSubsidioAlimentacion}
          required = {false}
          className ="custom-height-text"
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputDoceavaBonificacionServicios" 
          className="col-sm-2 col-form-label">Doceava Bonificación de Servicios </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputDoceavaBonificacionServicios" 
          value = {campoDoceavaBonificacionServicioPrestado}
          required = {false}
          className ="custom-height-text"
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputDoceavaPrimaServicios" 
          className="col-sm-2 col-form-label">Doceava Prima de Servicios </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputDoceavaPrimaServicios" 
          value = {campoDoceavaPrimaServicios}
          required = {false}
          className ="custom-height-text"
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputSalarioBaseMensualLiquidacionPrimaVacaciones" 
          className="col-sm-2 col-form-label">Salario Base Mensual de Liquidación </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputSalarioBaseMensualLiquidacionPrimaVacaciones" 
          value = {campoSalarioBaseMensualLiquidacionBonificacionPrimaVacaciones}
          required = {false}
          className ="custom-height-text"
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputSalarioBaseDiarioLiquidacionPrimaVacaciones" 
          className="col-sm-2 col-form-label">Salario Base Diario de Liquidación </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputSalarioBaseDiarioLiquidacionPrimaVacaciones" 
          value = {campoSalarioBaseDiarioLiquidacionBonificacionPrimaVacaciones}
          required = {false}
          className ="custom-height-text"
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputFechaInicialLiquidacion" className="col-sm-2 col-form-label">Fecha Inicial Liquidación</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputFechaInicialLiquidacion" value="1/1/2020"
        className ="custom-height-text"/>
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputFechaFinalLiquidacion" className="col-sm-2 col-form-label">Fecha Final Liquidación</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputFechaFinalLiquidacion" value="9/3/2020" 
        className ="custom-height-text"/>
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputFechaIngreso" className="col-sm-2 col-form-label">Días Transcurridos a Cotizar</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputFechaIngreso" value= {dias} 
        className ="custom-height-text"/>
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputDiasAplicaBeneficioPrimaVacaciones" className="col-sm-2 col-form-label" >Dias que Aplica el Beneficio</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputDiasAplicaBeneficioPrimaServicios" 
        value = {campoDiasAplicaBeneficioPrimaVacaciones}
        className ="custom-height-text"
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputTotalPrimaVacaciones" className="col-sm-2 col-form-label">Total Prima de Vacaciones</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputTotalPrimaVacaciones" value={campoTotalPrimaVacaciones} 
        className ="custom-height-text"/>
      </CCol>
    </CRow>

    { /****************** 4.) Imdemnización Vacaciones */ }
    <CRow className="g-1">
      <CFormLabel htmlFor="slIndemnizacionVacaciones" className="col-sm-3 col-form-label">4.) Indemnización Vacaciones</CFormLabel>
      <CCol sm={1} >
          <CFormSelect size="md" 
            className ="custom-height-text"
            id="slIndemnizacionVacaciones" 
            aria-label="Large select example" 
            onChange={setSlIndemnizacionVacaciones} 
            required>
            <option></option>
            <option value="1">SI</option>
            <option value="0">NO</option>
        </CFormSelect>
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputIndemnizacionAsignacionBasicaMensualPrimaVacaciones" 
          className="col-sm-2 col-form-label">Asignación Básica mensual </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputIndemnizacionAsignacionBasicaMensualPrimaVacaciones" 
          value={campoAsignacionBasicaMensual}
          required = {false}
          className ="custom-height-text"
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputIndemnizacionSubsidioTransportePrimaVacaciones" 
          className="col-sm-2 col-form-label">Subsidio de Transporte </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputIndemnizacionSubsidioTransportePrimaVacaciones" 
         value = {campoSubsidioTransporte}
          required = {false}
          className ="custom-height-text"
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputIndemnizacionSubsidioAlimentacionPrimaVacaciones" 
          className="col-sm-2 col-form-label">Subsidio de Alimentación </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputIndemnizacionSubsidioAlimentacionPrimaVacaciones" 
          value={campoSubsidioAlimentacion}
          required = {false}
          className ="custom-height-text"
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputIndemnizacionDoceavaBonificacionServicios" 
          className="col-sm-2 col-form-label">Doceava Bonificación de Servicios </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputIndemnizacionDoceavaBonificacionServicios" 
          value = {campoDoceavaBonificacionServicioPrestado}
          required = {false}
          className ="custom-height-text"
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputIndemnizacionDoceavaPrimaServicios" 
          className="col-sm-2 col-form-label">Doceava Prima de Servicios </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputIndemnizacionDoceavaPrimaServicios" 
          value = {campoIndemnizacionDoceavaPrimaServicios}
          required = {false}
          className ="custom-height-text"
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputIndemnizacionSalarioBaseMensualLiquidacionPrimaVacaciones" 
          className="col-sm-2 col-form-label">Salario Base Mensual de Liquidación </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputIndemnizacionSalarioBaseMensualLiquidacionPrimaVacaciones" 
          value = {campoIndemnizacionSalarioBaseMensualLiquidacionBonificacionPrimaVacaciones}
          required = {false}
          className ="custom-height-text"
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputIndemnizacionSalarioBaseDiarioLiquidacionPrimaVacaciones" 
          className="col-sm-2 col-form-label">Salario Base Diario de Liquidación </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputIndemnizacionSalarioBaseDiarioLiquidacionPrimaVacaciones" 
          value = {campoIndemnizacionSalarioBaseDiarioLiquidacionBonificacionPrimaVacaciones}
          required = {false}
          className ="custom-height-text"
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputIndemnizacionFechaInicialLiquidacion" className="col-sm-2 col-form-label">Fecha Inicial Liquidación</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputIndemnizacionFechaInicialLiquidacion" value="1/1/2020"
        className ="custom-height-text"/>
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputIndemnizacionFechaFinalLiquidacion" className="col-sm-2 col-form-label">Fecha Final Liquidación</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputIndemnizacionFechaFinalLiquidacion" value="9/3/2020" 
        className ="custom-height-text"/>
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputIndemnizacionFechaIngreso" className="col-sm-2 col-form-label">Días Transcurridos a Cotizar</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputIndemnizacionFechaIngreso" value= {dias} 
        className ="custom-height-text"/>
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputIndemnizacionDiasAplicaBeneficioPrimaVacaciones" className="col-sm-2 col-form-label" >Dias que Aplica el Beneficio</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputIndemnizacionDiasAplicaBeneficioPrimaServicios" 
        value = {campoIndemnizacionDiasAplicaBeneficioPrimaVacaciones}
        className ="custom-height-text"/>
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputTotalIndemnizacionVacaciones" className="col-sm-2 col-form-label">Total Indemnización de Vacaciones</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputTotalIndemnizacionVacaciones" value={campoTotalIndemnizacionVacaciones} 
        className ="custom-height-text"/>
      </CCol>
    </CRow>


    { /****************** 4.) Bonificación Especial por Recreación */ }
    <CRow className="g-1">
      <CFormLabel htmlFor="slBonificacionRecreacion" className="col-sm-3 col-form-label">5.) Bonificación Especial por Recreación</CFormLabel>
      <CCol sm={1} >
          <CFormSelect size="md" 
            className="mb-3" 
            id="slBonificacionRecreacion" 
            aria-label="Large select example" 
            onChange={setSlBonificacionRecreacion} 
            required>
            <option></option>
            <option value="1">SI</option>
            <option value="0">NO</option>
        </CFormSelect>
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputRecreacionAsignacionBasicaMensual" 
          className="col-sm-2 col-form-label">Asignación Básica Mensual </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputRecreacionAsignacionBasicaMensual" 
          value={campoAsignacionBasicaMensual}
          required = {false}
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputRecreacionAsignacionBasicaDiaria" 
          className="col-sm-2 col-form-label">Asignación Básica Diaria </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputRecreacionAsignacionBasicaDiaria" 
          value={campoRecreacionSalarioBaseDiarioLiquidacionBonificacion}
          required = {false}
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputRecreacionFechaInicialLiquidacion" className="col-sm-2 col-form-label">Fecha Inicial Liquidación</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputRecreacionFechaInicialLiquidacion" value="1/1/2020"/>
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputIndemnizacionFechaFinalLiquidacion" className="col-sm-2 col-form-label">Fecha Final Liquidación</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputIndemnizacionFechaFinalLiquidacion" value="9/3/2020" />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputRecreacionDiasCotizar" className="col-sm-2 col-form-label">Días Transcurridos a Cotizar</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputRecreacionDiasCotizar" value= {dias} />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputRecreacionDiasAplicaBeneficio" className="col-sm-2 col-form-label" >Dias que Aplica el Beneficio</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputRecreacionDiasAplicaBeneficio" value = {campoRecreacionDiasAplicaBeneficio}/>
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputTotalBonificacionRecreacion" className="col-sm-2 col-form-label">Total Bonificación Especial por Recreación</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputTotalBonificacionRecreacion" value={campoTotalBonificacionRecreacion} />
      </CCol>
    </CRow>



    { /* 6.) Prima de Navidad */ }
    <CRow className="g-1">
      <CFormLabel htmlFor="slPrimaNavidad" className="col-sm-3 col-form-label">6.) Prima de Navidad</CFormLabel>
      <CCol sm={1} >
          <CFormSelect size="md" 
            className="mb-3" 
            id="slPrimaNavidad" 
            aria-label="Large select example" 
            onChange={setSlPrimaNavidad} 
            required>
            <option></option>
            <option value="1">SI</option>
            <option value="0">NO</option>
        </CFormSelect>
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputAsignacionBasicaMensualPrimaNavidad" 
          className="col-sm-2 col-form-label">Asignación Básica mensual </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputAsignacionBasicaMensualPrimaNavidad" 
          value={campoAsignacionBasicaMensual}
          required = {false}
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputSubsidioTransportePrimaNavidad" 
          className="col-sm-2 col-form-label">Subsidio de Transporte </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputSubsidioTransportePrimaNavidad" 
         value = {campoSubsidioTransporte}
          required = {false}
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputSubsidioAlimentacionPrimaNavidad" 
          className="col-sm-2 col-form-label">Subsidio de Alimentación </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputSubsidioAlimentacionPrimaNavidad" 
          value={campoSubsidioAlimentacion}
          required = {false}
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputDoceavaBonificacionServicios" 
          className="col-sm-2 col-form-label">Doceava Bonificación de Servicios </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputDoceavaBonificacionServicios" 
          value = {campoDoceavaBonificacionServicioPrestado}
          required = {false}
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputDoceavaPrimaServicios" 
          className="col-sm-2 col-form-label">Doceava Prima de Servicios </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputDoceavaPrimaServicios" 
          value = {campoDoceavaPrimaServiciosNavidad}
          required = {false}
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputDoceavaPrimaVacacionesNavidad" 
          className="col-sm-2 col-form-label">Doceava Prima de Vacaciones </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputDoceavaPrimaVacacionesNavidad" 
          value = {campoDoceavaPrimaVacacionesNavidad}
          required = {false}
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputSalarioBaseMensualLiquidacionPrimaNavidad" 
          className="col-sm-2 col-form-label">Salario Base Mensual de Liquidación </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputSalarioBaseMensualLiquidacionPrimaNavidad" 
          value = {campoSalarioBaseMensualLiquidacionPrimaNavidad}
          required = {false}
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputSalarioBaseDiarioLiquidacionPrimaNavidad" 
          className="col-sm-2 col-form-label">Salario Base Diario de Liquidación </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputSalarioBaseDiarioLiquidacionPrimaNavidad" 
          value = {campoSalarioBaseDiarioLiquidacionBonificacionPrimaNavidad}
          required = {false}
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputFechaInicialLiquidacion" className="col-sm-2 col-form-label">Fecha Inicial Liquidación</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputFechaInicialLiquidacion" value="1/1/2020"/>
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputFechaFinalLiquidacion" className="col-sm-2 col-form-label">Fecha Final Liquidación</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputFechaFinalLiquidacion" value="9/3/2020" />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputFechaIngreso" className="col-sm-2 col-form-label">Días Transcurridos a Cotizar</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputFechaIngreso" value= {dias} />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputDiasAplicaBeneficioPrimaNavidad" className="col-sm-2 col-form-label" >Dias que Aplica el Beneficio</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputDiasAplicaBeneficioPrimaNavidad" value = {campoDiasAplicaBeneficioPrimaNavidad}/>
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputTotalPrimaNavidad" className="col-sm-2 col-form-label">Total Prima de Navidad</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputTotalPrimaNavidad" value={campoTotalPrimaNavidad} />
      </CCol>
    </CRow>



{ /****************** 7.) Cesantías*/ }
<CRow className="g-1">
      <CFormLabel htmlFor="slCesantias" className="col-sm-3 col-form-label">7.) Cesantías</CFormLabel>
      <CCol sm={1} >
          <CFormSelect size="md" 
            className="mb-3" 
            id="slCesantias" 
            aria-label="Large select example" 
            onChange={setSlCesantias} 
            required>
            <option></option>
            <option value="1">SI</option>
            <option value="0">NO</option>
        </CFormSelect>
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputAsignacionBasicaMensualCesantias" 
          className="col-sm-2 col-form-label">Asignación Básica mensual </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputAsignacionBasicaMensualCesantias" 
          value={campoAsignacionBasicaMensual}
          required = {false}
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputSubsidioTransporteCesantias" 
          className="col-sm-2 col-form-label">Subsidio de Transporte </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputSubsidioTransporteCesantias" 
         value = {campoSubsidioTransporte}
          required = {false}
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputSubsidioAlimentacionCesantias" 
          className="col-sm-2 col-form-label">Subsidio de Alimentación </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputSubsidioAlimentacionCesantias" 
          value={campoSubsidioAlimentacion}
          required = {false}
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputDoceavaBonificacionServiciosCesantias" 
          className="col-sm-2 col-form-label">Doceava Bonificación de Servicios </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputDoceavaBonificacionServiciosCesantias" 
          value = {campoDoceavaBonificacionServicioPrestado}
          required = {false}
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputDoceavaPrimaServiciosCesantias" 
          className="col-sm-2 col-form-label">Doceava Prima de Servicios </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputDoceavaPrimaServiciosCesatias" 
          value = {campoDoceavaPrimaServiciosCesantias}
          required = {false}
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputDoceavaPrimaVacacionesCesantias" 
          className="col-sm-2 col-form-label">Doceava Prima de Vacaciones </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputDoceavaPrimaVacacionesCesantias" 
          value = {campoDoceavaPrimaVacacionesCesantias}
          required = {false}
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputDoceavaPrimaNavidaDCesantias" 
          className="col-sm-2 col-form-label">Doceava Prima de Navidad </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputDoceavaPrimaNavidadCesantias" 
          value = {campoDoceavaPrimaNavidadCesantias}
          required = {false}
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputSalarioBaseMensualLiquidacionCesantias" 
          className="col-sm-2 col-form-label">Salario Base Mensual de Liquidación </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputSalarioBaseMensualLiquidacionCesantias" 
          value = {campoSalarioBaseMensualLiquidacionCesantias}
          required = {false}
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputSalarioBaseDiarioLiquidacionCesantias" 
          className="col-sm-2 col-form-label">Salario Base Diario de Liquidación </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputSalarioBaseDiarioLiquidacionCesantias" 
          value = {campoSalarioBaseDiarioLiquidacionBonificacionCesantias}
          required = {false}
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputFechaInicialLiquidacionCesantias" className="col-sm-2 col-form-label">Fecha Inicial Liquidación</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputFechaInicialLiquidacionCesantias" value="1/1/2020"/>
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputFechaFinalLiquidacionCesantias" className="col-sm-2 col-form-label">Fecha Final Liquidación</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputFechaFinalLiquidacionCesantias" value="9/3/2020" />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputFechaIngreso" className="col-sm-2 col-form-label">Días Transcurridos a Cotizar</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputFechaIngreso" value= {dias} />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputDiasAplicaBeneficioPrimaNavidad" className="col-sm-2 col-form-label" >Dias que Aplica el Beneficio</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputDiasAplicaBeneficioPrimaNavidad" value = {campoDiasAplicaBeneficioPrimaNavidad}/>
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputTotalCesantias" className="col-sm-2 col-form-label">Total Cesantías</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputTotalCesantias" value={campoTotalCesantias} />
      </CCol>
    </CRow>


 { /****************** 8.) Interes a las Cesantías*/ }

    <CRow className="g-1">
      <CFormLabel htmlFor="slInteresCesantias" className="col-sm-3 col-form-label">7.) Interés a las Cesantías</CFormLabel>
      <CCol sm={1} >
          <CFormSelect size="md" 
            className="mb-3" 
            id="slInteresCesantias" 
            aria-label="Large select example" 
            onChange={setSlInteresCesantias} 
            required>
            <option></option>
            <option value="1">SI</option>
            <option value="0">NO</option>
        </CFormSelect>
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputSalarioBaseMensualLiquidacionCesantias" 
          className="col-sm-2 col-form-label">Salario Base Mensual de Liquidación </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputSalarioBaseMensualLiquidacionInteresCesantias" 
          value = {campoSalarioBaseMensualLiquidacionInteresCesantias}
          required = {false}
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel 
          htmlFor="inputSalarioBaseDiarioLiquidacionInteresCesantias" 
          className="col-sm-2 col-form-label">Salario Base Diario de Liquidación </CFormLabel>
      <CCol sm={2} >
        <CFormInput 
          type="text" 
          id="inputSalarioBaseDiarioLiquidacionInteresCesantias" 
          value = {campoSalarioBaseDiarioLiquidacionBonificacionInteresCesantias}
          required = {false}
        />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputFechaInicialLiquidacionInteresCesantias" className="col-sm-2 col-form-label">Fecha Inicial Liquidación</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputFechaInicialLiquidacionInteresCesantias" value="1/1/2020"/>
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputFechaFinalLiquidacionInteresCesantias" className="col-sm-2 col-form-label">Fecha Final Liquidación</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputFechaFinalLiquidacionInteresCesantias" value="9/3/2020" />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputFechaIngreso" className="col-sm-2 col-form-label">Días Transcurridos a Cotizar</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputFechaIngreso" value= {dias} />
      </CCol>
    </CRow>

    <CRow className="g-1">
      <CFormLabel htmlFor="inputTotalInteresCesantias" className="col-sm-2 col-form-label">Total Interes a las Cesantías</CFormLabel>
      <CCol sm={2} >
        <CFormInput type="text" id="inputTotalInteresCesantias" value={campoTotalInteresCesantias} />
      </CCol>
    </CRow>

    </CForm>
  )
}

const BrowserDefaults = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
}

const Tooltips = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
}

const LiquidadorPrestacionesSociales = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Liquidador Prestaciones Sociales</strong> <small></small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/validation">{CustomStyles()}</DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}




export default LiquidadorPrestacionesSociales

