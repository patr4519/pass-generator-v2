import styles from "./Header.module.scss";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { useTranslation } from "react-i18next";
import en_icon from "../../assets/en_icon.png";
import ru_icon from "../../assets/ru_icon.png";


export const Header = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <VpnKeyIcon />
        <div className={styles.text}>{t("Password generator")}</div>
        <img className={styles.enIcon} onClick={() => changeLanguage("en")} width={24} src={en_icon} alt="en_icon"/>
        <img className={styles.ruIcon} onClick={() => changeLanguage("ru")} width={26} src={ru_icon} alt="ru_icon"/>
      </div>
    </header>
  );
};
