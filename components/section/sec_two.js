/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./sec_two.module.css";

export default function SecTwo({ users }) {
  return (
    <div className={styles.sec_two}>
      <div className={`container ${styles.container} ${styles.sec_two_container}`}>
        <div className={styles.sec_two_inner}>
          <div className={styles.top}>
            <h6>ABOUT US</h6>
            <h2>We consider the future our most important asset to invest in</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              <br />
              nibh euismod tincidunt utlaoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet ...
            </p>
            <Link href="#">
              <span>MORE ABOUT US</span>
              <img src="/img/common/arrow-right-b.png" alt="" />
            </Link>
          </div>
          <div className={styles.stwo_slider}>
            <button className="prev"></button>
            <button className="next"></button>
            <Swiper
              slidesPerView={3}
              spaceBetween={24}
              loop={true}
              //   navigation={true}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              modules={[Navigation]}
              className="mySwiperOne"
            >
              {/* <SwiperSlide>
                <div className={styles.stwo_slid_out}>
                  <img src="/img/home/01.jpg" alt="img" />
                  <div className={styles.description}>
                    <h4>Lorem ipsum</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                      utlaoreet dolore magna
                    </p>
                    <button>
                      <span>MORE ABOUT US</span>
                      <img src="/img/common/arrow-right-b.png" alt="" />
                    </button>
                  </div>
                </div>
              </SwiperSlide> */}
              {users.users
                // ?.slice(0)
                // .reverse()
                ?.map((item, index) => {
                  return (
                    <SwiperSlide>
                      <div className={styles.stwo_slid_out}>
                        <img
                          src={item?.image ? item?.image : "/img/common/ni.svg"}
                          onError={(e) => (e.target.src = "/img/common/ina.svg")}
                          alt="user"
                        />
                        <div className={styles.description}>
                          <h4>{item?.username}</h4>
                          <p>
                            {item?.firstName} {item?.lastName}
                            <br /> {item?.domain}
                          </p>
                          <button>
                            <span>MORE ABOUT US</span>
                            <img src="/img/common/arrow-right-b.png" alt="" />
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
