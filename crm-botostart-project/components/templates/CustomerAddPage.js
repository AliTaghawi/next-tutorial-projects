import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

function CustomerAddPage() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    products: [],
    date: "",
  });
  const router = useRouter();

  const cancelHandler = () => {
    router.push("/")
  };

  const saveHandler = async () => {
    const res = (await axios.post(`/api/customers`, form)).data
    if (res.status === "successful") router.push("/")
  };

  return (
    <div className="customer-page">
      <h4>Add New Customer</h4>
      <div className="customer-page__buttons">
        <button className="first" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="second" onClick={saveHandler}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CustomerAddPage;
