import React from "react";
import Shuffle from "../ui/reactbits/ShuffleText";
import DecryptedText from "../ui/reactbits/DecryptedText";
import styles from '@/styles/common/Titles.module.scss'

const Titles = ({title,subTitle}) => {
  return (
    <div className={styles.mainTitles}>
      <h2>
        <Shuffle
          text={title}
          shuffleDirection="right"
          duration={0.35}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover={true}
          respectReducedMotion={true}
        />
        <i></i>
      </h2>
      <DecryptedText
        text={subTitle}
        animateOn="view"
        revealDirection="center"
        className={styles.subTitle}
      />
    </div>
  );
};

export default Titles;
