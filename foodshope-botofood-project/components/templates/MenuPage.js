import styles from "./MenuPage.module.css";

const MenuPage = ({ data }) => {
  return (
    <div className={styles.container}>
      <h2>Menu</h2>
      <div className={styles.subContainer}>
        {/* {data.map(foodProduct => <h2 key={foodProduct.id}>{foodProduct.name}</h2>)} */}
        {data.map((food) => (
          <h2 key={food.id}>food</h2>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
