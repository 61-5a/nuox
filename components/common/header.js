import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import styles from "./header.module.css";

export default function Header() {
  const router = useRouter();
  function HamburgerMenuTogle(e) {
    e.target.classList.toggle("open");
  }
  return (
    <div className={styles.header_outer}>
      <div className={`container ${styles.container} ${styles.slide_title_container}`}>
        <div className={styles.header_inner}>
          <img src="/img/common/logo.png" alt="logo" onClick={() => router.push("/")} />
          <nav className={styles.nav}>
            <Link href={`#`}>
              <span>Who We Are</span>
              <img src="/img/common/arrow-down.png" alt="menu" />
            </Link>
            <Link href={`#`}>
              <span>Shareholders</span>
              <img src="/img/common/arrow-down.png" alt="menu" />
            </Link>
            <Link href={`#`}>
              <span>Your Goals</span>
              <img src="/img/common/arrow-down.png" alt="menu" />
            </Link>
            <Link href={`#`}>
              <span>Insights</span>
              <img src="/img/common/arrow-down.png" alt="menu" />
            </Link>
            <Link href={`/contact`}>
              <span>Contact Us</span>
              <img src="/img/common/arrow-down.png" alt="menu" />
            </Link>
          </nav>
          {/* <button id="hamburger" className={styles.hamburger} onClick={(e) => HamburgerMenuTogle(e)}>
            Menu
          </button> */}
        </div>
      </div>
    </div>
  );
}
