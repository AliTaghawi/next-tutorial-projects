import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header className="header">
        <h2>Mini CRM</h2>
        <Link href="add-customer">Add Customer</Link>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">Mini CRM &copy; | Created by <a href="https://www.linkedin.com/in/ali-taghawi-29360b338" target="_blank" rel="noreferrer" >Ali Taghawi</a></footer>
    </>
  );
};

export default Layout;
