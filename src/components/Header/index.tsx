import React from "react";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <div className={styles.icon}>
          img
        </div>
        <div className={styles.text}>Password generator</div>
      </div>
    </header>
  );
};
