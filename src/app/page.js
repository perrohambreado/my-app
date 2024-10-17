import styles from "./page.module.css";
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <h1 className={styles.title}>en construcción</h1>
    </div>
  );
}
