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
    const [visible, setVisible] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);

    const abrirModal = (itemId) => {
      setVisible(!visible);
      setSelectedItemId(itemId);
      // Call your additional function here
      //additionalFunction();
      console.log(itemId);
    };

    const openDeleteModal = (item) => {
      setSelectedItem(item);
      setIsModalOpen(true);
    };

    const handleDelete = async (id) => {
      try {
        //const response = await axios.get("https://apinodemongo-iox5.onrender.com/api/usuarios");
        const response = await axios.delete(`http://127.0.0.1:8000/api1/clientes/${id}/`);
        //setData(response.data.clientes);
        console.log(response.data);
        setLoading(false);
         // Close the modal after deleting the item
        setVisible(false);
        setSelectedItemId(null); // Reset selected item
        fetchData();
      } catch (error) {
        console.error("Error eliminado el registro:", error);
        setLoading(false);
      }
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
                    <CTableDataCell>
                      
                    <CButton color="danger" onClick={() => abrirModal(item.Documento) }>Eliminar</CButton>
   

                    </CTableDataCell>
                </CTableRow>
                )
                )
              }
              </CTableBody>
            </CTable>
            <CModal
      visible={visible}
      onClose={() => setVisible(false)}
      aria-labelledby="LiveDemoExampleLabel"
    >
      <CModalHeader onClose={() => setVisible(false)}>
        <CModalTitle id="LiveDemoExampleLabel">Eliminar Cliente</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p>¿Está seguro de eliminar el cliente?</p>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => {setVisible(false),setSelectedItemId(null)}}>
            Cancelar
        </CButton>
        <CButton color="danger" onClick={() => handleDelete(selectedItemId)}>Eliminar</CButton>
      </CModalFooter>
    </CModal>
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