import { useState } from "react";
import { useRouter } from "next/router";
//styles
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [searchData, setSearchData] = useState({
    min: "",
    max: "",
  });

  const router = useRouter();

  const changeHandler = (event) => {
    setSearchData({
      ...searchData,
      [event.target.name]: event.target.value,
    });
  };

  const clickHandler = () => {
    if (searchData.min && searchData.max) {
      router.push(`filter/${searchData.min}/${searchData.max}`)
    } else {
      alert('Insert min and max price')
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <input
          placeholder="Insert min price"
          name="min"
          value={searchData.min}
          onChange={changeHandler}
        />
        <input
          placeholder="Insert max price"
          name="max"
          value={searchData.max}
          onChange={changeHandler}
        />
      </div>
      <button onClick={clickHandler}>Search</button>
    </div>
  );
};

export default SearchBar;
