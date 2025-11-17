"use client";
import React from "react";
import styles from "@/styles/landingpage/Recognition.module.scss";
import Titles from "../common/Titles";
import AnimatedContent from "../animations/ReactBitsAnimation";

const Recognition = () => {
  return (
    <div className={styles.container}>
      <AnimatedContent
        distance={180}
        direction="horizontal"
        reverse={false}
        duration={1.2}
        ease="ease.out"
        initialOpacity={0}
        animateOpacity
        scale={1.1}
        threshold={0.1}
        delay={0.3}
      >
        <div className={styles.titles}>
          <Titles title={"Earning Trust, Globally"} subTitle={""} />
        </div>
      </AnimatedContent>
      <div className={styles.recognition}></div>
      <div className={styles.contribution}></div>
    </div>
  );
};

export default Recognition;
