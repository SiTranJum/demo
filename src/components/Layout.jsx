import { Link } from 'react-router-dom';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
        <Link to="/theme-demo">主题演示</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
} 