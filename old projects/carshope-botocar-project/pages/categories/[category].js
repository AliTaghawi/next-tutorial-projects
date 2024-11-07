import { useRouter } from 'next/router';

//fake data
import carsData from '../../data/carsData'

//components
import CarsList from '../../components/templates/CarsList';

const CategoryPage = () => {
  const {category} = useRouter().query;
  const carsList = carsData.filter(car => car.category === category)
  console.log(carsList)
  return (
    <CarsList data={carsList}/>
  );
};

export default CategoryPage;