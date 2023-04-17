/* eslint-disable @next/next/no-img-element */
import React, { useState, useMemo } from "react";

import styles from "./contact_form.module.css";

export default function ContactForm({ setFormSucess }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    common: "",
    email: "",
    phone: "",
  });

  const getTextContentOnly = (html) => {
    const regex = /(<([^>]+)>)/gi;
    const result = html.replace(regex, "");
    return result;
  };

  const phoneValidation = (e) => {
    const phoneformat = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    setFormData({ ...formData, phone: getTextContentOnly(e.target.value) });
    if (formData.phone.match(phoneformat)) {
      setErrors({ ...errors, phone: "" });
    } else {
      setErrors({ ...errors, phone: "Enter Valid Phone Number" });
    }
  };
  const MailValidation = (e) => {
    const mailformat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    setFormData({ ...formData, email: getTextContentOnly(e.target.value) });
    if (formData.email.match(mailformat)) {
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Enter Valid Email Address" });
    }
  };

  async function sendContactForm() {
    const api_url = "https://jsonplaceholder.typicode.com";
    if (formData.name !== "" && formData.email !== "" && formData.phone !== "") {
      console.log("validation done", formData);
      const res = await fetch(`${api_url}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data?.id !== "") {
        setFormSucess(true);
      }
    } else {
      setErrors({ ...errors, common: "Please fill all required fields" });
      // alert("please fill all fields");
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
                onChange={(e) => setFormData({ ...formData, name: getTextContentOnly(e.target.value) })}
              />
            </div>
            <div className={styles.right}>
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: getTextContentOnly(e.target.value) })}
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
                onChange={(e) => MailValidation(e)}
              />
              {errors.email ? <p>{errors.email}</p> : null}
              <input
                required
                type="text"
                name="phone"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={(e) => phoneValidation(e)}
              />
              {errors.phone ? <p>{errors.phone}</p> : null}
            </div>
            <div className={styles.right}>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: getTextContentOnly(e.target.value) })}
              ></textarea>
            </div>
          </div>
          <div className={styles.submit}>
            {errors.common ? <p>{errors.common}</p> : null}
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
