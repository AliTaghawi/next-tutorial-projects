import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

function Card({customer}) {
  const router = useRouter();

  const deleteHandler = async () => {
    const res = (await axios.delete(`/api/customers/${customer._id}`)).data
    if (res.status === "successful") router.reload();
  }
  
  return (
    <div className="card">
      <div className="card__details">
        <p>{customer.name} {customer.lastName}</p>
        <p>{customer.email}</p>
      </div>
      <div className="card__buttons">
        <button onClick={deleteHandler}>delete</button>
        <Link href={`/edit/${customer._id}`}>Edit</Link>
        <Link href={`/details/${customer._id}`}>Details</Link>
      </div>
    </div>
  );
}

export default Card;