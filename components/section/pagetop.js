import React from "react";
import Header from "../common/header";

import styles from "./pagetop.module.css";

export default function PageTop() {
  return (
    <div className={styles.sec_one}>
      <Header />
      <div className={styles.sec_one_inner}>
        <div className={styles.slide_image}>
          <img src="/img/home/1.jpg" onError={(e) => (e.target.src = "/img/common/ina.svg")} alt="alt" />
          <div className={styles.slide_image_top}></div>
        </div>
        <div className={`container ${styles.container} ${styles.pagetop_container}`}>
          <div className={styles.title}>CONTACT</div>
        </div>
      </div>
    </div>
  );
}
