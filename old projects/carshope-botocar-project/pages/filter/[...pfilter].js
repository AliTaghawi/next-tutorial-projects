import {useRouter} from 'next/router'

//fake data 
import carsData from '../../data/carsData';
import CarsList from '../../components/templates/CarsList'

const FilterPage = () => {
  const [min , max] = useRouter().query.pfilter || [];
  
  const filteredCars = carsData.filter(item => item.price > min && item.price < max)

  return <CarsList data={filteredCars} />
};

export default FilterPage;