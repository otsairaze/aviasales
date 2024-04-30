import React from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import styles from "./Sort.module.scss";

export const Sort = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <h3 className={styles.title}> Количество пересадок</h3>

        <div className={styles.block}>
          <Checkbox />
        </div>
      </div>
    </>
  );
};
