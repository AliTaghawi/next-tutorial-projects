import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>CRM project</h2>
        <Link href="/customer-add">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <a href="https://w3schools.com" target="_blank" rel="noreferrer">
          W3schools
        </a>{" "}
        BotoStart Next.js tutorial || CRM project &copy;
      </footer>
    </>
  );
}

export default Layout;
