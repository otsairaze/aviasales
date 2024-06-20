import { useState } from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import styles from "./Sort.module.scss";

export const Sort = () => {
  const sortText = [
    "Все",
    "Более 5000 Р",
    "Более 7000 Р",
    "Более 10000 Р",
    "Более 12000 Р",
  ];

  return (
    <>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Количество пересадок</h3>

        <div className={styles.block}>
          {sortText.map((item, index) => (
            <Checkbox title={item} key={item} id={`checkbox-${index}`} />
          ))}
        </div>
      </div>
    </>
  );
};
