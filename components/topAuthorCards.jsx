import React from "react";
import TopAuthorCard from "./topAuthorCard";
import styles from "../styles/components/topAuthors.module.scss";
import { getAuthors } from "../service";

const TopAuthorCards = ({ authors }) => {
  const AuthorsInfo = authors.edges;
  // console.log(AuthorsInfo);
  return (
    <div className={styles.top_authorC_container}>
      <h5>
        <span>Top</span>Authors
      </h5>
      <div className={styles.top_authorC}>
        {AuthorsInfo.map((author) => (
          <TopAuthorCard author={author} />
        ))}
      </div>
    </div>
  );
};

export default TopAuthorCards;
