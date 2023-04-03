import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarDetails from "../../components/templates/CarDetails";

const Car = () => {
  const { carid } = useRouter().query;
  const carDetails = carsData[carid - 1];

  return <CarDetails {...carDetails} />;
};

export default Car;
