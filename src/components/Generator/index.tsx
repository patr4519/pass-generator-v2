import React from "react";
import styles from "./Generator.module.scss";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CopyButton from "../CopyButton";
import { useTranslation } from "react-i18next";

export const Generator = () => {
  const [numCheck, setNumCkeck] = React.useState(true);
  const [lowCase, setLowCase] = React.useState(true);
  const [upperCase, setUpperCase] = React.useState(true);
  const [specSymb, setSpecSymb] = React.useState(true);
  const [passLength, setPassLength] = React.useState(12);
  const [passwords, setPasswords] = React.useState<string[] | null>(null);

  const { t } = useTranslation();

  function generatePassword(passLength: number) {
    let charset = "";
    let password = "";

    if (numCheck) charset += "0123456789";
    if (lowCase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (upperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (specSymb) charset += "!@#$%^&*()";

    for (let i = 0; i < passLength; i++) {
      let randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }

    return password;
  }

  function generatePasswords(passLength: number) {
    let passwords = [];
    for (let i = 0; i < 10; i++) {
      passwords.push(generatePassword(passLength));
    }
    setPasswords(passwords);
    return passwords;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.generator}>
        <div className={styles.variants}>
          <Checkbox
            id="numbers"
            name="numbers"
            onChange={(e) => setNumCkeck(e.target.checked)}
            checked={numCheck}
          />
          <label htmlFor="numbers">{t("Numbers")}</label>
          <br />
          <Checkbox
            id="lowCase"
            name="lowCase"
            onChange={(e) => setLowCase(e.target.checked)}
            checked={lowCase}
          />
          <label htmlFor="lowCase">{t("Lower case letters")}</label>
          <br />
          <Checkbox
            id="upperCase"
            name="upperCase"
            onChange={(e) => setUpperCase(e.target.checked)}
            checked={upperCase}
          />
          <label htmlFor="upperCase">{t("Upper case letters")}</label>
          <br />
          <Checkbox
            id="specSymb"
            name="specSymb"
            onChange={(e) => setSpecSymb(e.target.checked)}
            checked={specSymb}
          />
          <label htmlFor="specSymb">{t("Spec symbols")}</label>
          <br />
          <label htmlFor="length">{t("Password length")}</label>
          <input
            className={styles.passLength}
            value={passLength}
            min={8}
            max={20}
            onChange={(e) => setPassLength(Number(e.target.value))}
            type="number"
            id="length"
            name="length"
          />
        </div>
        <Button
          className={styles.generateBtn}
          onClick={() => generatePasswords(passLength)}
          disabled={passLength > 20 || passLength < 8}
          variant="contained"
        >
          {t("Generate")}
        </Button>
        <ul className={styles.passwordList}>
          {passwords?.map((password, index) => (
            <li key={index} className={styles.listItem}>
              <span>{password}</span>
              <CopyButton text={password} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
