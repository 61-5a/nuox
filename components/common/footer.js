/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import Link from "next/link";

import styles from "./footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className={styles.footer_outer}>
      <div className={styles.footer_bg}></div>
      <div className={styles.footer_content}>
        <div className={`container ${styles.container} ${styles.footer_container}`}>
          <div className={styles.footer_inner}>
            <div className={styles.one}>
              <img src="/img/common/logo.png" alt="logo" />
            </div>
            <div className={styles.two}>
              <h3>Quick Links</h3>
              <Link href={`#`}>Our Solutions</Link>
              <Link href={`#`}>Careers</Link>
              <Link href={`#`}>Partners</Link>
              <Link href={`#`}>News & Blogs</Link>
            </div>
            <div className={styles.three}>
              <h3>Corporate Office</h3>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum, is simply dummy</p>
            </div>
            <div className={styles.four}>
              <p>
                <Link href={`#`}>+971 0000 000 00</Link>
                <Link href={`#`}>info@demo.com</Link>
              </p>
            </div>
          </div>
          <div className={styles.footer_bottom}>
            <div>© {year} All Rights Reserved.</div>
            <div>
              <Link href={`#`}>
                <img src="/img/common/fb.png" alt="fb" />
              </Link>
              <Link href={`#`}>
                <img src="/img/common/twitter.png" alt="twitter" />
              </Link>
              <Link href={`#`}>
                <img src="/img/common/insta.png" alt="insta" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
