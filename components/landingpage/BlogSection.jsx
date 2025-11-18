"use client";
import React from "react";
import Titles from "../common/Titles";
import styles from "@/styles/landingpage/Blog.module.scss";
import BlogCard from "../ui/reactbits/BlogCard";
import attack from '@/public/assets/blog/attack.webp'
import bb from '@/public/assets/blog/bb.webp'
import blf from '@/public/assets/blog/blf.webp'

const BlogSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titlesContainer}>
        <Titles
          title={"Notes From The Field"}
          subTitle={"Writing helps me remember what hacking teaches me."}
        />
      </div>
      <div className={styles.blogContainer}>
        <BlogCard
          imageSrc={bb}
          altText="Guide to BugBounty"
          captionText="Guide to BugBounty"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          
        />
        <BlogCard
          imageSrc={blf}
          altText="Dependency Confusion Attack"
          captionText="Dependency Confusion Attack"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
        />
        <BlogCard
          imageSrc={attack}
          altText="Business Logic Flaws"
          captionText="Business Logic Flaws"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
        />
      </div>
      <div className={styles.btn}>
        <button className={styles.expBtn} >View More Blogs</button>
      </div>
    </div>
  );
};

export default BlogSection;
