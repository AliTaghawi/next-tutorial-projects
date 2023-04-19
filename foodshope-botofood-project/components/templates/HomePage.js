import Banner from '../modules/HomePage/Banner';
import Attributes from '../modules/HomePage/Attributes';
import Definition from '../modules/HomePage/Definition';
import Instruction from '../modules/HomePage/Instruction';
import Guide from '../modules/HomePage/Guide';
import Restrictions from '../modules/HomePage/Restrictions';
import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <Attributes />
      <Definition />
      <Instruction />
      <Guide />
      <Restrictions />
    </div>
  );
};

export default HomePage;