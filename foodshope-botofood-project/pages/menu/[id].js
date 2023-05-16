import { useRouter } from "next/router";
import DetailsPage from "../../components/templates/DetailsPage";

const Detials = ({ data }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading ...</div>;
  }

  return <DetailsPage {...data} />;
};

export default Detials;

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const json = await res.json();
  const data = json.slice(0, 10);
  
  const paths = data.map((food) => ({
    params: { id: food.id.toString() },
  }));

  // const createPaths = (amount = 5, id = "id") => {
  //   let newArray = [];
  //   for (let i = 0; i < amount; i++) {
  //     newArray.push({
  //       params: { [id]: (i + 1).toString() },
  //     });
  //   }
  //   return newArray;
  // };

  // const paths = createPaths();

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const {
    params: { id },
  } = context;
  const res = await fetch(`${process.env.BASE_URL}/data/${id}`);
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
    revalidate: +process.env.REVALIDATE,
  };
}
