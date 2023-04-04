import { useRouter } from 'next/router';
import carsData from '../../data/carsData'

const CategoryPage = () => {
  const {category} = useRouter().query;
  const carsList = carsData.filter(car => car.category === category)
  console.log(carsList)
  return (
    <div>CategoryPage</div>
  );
};

export default CategoryPage;