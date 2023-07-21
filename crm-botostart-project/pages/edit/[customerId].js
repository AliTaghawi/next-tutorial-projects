import CustomerEditPage from "@/components/templates/CustomerEditPage";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Edit() {
  const [data, setData] = useState(null);
  const {
    query: { customerId },
    isReady,
  } = useRouter();

  useEffect(() => {
    if (isReady) {
      axios
        .get(`/api/customers/${customerId}`)
        .then((res) => setData(res.data.data));
    }
  }, [isReady]);

  if (data) return <CustomerEditPage data={data} />;
}

export default Edit;
