import { Checkbox } from "../Checkbox/Checkbox";
import styles from "./Sort.module.scss";

export const Sort = () => {
  const sortText = [
    "Все",
    "Без пересадок",
    "1 пересадка",
    "2 пересадки",
    "3 пересадки",
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
