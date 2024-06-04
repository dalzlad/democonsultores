import React, { useState } from 'react'
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
    CorreoElectronico:''
});

const handleChange = (e) => {
  const { name, value} = e.target;
  setFormData({
      ...formData,
      [name]: value
  });
};

  const [validated, setValidated] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    /*const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
    */
    try {
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
      <CCol md={4}>
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

const Cliente = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Clientes</strong> <small>Custom styles</small>
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

export default Cliente
