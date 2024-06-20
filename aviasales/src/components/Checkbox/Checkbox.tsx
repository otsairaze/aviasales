import { FC } from "react";
import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  id: string;
  title: string;
}

export const Checkbox: FC<CheckboxProps> = ({ id, title }) => {
  return (
    <div className={styles.block}>
      <label className={styles.label} htmlFor={id}>
        <input className={styles.input} type="checkbox" id={id} />
        <span className={styles.custom}></span>
        {title}
      </label>
    </div>
  );
};
