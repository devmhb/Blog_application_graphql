import React from "react";
import styles from "../styles/faq.module.scss";
import Head from "next/head";
import { FaqItems } from "../components";

const FAQ = () => {
  return (
    <>
      <Head>
        <title>FAQ</title>
        <meta name="FAQ" content="faq page" />
      </Head>

      <div className={styles.faq_container}>
        <div className={styles.faq_header}>
          <h1 className={styles.faq_title}>
            <span>Frequently</span> asked question
          </h1>
          <p className={styles.faq_desc}>
            Did you come here for something in particular or just general
            Riker-bashing? And blowing
          </p>
        </div>
        <div className={styles.faq_items}>
          <FaqItems />
        </div>
      </div>
    </>
  );
};

export default FAQ;
