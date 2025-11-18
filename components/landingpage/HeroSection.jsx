"use client";
import React from "react";
import styles from "@/styles/landingpage/HeroSection.module.scss";
import Shuffle from "../ui/reactbits/ShuffleText";
import DecryptedText from "../ui/reactbits/DecryptedText";
import gayathri from "@/public/assets/gayathri/gayathri.webp";
import gayathri2 from "@/public/assets/gayathri/gayathri2.webp";
import Image from "next/image";
import { IconBrandGithub,IconBrandLinkedin,IconPhone  } from "@tabler/icons-react";

const HeroSection = () => {
  
  return (
    <div className={styles.containerHero}>
      {/* <div className={styles.bg}>
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div> */}
      <div className={styles.content}>
        <h2 className={`gradientText ${styles.title}`}>Hey! I'm</h2>
        <Shuffle
          text="Gayathri Rachakonda"
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
          className={styles.shufleTextContainer}
        />
        <div
          className={styles.subContent}
          style={{ marginTop: "1rem", fontSize: "1.25rem" }}
        >
          <DecryptedText
            text="Penetration Tester & Cybersecurity Architect"
            animateOn="view"
            revealDirection="center"
            className={styles.subTitle}
          />
          <DecryptedText
            text="Security-focused engineer with 10+ years in ethical hacking, DevSecOps, and cloud security."
            animateOn="view"
            revealDirection="center"
            className={styles.subSubTitle}
          />
        </div>
        <div className={styles.profileImg}>
          <Image src={gayathri} alt="profile" />
        </div>
        <div className={styles.profileImg2}>
          <Image src={gayathri2} alt="profile" />
        </div>
        <div className={styles.btnSection}>
          <button className={styles.contactBtn}><IconPhone  stroke={2} />Contact</button>
          <button className={styles.expBtn}>View Experience</button>
          <div className={styles.icon}>
            <IconBrandGithub color="#12d5bf" />
          </div>
          <div className={styles.icon}>
            <IconBrandLinkedin  color="#12d5bf" />
          </div>
        </div>
      </div>
      {/* <div className={styles.curvedText}>
        <CurvedLoop
          marqueeText="Gayathri Rachakonda"
          speed={0.5}
          curveAmount={0}
          direction="right"
          interactive={false}
          className="custom-text-style"
        />
      </div>
      <div className={styles.curvedText} style={{ bottom: "12rem" }}>
        <CurvedLoop
          marqueeText="Gayathri Rachakonda"
          speed={0.5}
          curveAmount={0}
          direction="left"
          interactive={false}
          className="custom-text-style"
        />
      </div> */}
    </div>
  );
};

export default HeroSection;
