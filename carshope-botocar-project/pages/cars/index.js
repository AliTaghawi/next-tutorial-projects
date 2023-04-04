import Categories from '../../components/modules/Categories';
import Cars from '../../components/templates/Cars';
import carsData from '../../data/carsData'

const index = () => {
  return (
    <div>
      <Categories />
      <Cars data={carsData} />
    </div>
  );
};

export default index;