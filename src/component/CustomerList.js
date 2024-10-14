import { useEffect, useState } from "react";
import { Flex, Table } from "antd";
import Button from 'react-bootstrap/Button';
import Customer from "./Customer";
import axios from "axios";
import Column from "antd/es/table/Column";


function CustomerList({handleAddCustomerShow, handleAddCustomerCLose ,setcustomerRecord}){
    const [customers, setCustomers] =useState([]);
   async function  getCustomers(){
        const customer = await axios.get("http://localhost:4000/customer" )
        setCustomers(customer.data.customers)
      
    }

    function getInfo(record){
      handleAddCustomerShow()
      setcustomerRecord(record)
    }
    useEffect(()=>{
        getCustomers()
    }, [])
    
      const columns = [
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
          },
          {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
          },
          {
            title: 'Street Address ',
            dataIndex: 'streetAddress',
            key: 'streetAddress',
          },
          {
            title: 'Street Address Line2',
            dataIndex: 'streetAddressLine2',
            key: 'streetAddressLine2',
          },
          {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
          },
          {
            title: 'State Province',
            dataIndex: 'stateProvince',
            key: 'stateProvince',
          },
          {
            title: 'Zip Code',
            dataIndex: 'zipCode',
            key: 'zipCodev',
          },
          {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
          },
          {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
          },
          {
            title: 'FeedBack',
            dataIndex: 'feedBack',
            key: 'feedBack',
          },
          {
            title: 'Suggestions',
            dataIndex: 'suggestions',
            key: 'suggestions',
          },
          {
            title: 'Action',
            dataIndex: '',
            key: 'action',
            render: (text, record, index) => <Button onClick={() => getInfo(record)} variant="primary">Edit</Button>,
          },
        
      ];
    

    return(
       <div className="container-fluid">
        <div>
        <Button onClick={handleAddCustomerShow} variant="primary">Add Customer</Button>
        </div>
        <div className="mt-3">
        <Table dataSource={customers} columns={columns} />
        <div>
        
        </div>
        </div>
       
       
       </div>
    )
}
export default CustomerList