//fake data
import carsData from '../../data/carsData'

//components
import Categories from '../../components/modules/Categories';
import SearchBar from '../../components/modules/SearchBar';
import Cars from '../../components/templates/Cars';

const index = () => {
  return (
    <div>
      <SearchBar />
      <Categories />
      <Cars data={carsData} />
    </div>
  );
};

export default index;