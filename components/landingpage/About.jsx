"use client";
import React from "react";
import styles from "@/styles/landingpage/About.module.scss";
import Shuffle from "../ui/reactbits/ShuffleText";
import DecryptedText from "../ui/reactbits/DecryptedText";
import about from "@/public/assets/gayathri/about.webp";
import Image from "next/image";
import FallingText from "../ui/reactbits/FallingText";
import BlurText from "../ui/reactbits/BlurText";
import Particles from "../ui/reactbits/ParticlesBg";

const About = () => {
 
  return (
    <div className={styles.containerAbout}>
      <div className={styles.bg}>
        {/* <FallingStars /> */}
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
      </div>
      <div className={styles.leftContainer}>
        <div>
          <h2>
            <Shuffle
              text="Who i Am"
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
            text="Securing the digital world, one vulnerability at a time."
            animateOn="view"
            revealDirection="center"
            className={styles.subTitle}
          />
        </div>
        <div className={styles.description}>
          <p>
            With over a decade of hands-on experience in cybersecurity and
            infrastructure engineering, I’ve spent my career blending curiosity
            with code — from breaking into systems (ethically!) to building them
            stronger. My focus lies in cloud-native security, DevSecOps, and
            penetration testing — turning risks into resilience and teaching
            teams to think like attackers while building like defenders.
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
      <div className={styles.rightContainer}>
        <div className={styles.aboutImg}>
          <Image src={about} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default About;
