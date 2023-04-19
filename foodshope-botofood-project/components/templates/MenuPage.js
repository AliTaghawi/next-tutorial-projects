import styles from "./MenuPage.module.css";

const MenuPage = ({ data }) => {
  return (
    <div className={styles.container}>
      <h2>Menu</h2>
      <div className={styles.subContainer}>
        {data.map(foodProduct => <p key={foodProduct.id}>{foodProduct.name}</p>)}
      </div>
    </div>
  );
};

export default MenuPage;
