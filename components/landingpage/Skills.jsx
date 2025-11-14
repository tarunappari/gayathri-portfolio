"use client";
import React from "react";
import styles from "@/styles/landingpage/Skills.module.scss";
import Shuffle from "../ui/reactbits/ShuffleText";
import DecryptedText from "../ui/reactbits/DecryptedText";
import LetterGlitch from "../LetterGlitch";
import SkillCard from "./sub/SkillCard";
import GlassIcons from "../ui/reactbits/GlassIconsComponent";
import { color } from "framer-motion";

const items = [
  {
    icon: "OSCP",
    color: "#696a6a",
    label: "Offensive Security Certified Professional",
  },
  { icon: "OSWE", color: "#696a6a", label: "Offensive Security Web Expert" },
  { icon: "CEH", color: "#696a6a", label: "Certified Ethical Hacker" },
  {
    icon: "CCNP",
    color: "#696a6a",
    label: "Cisco Certified Network Professional",
  },
  {
    icon: "CCNA",
    color: "#696a6a",
    label: "Cisco Certified Network Associate",
  },
  {
    icon: "AZ-900",
    color: "#696a6a",
    label: "Microsoft Certified: Azure Fundamentals",
  },
];

const Skills = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.skillsBg}>
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={true}
          smooth={true}
        />
      </div> */}
      <div className={styles.skillContent}>
        <div className={styles.titles}>
          <h2>
            <Shuffle
              text="Proof of Skill"
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
            text="Experience shows what I’ve done. Certifications prove I do it right."
            animateOn="view"
            revealDirection="center"
            className={styles.subTitle}
          />
        </div>

        <div className={styles.skillsSection}>
          <div>
            <SkillCard />
          </div>
        </div>
      </div>
      <div className={styles.certificatesContent}>
        <div className={styles.titles}>
          <h2>
            <Shuffle
              text="Certificates"
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
        </div>
        <div
          className={styles.certificateIcons}
          style={{ position: "relative" }}
        >
          <GlassIcons items={items} className="custom-class" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
