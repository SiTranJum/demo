import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/ThemeDemo.module.css';

export default function ThemeDemo() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <h1>主题演示页面</h1>
      <button onClick={toggleTheme}>切换主题</button>
      <p>当前主题：{theme}</p>
    </div>
  );
} 