import styles from './Cars.module.css'
const Cars = ({data}) => {
  return (
    <div className={styles.container} >
      {data.map(car => <p key={car.id}>{car.name}</p>)}
    </div>
  );
};

export default Cars;