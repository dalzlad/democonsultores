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






const CustomStyles = () => {
  const [formData, setFormData] = useState({
    Documento:'',
    Nombres:'',
    Apellidos:'',
    CorreoElectronico:'',
    File:''
});

const handleChange = (e) => {
  const { name, value} = e.target;
  setFormData({
      ...formData,
      [name]: value
  });
};

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
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom01">Documento</CFormLabel>
        <CFormInput type="text" id="validationCustom01" defaultValue="" 
                name="Documento"
                value={FormData.Documento}
                onChange={handleChange} required />
        <CFormFeedback valid>Correcto</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom02">Nombres</CFormLabel>
        <CFormInput type="text" id="validationCustom02" defaultValue=""
                name="Nombres"
                value={FormData.Nombres}
                onChange={handleChange}  required />
        <CFormFeedback valid>Correcto</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom03">Apellidos</CFormLabel>
        <CFormInput type="text" id="validationCustom03" 
        name="Apellidos"
        value={FormData.Apellidos}
        onChange={handleChange} 
        required />
        <CFormFeedback invalid>Por favor digite los apellidos.</CFormFeedback>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustomUsername">Email</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationCustomUsername"
            defaultValue=""
            aria-describedby="inputGroupPrepend"
            name="CorreoElectronico"
                value={FormData.CorreoElectronico}
                onChange={handleChange} 
            required
          />
          <CFormFeedback invalid>Please choose a username.</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={12}>
            <CFormLabel htmlFor="validationArchivo">Archivo </CFormLabel>
            <CFormLabel htmlFor="formFileLg"> Seleccionar Arhivo</CFormLabel>
            <CFormInput type="file" size="lg" id="formFileLg" onChange={handleFileChange}/>
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Registrar
        </CButton>
      </CCol>
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

const TodaVida = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Toda La Vida</strong> <small>Cargar archivos</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              
            </p>
            <p className="text-body-secondary small">
              Custom feedback styles apply custom colors, borders, focus styles, and background
              icons to better communicate feedback.{' '}
            </p>
            <DocsExample href="forms/validation">{CustomStyles()}</DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default TodaVida
