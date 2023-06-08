import React from "react";
import styles from "./Generator.module.scss";

export const Generator = () => {
  const [numCheck, setNumCkeck] = React.useState(true);
  const [lowCase, setLowCase] = React.useState(true);
  const [upperCase, setUpperCase] = React.useState(true);
  const [specSymb, setSpecSymb] = React.useState(false);
  const [passLength, setPassLength] = React.useState(12);
  const [passwords, setPasswords] = React.useState<string[] | null>(null);

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
          <input
            type="checkbox"
            id="numbers"
            name="numbers"
            onChange={(e) => setNumCkeck(e.target.checked)}
            checked={numCheck}
          />
          <label htmlFor="numbers">Numbers</label>
          <br />
          <input
            type="checkbox"
            id="lowCase"
            name="lowCase"
            onChange={(e) => setLowCase(e.target.checked)}
            checked={lowCase}
          />
          <label htmlFor="lowCase">Lower case letters</label>
          <br />
          <input
            type="checkbox"
            id="upperCase"
            name="upperCase"
            onChange={(e) => setUpperCase(e.target.checked)}
            checked={upperCase}
          />
          <label htmlFor="upperCase">Upper case letters</label>
          <br />
          <input
            type="checkbox"
            id="specSymb"
            name="specSymb"
            onChange={(e) => setSpecSymb(e.target.checked)}
            checked={specSymb}
          />
          <label htmlFor="specSymb">Spec symbols</label>
          <br />
          <label htmlFor="length">Password length</label>
          <input
            className={styles.passLength}
            value={passLength}
            min={0}
            max={20}
            onChange={(e) => setPassLength(Number(e.target.value))}
            type="number"
            id="length"
            name="length"
          />
        </div>
        <button
          disabled={passLength > 20}
          onClick={() => generatePasswords(passLength)}
        >
          Generate
        </button>
        <ul>
          {passwords?.map((password, index) => (
            <li key={index}>{password}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
