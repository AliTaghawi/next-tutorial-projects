import CategoriesPage from "../../components/templates/CategoriesPage";

const Categories = ({ data }) => {
  return <CategoriesPage data={data} />;
};

export default Categories;

export async function getServerSideProps(context) {
  const {
    query: { difficulty, time },
  } = context;

  const res = await fetch(`${process.env.BASE_URL}/data`);
  const json = await res.json();

  const data = json.filter((item) => {
    const difficultyFilter = item.details.filter(
      (detail) => detail.Difficulty && detail.Difficulty === difficulty
    );

    const timeFilter = item.details.filter((detail) => {
      const CookingTime = detail["Cooking Time"] || "";
      const [detailTime] = CookingTime.split(" ");
      if (time === "less" && detailTime && +detailTime <= 30) {
        return detail;
      } else if (time === "more" && detailTime && +detailTime >= 30) {
        return detail;
      }
    });

    if (time && difficulty && timeFilter.length && difficultyFilter.length) {
      return item;
    } else if (!time && difficulty && difficultyFilter.length) {
      return item;
    } else if (!difficulty && time && timeFilter.length) {
      return item;
    }
  });

  return {
    props: { data },
  };
}
