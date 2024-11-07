import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

//components
import CustomerDetailsPage from "@/components/templates/CustomerDetailsPage";

function Details() {
  const [data, setData] = useState(null);
  const {
    query: { customerId },
    isReady,
  } = useRouter();

  useEffect(() => {
    axios
      .get(`/api/customers/${customerId}`)
      .then((res) => setData(res.data.data));
  }, [isReady]);

  if (data) return <CustomerDetailsPage data={data} />
}

export default Details;
