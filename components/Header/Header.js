import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
          <h1 className={styles.title}><span>WebDev</span>News</h1>
          <p className={styles.description}>Keep up to date with the latest webdev news</p>
    </div>
  );
};

export default Header;
