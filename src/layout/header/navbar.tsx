'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
// internal
import logo from "@/assets/images/logo/logo_02.svg";
import logo_2 from "@/assets/images/logo/logo_01.svg";
import icon_1 from "@/assets/images/icon/icon_14.svg";
import icon_2 from "@/assets/images/icon/icon_15.svg";
import menu_data from "@/data/menu-data";
import {usePathname} from "next/navigation";

type IProps = {
    logo_white?: boolean;
    no_nav_links?: boolean;
}
const Navbar = ({logo_white = false, no_nav_links = false}: IProps) => {
    const pathname = usePathname()
    return (
        <ul className="navbar-nav align-items-lg-center">
            <li className="d-block d-lg-none">
                <div className="logo">
                    <Link href="/" className="d-block">
                        <Image src={logo_white ? logo_2 : logo} alt="logo"/>
                    </Link>
                </div>
            </li>
            {(!no_nav_links) && menu_data.map((menu) => (
                <li
                    key={menu.id}
                    className={`nav-item ${menu.dropdown ? "dropdown" : ""} ${
                        menu.mega_menu ? "dropdown mega-dropdown-sm" : ""
                    }`}
                >
                    {menu.dropdown && (
                        <>
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="outside"
                                aria-expanded="false"
                            >
                                {menu.title}
                            </a>
                            <ul className="dropdown-menu">
                                {menu.dropdown_menus?.map((dm, i) => (
                                    <li key={i}>
                                        <Link href={dm.link}
                                              className={`dropdown-item ${pathname === dm.link ? 'active' : ''}`}>
                                            <span>{dm.title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                    {menu.mega_menu && (
                        <>
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="outside"
                                aria-expanded="false"
                            >
                                {menu.title}
                            </a>
                            <ul className="dropdown-menu">
                                <li className="row gx-1">
                                    {menu.mega_menus?.map((mm, _i) => (
                                        <div key={mm.id} className="col-lg-4">
                                            <div className="menu-column">
                                                <ul className="style-none mega-dropdown-list">
                                                    {mm.menus.map((sm, i) => (
                                                        <li key={i}>
                                                            <Link href={sm.link}
                                                                  className={`dropdown-item ${pathname === sm.link ? 'active' : ''}`}>
                                                                <span>{sm.title}</span>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </li>
                            </ul>
                        </>
                    )}
                    {!menu.dropdown && !menu.mega_menu && (
                        <Link className="nav-link" href={menu.link} role="button">
                            {menu.title}
                        </Link>
                    )}
                </li>
            ))}
            <li className="d-md-none ps-2 pe-2">
                <ul className="style-none contact-info m0 pt-30">
                    <li className="d-flex align-items-center p0 mt-15">
                        <Image src={icon_1} alt="icon" className="lazy-img icon me-2"/>
                        <Link href="mailto:info@ewbsbusiness.ae" className="fw-500">
                            info@ewbsbusiness.ae
                        </Link>
                    </li>
                    <li className="d-flex align-items-center p0 mt-15">
                        <Image src={icon_2} alt="icon" className="lazy-img icon me-2"/>
                        <Link href="tel:+971 42 559 901" className="fw-500">
                            +971 42 559 901
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>
    );
};

export default Navbar;
