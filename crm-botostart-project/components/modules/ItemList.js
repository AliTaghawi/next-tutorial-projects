import FormInput from "./FormInput";

function ItemList({ form, setForm }) {
  const { products } = form;

  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });
  };

  const changeHandler = (e, index) => {
    products[index][e.target.name] = e.target.value;
    setForm({...form, products: [...products]})
  };

  const deleteHandler = (index) => {
    products.splice(index, 1);
    setForm({...form, products: [...products]})
  }

  return (
    <div className="item-list">
      <p>Purchased product</p>
      {products.map((product, index) => (
        <div key={index} className="form-input__list">
          <FormInput
            name="name"
            lable="Name"
            type="text"
            value={product.name}
            changeHandler={(e) => changeHandler(e, index)}
          />
          <div>
          <FormInput
            name="price"
            lable="Price"
            type="text"
            value={product.price}
            changeHandler={(e) => changeHandler(e, index)}
          />
          <FormInput
            name="qty"
            lable="Qty"
            type="text"
            value={product.qty}
            changeHandler={(e) => changeHandler(e, index)}
          />
          </div>
          <button onClick={() => deleteHandler(index)}>Remove Item</button>
        </div>
      ))}
      <button onClick={addHandler}>Add Item</button>
    </div>
  );
}

export default ItemList;
