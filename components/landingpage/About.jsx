"use client";
import React from "react";
import styles from "@/styles/landingpage/About.module.scss";
import about from "@/public/assets/gayathri/about.webp";
import Image from "next/image";
import FallingText from "../ui/reactbits/FallingText";
import BlurText from "../ui/reactbits/BlurText";
import Titles from "../common/Titles";

const About = () => {
  return (
    <div className={styles.containerAbout}>
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
      <div className={styles.leftContainer}>
        <div className={styles.titlesAboutContainer}>
          <Titles
            title={"Who i Am"}
            subTitle={
              "Securing the digital world, one vulnerability at a time."
            }
          />
        </div>
        <div className={styles.contentDescContainer}>
          <div className={styles.description}>
            <p>
              With over a decade of hands-on experience in cybersecurity and
              infrastructure engineering, I’ve spent my career blending
              curiosity with code — from breaking into systems (ethically!) to
              building them stronger. My focus lies in cloud-native security,
              DevSecOps, and penetration testing — turning risks into resilience
              and teaching teams to think like attackers while building like
              defenders.
            </p>
          </div>
          <div className={styles.aboutSkills}>
            <div>
              <BlurText
                text="☁️ Cloud Security (AWS & Azure)"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-2xl mb-8"
              />
              <BlurText
                text="🔐 DevSecOps & CI/CD Hardening"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-2xl mb-8"
              />
              <BlurText
                text="🌐 Web & API Penetration Testing"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-2xl mb-8"
              />
            </div>
            <div>
              <BlurText
                text="🧩 Threat Modeling & Risk Analysis"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-2xl mb-8"
              />
              <BlurText
                text="🤖 AI / LLM System Vulnerability Testing"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-2xl mb-8"
              />
            </div>
          </div>
          <div className={styles.fallingTextContainer}>
            <FallingText
              text={`☁️ 🔐 🌐 🧩 🤖 🧠 🧑‍💻 🚨 🧱 🕵️‍♂️ 🧰 🧾 🛡️ 📊 🖧`}
              highlightWords={[
                "☁️",
                "🔐",
                "🌐",
                "🧩",
                "🤖",
                "🧠",
                "🧑‍💻",
                "🚨",
                "🧱",
                "🕵️‍♂️",
                "🧰",
                "🧾",
                "🛡️",
                "📊",
                "🖧",
              ]}
              highlightClass="highlighted"
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="2rem"
              mouseConstraintStiffness={0.9}
            />
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.aboutImg}>
          <Image src={about} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default About;
