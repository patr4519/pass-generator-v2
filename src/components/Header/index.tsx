import styles from "./Header.module.scss";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <VpnKeyIcon />
        <div className={styles.text}>Password generator</div>
      </div>
    </header>
  );
};
