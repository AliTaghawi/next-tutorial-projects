function RadioButton({ status, onChange, value, label, children }) {
  return (
    <div className={value}>
      <label htmlFor={value}>
        {children}
        {label}
      </label>
      <input
        type="radio"
        id={value}
        name="status"
        value={value}
        checked={status === value}
        onChange={onChange}
      />
    </div>
  );
}

export default RadioButton;
