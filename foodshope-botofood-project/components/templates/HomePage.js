import Banner from '../modules/HomePage/Banner';
import Attributes from '../modules/HomePage/Attributes';
import Definition from '../modules/HomePage/Definition';
import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <Attributes />
      <Definition />
    </div>
  );
};

export default HomePage;