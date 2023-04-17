/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import styles from "./contact_form.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "Type your name",
    company: "",
    email: "Type your email",
    phone: "Type your phone",
    message: "",
  });

  async function sendContactForm() {
    const api_url = "https://jsonplaceholder.typicode.com";
    if (formData.name !== "" && formData.email !== "" && formData.phone !== "") {
      console.log("Simple validation done", formData);
      // const res = await fetch(`${api_url}/posts`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Access-Control-Allow-Origin": "*",
      //   },
      //   body: JSON.stringify({
      //     name: formData.name,
      //     company: formData.company,
      //     email: formData.email,
      //     phone: formData.phone,
      //     message: formData.message,
      //   }),
      // });
      // const data = await res.json();
      // console.log(data);
    } else {
      alert("please fill all fields");
    }
  }
  return (
    <div className={styles.sec_contact_form_outer}>
      <div className={`container ${styles.container} ${styles.sec_contact_form_container}`}>
        <div className={styles.sec_contact_form_inner}>
          <div className={styles.one}>
            <div className={styles.left}>
              <input
                required
                name="name"
                type="text"
                placeholder="Name*"
                value={formData.name}
                onChange={(e) => setFormData({ ...data, name: e.target.value })}
              />
            </div>
            <div className={styles.right}>
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={(e) => setFormData({ ...data, company: e.target.value })}
              />
            </div>
          </div>
          <div className={styles.two}>
            <div className={styles.left}>
              <input
                required
                type="text"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={(e) => setFormData({ ...data, email: e.target.value })}
              />
              <input
                required
                type="text"
                name="phone"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={(e) => setFormData({ ...data, phone: e.target.value })}
              />
            </div>
            <div className={styles.right}>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...data, message: e.target.value })}
              ></textarea>
            </div>
          </div>
          <div className={styles.submit}>
            <button onClick={() => sendContactForm()}>
              <span>Submit</span>
              <img src="/img/common/arrow-right-b.png" alt=""></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
