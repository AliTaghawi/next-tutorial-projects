import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Link href="/">
          <h2>Car shope</h2>
          <p>Choss and buy your car</p>
        </Link>
      </header>
      <div>{children}</div>
      <footer>next toturial projects | Car shope &copy;</footer>
    </>
  );
};

export default Layout;
