//fake data
import carsData from "../data/carsData";

//components
import Categories from "../components/modules/Categories";
import SearchBar from "../components/modules/SearchBar";
import Cars from "../components/templates/Cars";
import SeeAll from "../components/modules/SeeAll";

export default function Home() {
  const cars = carsData.slice(0, 3);
  // console.log(cars)
  return (
    <div>
      <SearchBar />
      <Categories />
      <SeeAll />
      <Cars data={cars} />
    </div>
  );
}
