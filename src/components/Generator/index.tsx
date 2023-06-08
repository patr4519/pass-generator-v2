import React from "react";
import styles from "./Generator.module.scss";

export const Generator = () => {
  const [numCheck, setNumCkeck] = React.useState(true);
  const [lowCase, setLowCase] = React.useState(true);
  const [upperCase, setUpperCase] = React.useState(true);
  const [specSymb, setSpecSymb] = React.useState(false);
  const [passLength, setPassLength] = React.useState(12);

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

    console.log(password);
    return password;
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
            onChange={(e) => setPassLength(Number(e.target.value))}
            type="number"
            id="length"
            name="length"
          />
          <br />
          <button onClick={() => generatePassword(passLength)}>Generate</button>
        </div>
      </div>
    </div>
  );
};
