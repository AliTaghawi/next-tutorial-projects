import Link from "next/link";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.head}>
        <div className={styles.left}>
          <Link href="/">FoodShope</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="https://botostart.ir" target="_blank" rel="noreferrer">
          Botostart
        </a>
        Next.js tutorial | FoodShope Project &copy;
      </footer>
    </>
  );
};

export default Layout;
