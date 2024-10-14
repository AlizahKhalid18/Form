
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './App.css';
import { useState } from 'react';
import CustomerList from './component/CustomerList';
import Customer from './component/Customer'

function App() {
  const [customerRecord, setcustomerRecord] = useState(false);
  const [addCustomer, setaddCustomer] = useState(false);
  const [show, setShow] = useState(false);

  const handleAddCustomerClose = () => setaddCustomer(false);
  const handleAddCustomerShow = () => setaddCustomer(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Customer List
      </Button>

      <Modal style={{ width: "100%" }} show={show} onHide={handleClose} fullscreen={true} >

        <Modal.Header closeButton>
          <Modal.Title>Customer List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {addCustomer ? <Customer customerRecord={customerRecord} handleAddCustomerClose={handleAddCustomerClose} /> : <CustomerList setcustomerRecord={setcustomerRecord} handleAddCustomerClose={handleAddCustomerClose} handleAddCustomerShow={handleAddCustomerShow} />}

        </Modal.Body>



      </Modal>
    </>
  )
}

export default App;