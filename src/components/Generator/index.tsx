import React from "react";
import styles from "./Generator.module.scss";

export const Generator = () => {
  const [numCheck, setNumCkeck] = React.useState(false);
  const [lowCase, setLowCase] = React.useState(false);
  const [upperCase, setUpperCase] = React.useState(false);
  const [specSymb, setSpecSymb] = React.useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.generator}>
        <div className={styles.variants}>
          <input type="checkbox" id="numbers" name="numbers" onChange={e => setNumCkeck(e.target.checked)}/>
          <label htmlFor="numbers">Numbers</label>
          <br />
          <input type="checkbox" id="lowCase" name="lowCase" onChange={e => setLowCase(e.target.checked)}/>
          <label htmlFor="lowCase">Lower case letters</label>
          <br />
          <input type="checkbox" id="upperCase" name="upperCase" onChange={e => setUpperCase(e.target.checked)}/>
          <label htmlFor="upperCase">Upper case letters</label>
          <br />
          <input type="checkbox" id="specSymb" name="specSymb" onChange={e => setSpecSymb(e.target.checked)}/>
          <label htmlFor="specSymb">Spec symbols</label>
          <br />
        </div>
      </div>
    </div>
  );
};
