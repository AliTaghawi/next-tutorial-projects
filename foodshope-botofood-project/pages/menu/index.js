import MenuPage from "../../components/templates/MenuPage";

const Index = ({data}) => {
  return (
    <MenuPage data={data} />
  );
};

export default Index;

export async function getStaticProps() {
  const res = await fetch('http://localhost:4000/data')
  const data = await res.json();

  return {
    props: {data},
    revalidate: 1 * 60 * 60,
  }
}