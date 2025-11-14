import React from "react";
import styles from "@/styles/landingpage/sub/SkilCard.module.scss";
import frameworks from "@/public/assets/skills/frameworks.webp";
import penetration from "@/public/assets/skills/penetration.webp";
import programming from "@/public/assets/skills/programming.webp";
import cloud from "@/public/assets/skills/cloud.webp";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const skillsData = [
  {
    image: penetration,
    title: "🔍 Penetration Testing Tools",
    description: [
      { icon: "🧰", text: "Burp Suite" },
      { icon: "🌐", text: "Nmap" },
      { icon: "🔒", text: "Nessus" },
      { icon: "💣", text: "Metasploit" },
      { icon: "📡", text: "Wireshark" },
      { icon: "🧪", text: "Acunetix" },
    ],
  },
  {
    image: cloud,
    title: "☁️ Cloud & Infrastructure",
    description: [
      { icon: "☁️", text: "AWS" },
      { icon: "🔷", text: "Azure" },
      { icon: "🐳", text: "Docker" },
      { icon: "⚙️", text: "Kubernetes" },
      { icon: "🚀", text: "CI/CD pipelines" },
    ],
  },
  {
    image: programming,
    title: "⚙️ Programming & Automation",
    description: [
      { icon: "🐍", text: "Python" },
      { icon: "💻", text: "Bash" },
      { icon: "📜", text: "JavaScript" },
    ],
  },
  {
    image: frameworks,
    title: "📘 Frameworks & Standards",
    description: [
      { icon: "🛡️", text: "OWASP" },
      { icon: "🏛️", text: "CIS" },
      { icon: "📊", text: "NIST" },
      { icon: "🧾", text: "GDPR" },
      { icon: "💳", text: "PCI-DSS" },
    ],
  },
];

const SkillCard = ({}) => {
  return (
    // <section className={styles.skillsSection}>
    //   {skillsData.map((skill, index) => (
    //     <div className={styles.card} key={index}>
    //       <div className={styles.cardHeader}>
    //         <Image
    //           src={skill.image}
    //           alt={skill.title}
    //           className={styles.cardImage}
    //         />
    //       </div>
    //       <div className={styles.cardBody}>
    //         <h5 className={styles.cardTitle}>{skill.title}</h5>
    //         <ul className={styles.cardList}>
    //           {skill.description.map((item, i) => (
    //             <li key={i} className={styles.cardListItem}>
    //               <span className={styles.icon}>{item.icon}</span>
    //               <span>{item.text}</span>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>
    //   ))}
    // </section>

    <div className="">
      {skillsData.map((skill, idx) => {
        // Split description array into 2 columns (4 per column)
        const col1 = skill.description.slice(0, 3);
        const col2 = skill.description.slice(3);

        return (
          <CardContainer key={idx} className="inter-var">
            <CardBody className="bg-gray-50 p-6 threedCard relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              {/* Title */}
              <CardItem
                translateZ={50}
                className="title font-bold text-neutral-600 dark:text-white"
              >
                {skill.title}
              </CardItem>

              {/* Image */}
              <CardItem translateZ={100} className="w-full mt-4">
                <div className="relative h-50 w-full rounded-xl overflow-hidden group-hover/card:shadow-xl">
                  <Image
                    src={skill.image}
                    alt={skill.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 30rem"
                    style={{ objectFit: "cover" }}
                    className="group-hover/card:scale-[1.02] transition-transform"
                  />
                </div>
              </CardItem>

              {/* Two-column description list */}
              <CardItem translateZ={60} className="w-full mt-6">
                <div className="grid threedCardListContainer grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-neutral-700 dark:text-neutral-300 text-sm">
                  <ul className="space-y-2">
                    {col1.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-lg">{item.icon}</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                  {col2.length > 0 && (
                    <ul className="space-y-2 mt-2 sm:mt-0">
                      {col2.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-lg">{item.icon}</span>
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        );
      })}
    </div>
  );
};

export default SkillCard;
