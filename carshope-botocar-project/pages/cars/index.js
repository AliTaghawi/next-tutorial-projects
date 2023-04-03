import Cars from '../../components/templates/Cars';
import carsData from '../../data/carsData'

const index = () => {
  return (
    <Cars data={carsData} />
  );
};

export default index;