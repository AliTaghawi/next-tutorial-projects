import Card from "../modules/common/Card";
import styles from "./MenuPage.module.css";

const MenuPage = ({ data }) => {
  return (
    <div className={styles.container}>
      <h2>Menu</h2>
      <div className={styles.subContainer}>
        {data.map((foodProduct) => (
          <Card key={foodProduct.id} {...foodProduct} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
