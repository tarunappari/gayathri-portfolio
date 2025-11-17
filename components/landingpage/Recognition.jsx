"use client";
import React from "react";
import styles from "@/styles/landingpage/Recognition.module.scss";
import Titles from "../common/Titles";
import AnimatedContent from "../animations/ReactBitsAnimation";
import Image from "next/image";
import NvidiaLogo from "@/public/assets/bug/gogle.webp";
import SupabaseLogo from "@/public/assets/bug/micro.webp";
import GithubLogo from "@/public/assets/bug/sym.webp";
import OpenAILogo from "@/public/assets/bug/sony.webp";
import TursoLogo from "@/public/assets/bug/dyson.webp";
import ClerkLogo from "@/public/assets/bug/ebay.webp";
import ClaudeLogo from "@/public/assets/bug/ever.webp";
import VercelLogo from "@/public/assets/bug/mixmax.webp";
import { FallingImages } from "../ui/logo-cloud";
import MusicCard from "./sub/MusicCard";

const Recognition = () => {
  const logos = [
    NvidiaLogo,
    SupabaseLogo,
    GithubLogo,
    OpenAILogo,
    TursoLogo,
    ClerkLogo,
    ClaudeLogo,
    VercelLogo,
  ];
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
      <div className={styles.recognition}>
        <div>
          <h2>
            Recognized in global <span>Bug Bounty Programs</span> and{" "}
            <span>Hall of Fame</span> listings by:
          </h2>

          <FallingImages
            images={logos}
            trigger="hover"
            gravity={0.85}
            imageSize={160}
            bounceAmount={0.8}
          />
        </div>
      </div>
      <div className={styles.contribution}>
        <div>
          <Titles title={"The Infosec Comic Podcast"} subTitle={"Exploring cybersecurity stories, hacks, and real-world insights."} />
        </div>
        <div className={styles.musicCardContainer}>
          <MusicCard />
        </div>


      </div>
    </div>
  );
};

export default Recognition;
