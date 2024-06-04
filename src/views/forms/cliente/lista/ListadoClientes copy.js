import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'


const ListadoClientes = () => {

    // State to store the fetched data
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [visible, setVisible] = useState(false)

    const handleDelete = () => {
      // Lógica para eliminar el elemento
      console.log('Elemento eliminado');
      setShowModal(false);
    };
  
  
    // Function to fetch data using Axios
    const fetchData = async () => {
      try {
        //const response = await axios.get("https://apinodemongo-iox5.onrender.com/api/usuarios");
        const response = await axios.get("http://127.0.0.1:8000/api1/clientes");
        setData(response.data.clientes);
        console.log(response.data.clientes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
  
    // Call fetchData on component mount
    useEffect(() => {
      fetchData();
    }, []);

  return (
    <CRow>
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>React Table</strong> <small>Listado de Clientes</small>
        </CCardHeader>
        <CCardBody>
          <p className="text-body-secondary small">
            Use <code>hover</code> property to enable a hover state on table rows within a{' '}
            <code>&lt;CTableBody&gt;</code>.
          </p>
          <DocsExample href="components/table#hoverable-rows">
            <CTable hover>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Documento</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nombres</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Apellidos</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Correo Electrónico</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Acciones</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
              {
                data && Array.isArray(data) && data.map(item => (
                //console.log(item.Nombre)
                <CTableRow key={item.Documento}>
                    <CTableHeaderCell scope="row">{item.Documento}</CTableHeaderCell>
                    <CTableDataCell>{item.Nombres}</CTableDataCell>
                    <CTableDataCell>{item.Apellidos}</CTableDataCell>
                    <CTableDataCell>@{item.CorreoElectronico}</CTableDataCell>
                    <CTableDataCell><CButton color="info">Editar</CButton></CTableDataCell>
                    <CTableDataCell><CButton color="dark">Eliminar</CButton></CTableDataCell>
                    <CTableDataCell>
                      <>
                    <CButton color="primary" onClick={() => setVisible(!visible)}>Launch demo modal</CButton>
    <CModal
      visible={visible}
      onClose={() => setVisible(false)}
      aria-labelledby="LiveDemoExampleLabel"
    >
      <CModalHeader onClose={() => setVisible(false)}>
        <CModalTitle id="LiveDemoExampleLabel">Modal title</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p>Woohoo, you're reading this text in a modal!</p>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setVisible(false)}>
          Close
        </CButton>
        <CButton color="primary">Save changes</CButton>
      </CModalFooter>
    </CModal>
</>
                    </CTableDataCell>
                </CTableRow>
                )
                )
              }
              </CTableBody>
            </CTable>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
  )
}

export default ListadoClientes
/*
      <ul>
      {data && Array.isArray(data) && data.map(item => (
          <li key={item.Documento}>{item.Documento}-{item.Nombres}</li>
          
        ))}
      </ul>
*/