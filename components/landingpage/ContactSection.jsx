"use client";
import React from "react";
import ContactCard from "./sub/ContactForm";
import styles from "@/styles/landingpage/ContactSection.module.scss";
import Titles from "../common/Titles";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconPhone,
  IconMailOpened,
  IconBrandMedium,
  IconMapPin,
} from "@tabler/icons-react";
import DarkVeil from "../ui/reactbits/DarkVeil";

const ContactSection = () => {
  return (
    <div className={styles.mainContainer}>
      {/* <div className={styles.darkVeil}>
        <DarkVeil />
      </div> */}

      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div>
            <div className={styles.titleSection}>
              <Titles
                title={"Let’s Collaborate"}
                subTitle={
                  "Whether it’s hardening systems or brainstorming over zero-days — let’s connect."
                }
              />
            </div>
            <div>
              <span className={styles.icon}>
                <IconMailOpened stroke={2} color="#12d5bf" />
              </span>
              <h2>gayatrirachakonda@hotmail.com</h2>
            </div>
            <div>
              <IconPhone color="#12d5bf" stroke={2} /> <h2>+919989974943</h2>
            </div>
            <div>
              <IconMapPin color="#12d5bf" stroke={2} />{" "}
              <h2>Hyderabad, India 500091</h2>
            </div>
            <div>
              <IconBrandGithub color="#12d5bf" stroke={2} />
              <IconBrandLinkedin color="#12d5bf" stroke={2} />
              <IconBrandMedium color="#12d5bf" stroke={2} />
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <ContactCard />
        </div>
      </div>

      <div className={styles.credits}>
        <h2> © 2025 Gayathri Rachakonda · All Rights Reserved</h2>
        <h2>
          Built with 🖤 by <span>Tarun Appari</span>
        </h2>
      </div>
    </div>
  );
};

export default ContactSection;
