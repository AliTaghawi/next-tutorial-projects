import FormInput from "./FormInput";

function Form({ form, setForm }) {
  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };
  return (
    <div>
      <FormInput
        name="name"
        lable="Name"
        type="text"
        value={form.name}
        changeHandler={changeHandler}
      />
      <FormInput
        name="lastName"
        lable="Last name"
        type="text"
        value={form.lastName}
        changeHandler={changeHandler}
      />
      <FormInput
        name="email"
        lable="Email"
        type="email"
        value={form.email}
        changeHandler={changeHandler}
      />
      <FormInput
        name="phone"
        lable="Phone"
        type="text"
        value={form.phone}
        changeHandler={changeHandler}
      />
      <FormInput
        name="address"
        lable="Address"
        type="text"
        value={form.address}
        changeHandler={changeHandler}
      />
      <FormInput
        name="postalCode"
        lable="Postal code"
        type="text"
        value={form.postalCode}
        changeHandler={changeHandler}
      />
      <FormInput
        name="date"
        lable="Date"
        type="date"
        value={form.date}
        changeHandler={changeHandler}
      />
    </div>
  );
}

export default Form;
