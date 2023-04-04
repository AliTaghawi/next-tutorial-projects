import { useRouter } from "next/router";

//components
import Card from "../modules/Card";

//styles
import styles from "./CarsList.module.css";

//icons
import Back from "../icons/Back";

const CarsList = ({ data }) => {
  const router = useRouter();
  const clickHndeler = () => {
    router.back();
  };
  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={clickHndeler}>
        <Back />
        <p>back</p>
      </div>
      <div className={styles.cards}>
        {data.map((car) => (
          <Card key={car.id} {...car} />
        ))}
      </div>
    </div>
  );
};

export default CarsList;
