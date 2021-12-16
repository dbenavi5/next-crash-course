import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Meta from '../Meta/Meta';

import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <div className={styles.container}>
              <main className={styles.main}>
                  <Header />
                  {children}
              </main>
      </div>
    </>
  );
};

export default Layout;
