import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <h1>欢迎来到首页</h1>
      <p>当前主题：{theme}</p>
    </div>
  );
} 