import React from "react";
import Link from "next/link";
import moment from "moment";
import axios from "axios";
import { useRouter } from "next/router";

function CustomerDetailsPage({ data }) {
  const router = useRouter();
  const deleteHandler = async () => {
    const res = (await axios.delete(`/api/customers/${data._id}`)).data
    if (res.status === "successful") router.push("/")
  }
  
  return (
    <div className="customer-detail">
      <h4>Customer Details</h4>
      <div className="customer-detail__main">
        <div className="customer-detail__item">
          <span>Name: </span>
          <p>{data.name}</p>
        </div>
        <div className="customer-detail__item">
          <span>Last name: </span>
          <p>{data.lastName}</p>
        </div>
        <div className="customer-detail__item">
          <span>Email: </span>
          <p>{data.email}</p>
        </div>
        <div className="customer-detail__item">
          <span>Phone: </span>
          <p>{data.phone}</p>
        </div>
        <div className="customer-detail__item">
          <span>Address: </span>
          <p>{data.address}</p>
        </div>
        <div className="customer-detail__item">
          <span>Postal Code: </span>
          <p>{data.postalCode}</p>
        </div>
        <div className="customer-detail__item">
          <span>Date: </span>
          <p>{moment(data.date).utc().format("YYYY-MM-DD")}</p>
        </div>
      </div>
      <div className="customer-detail__products">
        <p>Name</p>
        <p>Price</p>
        <p>Qty</p>
        {data.products.map((product, index) => (
          <React.Fragment key={index}>
            <p>{product.name}</p>
            <span>{product.price}</span>
            <span>{product.qty}</span>
          </React.Fragment>
        ))}
      </div>
      <div className="customer-detail__buttons">
        <button onClick={deleteHandler}>Delete</button>
        <Link href={`/edit/${data._id}`}>Edit</Link>
      </div>
    </div>
  );
}

export default CustomerDetailsPage;
