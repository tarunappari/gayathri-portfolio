"use client";
import React from "react";
import {
  Briefcase,
  Shield,
  Cloud,
  Lock,
  Layers,
  Radar,
  UserCheck,
} from "lucide-react";
import RadialOrbitalTimeline from "../ui/radialOrbit";
import styles from "@/styles/landingpage/Experience.module.scss";
import wipro from "@/public/assets/xp/wipro.png";
import cycops from "@/public/assets/xp/cycops.png";
import phillips from "@/public/assets/xp/phillips.png";
import pwc from "@/public/assets/xp/pwc.png";
import societe from "@/public/assets/xp/Societe.png";
import traveloka from "@/public/assets/xp/traveloka.png";
import aujis from "@/public/assets/xp/aujis.png";
import girlImg from "@/public/assets/xp/xp.png";
import Image from "next/image";
import Titles from "../common/Titles";

export const timelineData = [
  {
    id: 1,
    company: "Wipro Technologies",
    title: "Technical Lead",
    date: "2024–Present",
    content:
      "Leading penetration testing efforts, mentoring engineers, and embedding security at scale.",
    category: "Leadership",
    icon: Briefcase,
    image: wipro,
    relatedIds: [2],
    status: "current",
    energy: 100,
  },
  {
    id: 2,
    company: "Societe Generale",
    title: "Cyber Security Consultant",
    date: "2023–2024",
    content:
      "Cloud & Active Directory security reviews, compliance guardrails, and secure architecture design.",
    category: "Consulting",
    icon: Shield,
    image: societe,
    relatedIds: [1, 3],
    status: "completed",
    energy: 90,
  },
  {
    id: 3,
    company: "PwC",
    title: "Senior Associate II",
    date: "2021–2023",
    content:
      "Secured Kubernetes clusters, APIs, and CI/CD pipelines through DevSecOps integration.",
    category: "DevSecOps",
    icon: Layers,
    image: pwc,
    relatedIds: [2, 4],
    status: "completed",
    energy: 85,
  },
  {
    id: 4,
    company: "Traveloka",
    title: "Security Engineer",
    date: "2019–2020",
    content:
      "Threat modeling and risk analysis across distributed cloud infrastructure.",
    category: "Cloud Security",
    icon: Cloud,
    image: traveloka,
    relatedIds: [3, 5],
    status: "completed",
    energy: 75,
  },
  {
    id: 5,
    company: "Philips India",
    title: "Technology Specialist",
    date: "2017–2019",
    content:
      "Performed application pentesting across 90+ enterprise applications.",
    category: "Pentesting",
    icon: Lock,
    image: phillips,
    relatedIds: [4, 6],
    status: "completed",
    energy: 60,
  },
  {
    id: 6,
    company: "Aujas Networks",
    title: "Security Consultant",
    date: "2016–2017",
    content: "Tailored security solutions and risk mitigation strategies.",
    category: "Consulting",
    icon: Radar,
    image: aujis,
    relatedIds: [5, 7],
    status: "completed",
    energy: 45,
  },
  {
    id: 7,
    company: "Cycops India",
    title: "InfoSec Analyst",
    date: "2014–2016",
    content: "Automated vulnerability management and awareness programs.",
    category: "Security Operations",
    icon: UserCheck,
    image: cycops,
    relatedIds: [6],
    status: "completed",
    energy: 30,
  },
];

const Experience = () => {
  return (
    <div className={styles.mainContainer}>
      <Titles title={'The Journey So Far'} subTitle={'Every company, every test, every exploit fixed — a story of learning and resilience.'} />
      <div className={styles.gridDivider}>
        <div className={styles.xpImgContainer}
        >
          <Image src={girlImg} alt="img" />
        </div>
        <div>
          <RadialOrbitalTimeline timelineData={timelineData} />
        </div>
      </div>
    </div>
  );
};

export default Experience;

const journeySteps = [
  {
    title: "Wipro Technologies — Technical Lead",
    description:
      "Leading penetration testing efforts, mentoring engineers, and embedding security at scale.",
    date: "2024–Present",
    category: "Leadership",
    status: "current",
  },
  {
    title: "Société Générale — Cyber Security Consultant",
    description:
      "Cloud & Active Directory security reviews, compliance guardrails, and secure architecture design.",
    date: "2023–2024",
    category: "Consulting",
    status: "completed",
  },
  {
    title: "PwC — Senior Associate II",
    description:
      "Secured Kubernetes clusters, APIs, and CI/CD pipelines through DevSecOps integration.",
    date: "2021–2023",
    category: "DevSecOps",
    status: "completed",
  },
  {
    title: "Traveloka — Security Engineer",
    description:
      "Threat modeling and risk analysis across distributed cloud infrastructure.",
    date: "2019–2020",
    category: "Cloud Security",
    status: "completed",
  },
  {
    title: "Philips India — Technology Specialist",
    description:
      "Performed application pentesting across 90+ enterprise applications.",
    date: "2017–2019",
    category: "Pentesting",
    status: "completed",
  },
  {
    title: "Aujas Networks — Security Consultant",
    description: "Tailored security solutions and risk mitigation strategies.",
    date: "2016–2017",
    category: "Consulting",
    status: "completed",
  },
  {
    title: "Cucops India — InfoSec Analyst",
    description: "Automated vulnerability management and awareness programs.",
    date: "2014–2016",
    category: "Security Operations",
    status: "completed",
  },
];
