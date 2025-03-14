import React, { useState } from 'react';

const AddCustomerPage = () => {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    date: "",
    products: []
  })

  const saveHandler = () => {}
  const cancelHandler = () => {}
  
  return (
    <div className='customer-page'>
      <h4>Add New Customer</h4>
      <div className='customer-page__buttons'>
        <button className='first' onClick={cancelHandler}>Cancel</button>
        <button className='second' onClick={saveHandler}>Save</button>
      </div>
    </div>
  );
};

export default AddCustomerPage;