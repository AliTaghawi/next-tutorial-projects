function FormInput({ name, lable, type, value, changeHandler }) {
  return (
    <div className="form-input">
      <label htmlFor={name}>{lable}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
}

export default FormInput;
