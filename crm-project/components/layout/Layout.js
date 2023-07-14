import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <header className="header">
        <h2>Aligramming CRM</h2>
        <Link href="/add-customer">Add customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <a href="https://www.botostart.ir" target="_blank" rel="noreferrer">
          Botostart
        </a>{" "}
        Nextjs tutorial | CRM project &copy;
      </footer>
    </>
  );
};

export default Layout;
