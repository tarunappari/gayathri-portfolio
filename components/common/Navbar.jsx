"use client";
import React from 'react'
import styles from '@/styles/common/Navbar.module.scss'
import { usePathname } from 'next/navigation';


const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className={styles.container}>
            nav
        </div>
    )
}

export default Navbar;