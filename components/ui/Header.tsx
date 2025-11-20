"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faCircleQuestion,
    faFolder,
    faEnvelope,
    faMoon,
} from "@fortawesome/free-regular-svg-icons";
import { faGit, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen((v) => !v);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        // container must be relative to position the mobile menu absolute below it
        <div className="relative z-50">
            <header
                className="sticky top-6 z-50 bg-gradient-to-r from-blue-900/30 to-pink-900/20 backdrop-blur-md text-white
                   p-4 flex justify-between items-center
                   md:w-[70%] w-[85%] mx-auto mt-6 rounded-4xl overflow-visible shadow-lg"
            >
                <div className="flex items-center gap-3 ml-2">
                    <Image
                        src="/profile.avif"
                        width={36}
                        height={36}
                        alt="My photo"
                        className="rounded-full"
                    />
                </div>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-6">
                    <a href="#Home" className="relative group">
                        <FontAwesomeIcon icon={faHouse} style={{ width: 14 }} />
                        <span className="ml-2">Home</span>
                        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-17" />
                    </a>

                    <a href="#About" className="relative group">
                        <FontAwesomeIcon icon={faCircleQuestion} style={{ width: 14 }} />
                        <span className="ml-2">About</span>
                        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-17" />
                    </a>

                    <a href="#project" className="relative group">
                        <FontAwesomeIcon icon={faFolder} style={{ width: 14 }} />
                        <span className="ml-2">Projects</span>
                        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-21" />
                    </a>
                </nav>

                {/* Right icons */}
                <nav className="flex items-center gap-3">
                    <a href="#git" className="px-2 hover:underline">
                        <FontAwesomeIcon icon={faGit} style={{ width: 18 }} />
                    </a>
                    <a href="#linkedin" className="px-2 hover:underline">
                        <FontAwesomeIcon icon={faLinkedinIn} style={{ width: 14 }} />
                    </a>
                    <a href="#email" className="px-2 hover:underline">
                        <FontAwesomeIcon icon={faEnvelope} style={{ width: 14 }} />
                    </a>
                    <a href="#switch" className="px-4  hover:underline">
                        <FontAwesomeIcon icon={faMoon} style={{ width: 14 }} />
                    </a>

                    {/* Hamburger (mobile) */}
                    <button
                        className="md:hidden text-white text-xl mr-2"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} style={{ width: 14 }} />
                    </button>
                </nav>
            </header>

            {/* Mobile vertical menu (visible only when isMenuOpen) */}
            {isMenuOpen && (
                <nav
                    className="md:hidden absolute top-full left-0 right-0 mx-auto w-[85%] md:w-[70%]
                     bg-gradient-to-r from-blue-900/50 to-pink-900/40 backdrop-blur-xl text-white
                     flex flex-col items-center py-4 space-y-3 rounded-b-2xl shadow-lg"
                >
                    <a href="#Home" onClick={closeMenu} className="w-full text-center py-2">
                        <FontAwesomeIcon icon={faHouse} style={{ width: 14 }} /> <span className="ml-2">Home</span>
                    </a>
                    <a href="#About" onClick={closeMenu} className="w-full text-center py-2">
                        <FontAwesomeIcon icon={faCircleQuestion} style={{ width: 14 }} />{" "}
                        <span className="ml-2">About</span>
                    </a>
                    <a href="#project" onClick={closeMenu} className="w-full text-center py-2">
                        <FontAwesomeIcon icon={faFolder} style={{ width: 14 }} /> <span className="ml-2">Projects</span>
                    </a>
                </nav>
            )}
        </div>
    );
}
