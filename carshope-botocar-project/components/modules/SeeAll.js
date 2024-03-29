import Link from 'next/link';
import styles from './SeeAll.module.css'

const SeeAll = () => {
  return (
    <div className={styles.container}>
      <Link href='/cars'>See all cars</Link>
    </div>
  );
};

export default SeeAll;