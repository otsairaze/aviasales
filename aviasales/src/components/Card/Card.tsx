import React, { FC } from "react";
import logoCard from "../../assets/logo-card.png";
import styles from "./Card.module.scss";

interface CardProps {
  price: string;
  route: string;
  time: string;
  duration: string;
  stops: string;
  stopcities: string;
  legs: Array<Record<string, string>>;
}

const Card: FC<CardProps> = ({ price, legs }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <span>{price}</span>
        <img width={110} height={36} src={logoCard} alt="" />
      </div>
      {legs.map((obj) => (
        <div className={styles.info}>
          <ul className={styles.items}>
            <li className={styles.item}>
              <h4 className={styles.title}>{obj.route}</h4>
              <span>{obj.time}</span>
            </li>
            <li className={styles.item}>
              <h4 className={styles.title}>В пути</h4>
              <span>{obj.duration}</span>
            </li>
            <li className={styles.item}>
              <h4 className={styles.title}>{obj.stops}</h4>
              <span>{obj.stop_cities}</span>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Card;
