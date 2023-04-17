import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Link from "next/link";
import Header from "../common/header";

import "swiper/css";
import "swiper/css/pagination";
import styles from "./sec_one.module.css";

export default function SecOne({ products }) {
  const router = useRouter();
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };
  return (
    <div className={styles.sec_one}>
      <Header />
      <Swiper loop={true} pagination={pagination} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className={styles.slide_outer}>
            <div className={styles.slide_image}>
              <img src="/img/home/1.jpg" onError={(e) => (e.target.src = "/img/common/ina.svg")} alt="alt" />
              <div className={styles.slide_image_top}></div>
            </div>
            <div className={styles.slide_top}>
              <div className={`container ${styles.container} ${styles.slide_title_container}`}>
                <div className={styles.slide_out}>
                  <h3>ACCLERATING GROWTH</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                    ......
                  </p>
                  {/* <Link href={"/contact"}>Contact Us</Link> */}
                  <button onClick={() => router.push("/contact")}>
                    <span>Contact Us</span>
                    <img src="/img/common/arrow-right.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {products.products
          // ?.slice(0)
          // .reverse()
          ?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className={styles.slide_outer}>
                  <div className={styles.slide_image}>
                    <img
                      src={item?.thumbnail ? item?.thumbnail : "/img/common/ni.svg"}
                      onError={(e) => (e.target.src = "/img/common/ina.svg")}
                      alt="product"
                    />
                    <div className={styles.slide_image_top}></div>
                  </div>
                  <div className={styles.slide_top}>
                    <div className={`container ${styles.container} ${styles.slide_title_container}`}>
                      <div className={styles.slide_out}>
                        <h3>
                          {item?.brand} | {item?.title}
                        </h3>
                        <p>{item?.description}</p>
                        {/* <Link href={"/contact"}>Contact Us</Link> */}
                        <button onClick={() => router.push("/contact")}>
                          <span>Contact Us</span>
                          <img src="/img/common/arrow-right.png" alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
