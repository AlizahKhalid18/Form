import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Input } from 'antd';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import "./Customer.css"
import { Select } from "antd";

const { TextArea } = Input;


function Customer({handleAddCustomerClose, customerRecord}){
 console.log(customerRecord);


    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        streetAddress: "" ,
        streetAddressLine2: "",
        city: "",
        stateProvince: "",
        zipCode: "",
        phoneNumber: "",
        email: "",
        feedBack:"",
        suggestions: ""
      })
      useEffect(() => {
if (customerRecord){
  setUserData(customerRecord)
}
      },[])
      const handleChange = (event) => {
        let updatedUserData = {...userData };
        updatedUserData[event.target.name] = event.target.value;
        setUserData(updatedUserData);
      };
      const handleSubmit = async (event) => {
        event.preventDefault();
        const customer = await axios.post("http://localhost:4000/customer", userData )
        showToast(customer.data.message);
      }
      const showToast = (message) => {
       
        toast.success(message)
      }
    return (
      <form onSubmit={handleSubmit} className="App">
        <div className='container main'>
          <div >
          <Button style={{width:"15%", marginTop:"10px"  }} type="button" onClick={handleAddCustomerClose} variant="outline-primary"> ~Back</Button>
          </div>
          <div className='container p-5'>
  
            <div>
              <h2 style={{fontWeight:"bold"}}>
                New Customer Registration Form
              </h2>
              <h3 style={{fontWeight:"bold", fontSize:"20px"}}>
                Customer Details:
              </h3>
            </div>
            <div>
              <h3 style={{ fontWeight: "500", fontSize: "20px" }}>
                Full Name*
              </h3>
            </div>
            <div >
  
              <Input required={true}
               value={userData.firstName}
                onChange={handleChange}
                 name={"firstName"}
                  className='col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5' 
                  style={{ height: "40px" }} placeholder='First Name' />
              <Input
               required={true}
               value={userData.lastName}
                onChange={handleChange}
                 name={"lastName"}
               className='col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 mt-sm-4   ms-lg-5' 
               style={{ height: "40px" }} placeholder='Last Name' />
            </div>
  
            <div>
              <h3
               
              style={{ fontWeight: "500", fontSize: "20px" }}>
                Address*
              </h3>
            </div>
            <div >
  
              <Input 
               required={true}
               value={userData.streetAddress}
                onChange={handleChange}
                 name={"streetAddress"}
              className='col-12 col-md-11 col-lg-11 col-xl-11 col-xxl-11'
               style={{ height: "40px" }} placeholder='Street Address' />
            </div>
            <div >
  
              <Input 
               required={true}
               value={userData.streetAddressLine2}
                onChange={handleChange}
                 name={"streetAddressLine2"}
              className='col-12 col-md-11 col-lg-11 col-xl-11 col-xxl-11 mt-4' 
              style={{ height: "40px" }} placeholder='Street Address Line 2' />
            </div>
            <div className='mt-4'>
  
              <Input 
               required={true}
               value={userData.city}
                onChange={handleChange}
                 name={"city"}
              className='col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 '
               style={{ height: "40px" }} placeholder='City' />
              <Input 
               required={true}
               value={userData.stateProvince}
                onChange={handleChange}
                 name={"stateProvince"}
              className='col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 mt-sm-4 ms-lg-5' 
              style={{ height: "40px" }} placeholder='State / Province' />
            </div>
            <div >
  
              <Input
               required={true}
               value={userData.zipCode}
                onChange={handleChange}
                 name={"zipCode"}
               className='col-12 col-md-11 col-lg-11 col-xl-11 col-xxl-11 mt-4'
                style={{ height: "40px" }} placeholder='Postal / Zip code' />
            </div>
            <div className='d-flex'>
  
  
  
            </div>
            <div className='row mt-3'>
  
              <div className='col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 '>
                <h3 style={{ fontWeight: "500", fontSize: "20px" }}>
                  Phone Number*
                </h3>
                <Input  
                 required={true}
                 value={userData.phoneNumber}
                  onChange={handleChange}
                  pattern="^(0\d{2,3}-\d{7})|(03\d{2}-\d{7})$" 
                   name={"phoneNumber"}
                style={{ height: "40px" }}
                 placeholder='0000-0000000' />
              </div>
              <div className='col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 ms-lg-5'>
  
                <h3 style={{ fontWeight: "500", fontSize: "20px" }}>
                  E-Mail
                </h3>
                <Input
                 required={true}
                 value={userData.email}
                  onChange={handleChange}
                   name={"email"}
                 style={{ height: "40px" }} 
                 placeholder='alizah@gmail.com' />
              </div>
            </div>
  
  
            <div className='select'>
        <h6>
          How did you here about us? *
        </h6>
      <Select 
       placeholder="Please select"  
       style={{width:"40%", marginTop:"10px"}}>
      <Select.Option value="Newspaper"/>
      <Select.Option value="Internet"/>
      <Select.Option value="Magazine"/>
      <Select.Option value="Other"/>
    </Select>
            </div>
            <div className='textarea'>
            <h6>
          Feed back about us? *
        </h6>
      <TextArea  required={true}
               value={userData.feedBack}
                onChange={handleChange}
                 name={"feedBack"} 
                 rows={6} />
      <br />
      <br />
      <h5>
      Suggestions if any for further improvement:
      </h5>
      <TextArea 
       required={true}
       value={userData.suggestions}
        onChange={handleChange}
         name={"suggestions"}
      rows={6} 
       maxLength={6} />
   
            </div>
            <div className='radio'> 
              <h5>
              Will you be willing to recommend us?
              </h5>
                <input type="radio" />
    <label for="html">Yes</label><br/>
    <input type="radio" />
    <label for="css">No</label><br/>
    <input type="radio"/>
    <label for="javascript">May be</label>
            </div>
            <div className='d-flex justify-content-center mt-5'>
            <button className='submitbtn'>Submit</button>
            </div>
          </div>
        </div>
        <ToastContainer />

      </form>
    );
}
export default Customer;