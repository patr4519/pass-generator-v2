import styles from "./Header.module.scss";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <VpnKeyIcon />
        <div className={styles.text}>{t("Password generator")}</div>
      </div>
    </header>
  );
};
