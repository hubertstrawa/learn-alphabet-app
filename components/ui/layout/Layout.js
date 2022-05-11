import styles from './Layout.module.css';
import Header from './Header';

const Layout = (props) => {
  return (
    <div className={styles.wrapper}>
      {/* <Header /> */}
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
