import Link from "next/link";

//styles
import styles from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header} >
        <Link href="/">
          <h2>Car shope</h2>
          <p>Choss and buy your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>next toturial projects | Car shope &copy;</footer>
    </>
  );
};

export default Layout;
