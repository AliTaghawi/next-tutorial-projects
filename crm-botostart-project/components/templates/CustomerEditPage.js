import moment from "moment/moment";
import { useState } from "react";
import Form from "../modules/Form";
import axios from "axios";
import { useRouter } from "next/router";

function CustomerEditPage({ data }) {
  const date = moment(data.date).utc().format("YYYY-MM-DD");
  const [form, setForm] = useState({
    name: data.name || "",
    lastName: data.lastName || "",
    email: data.email || "",
    phone: data.phone || "",
    address: data.address || "",
    postalCode: data.postalCode || "",
    products: data.products || [],
    date,
  });
  const router = useRouter();

  const cancelHandler = () => {
    router.push("/")
  };

  const editHandler = async () => {
    const res = (await axios.patch(`/api/customers/${data._id}`, form)).data
    if (res.status === "successful") router.push("/")
  };

  return (
    <div className="customer-page">
      <h4>Edit Customer</h4>
      <Form form={form} setForm={setForm} />
      <div className="customer-page__buttons">
        <button className="first" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="second" onClick={editHandler}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default CustomerEditPage;
