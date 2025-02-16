import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/Home.module.css'; // 可以复用Home的样式

export default function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <h1>关于我们</h1>
      <p>这是一个演示React基础功能的示例项目</p>
      <p>当前主题：{theme}</p>
    </div>
  );
} 