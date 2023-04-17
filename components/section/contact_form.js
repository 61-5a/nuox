/* eslint-disable @next/next/no-img-element */
import React from "react";

import styles from "./contact_form.module.css";

export default function ContactForm() {
  return (
    <div className={styles.sec_contact_form_outer}>
      <div className={`container ${styles.container} ${styles.sec_contact_form_container}`}>
        <div className={styles.sec_contact_form_inner}>
          <div className={styles.one}>
            <div className={styles.left}>
              <input required type="text" placeholder="Name*" />
            </div>
            <div className={styles.right}>
              <input type="text" placeholder="Company" />
            </div>
          </div>
          <div className={styles.two}>
            <div className={styles.left}>
              <input required type="text" placeholder="Email*" />
              <input required type="text" placeholder="Phone Number*" />
            </div>
            <div className={styles.right}>
              <textarea placeholder="Message"></textarea>
            </div>
          </div>
          <div className={styles.submit}>
            <button>
              <span>Submit</span>
              <img src="/img/common/arrow-right-b.png" alt=""></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
