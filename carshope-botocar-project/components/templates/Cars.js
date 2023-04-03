import Card from '../modules/Card';
import styles from './Cars.module.css'
const Cars = ({data}) => {
  return (
    <div className={styles.container} >
      {data.map(car => <Card key={car.id} {...car}/>)}
    </div>
  );
};

export default Cars;