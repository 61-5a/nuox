import React from "react";

import styles from "./form_sucess_popup.module.css";

export default function FormSucessPopup({ setFormSucess }) {
  return (
    <>
      <div className={styles.popup_outer}>
        <div className={`container ${styles.container} ${styles.popup_container}`}>
          <div onClick={() => setFormSucess(false)} className={styles.popup_close}></div>
          <div className={styles.popup_inner}>
            <div className={styles.close}>
              <img onClick={() => setFormSucess(false)} src="/img/common/close.svg" alt="Close" />
            </div>
            <div className={styles.top}>
              <img src="/img/common/tick.svg" alt="Green Tick" />
            </div>
            <div className={styles.bottom}>Form submitted Sucessfully</div>
          </div>
        </div>
      </div>
    </>
  );
}
