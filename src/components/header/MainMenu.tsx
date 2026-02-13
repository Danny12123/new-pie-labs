import Image from "next/image";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import useSubMenuToggle from "@/hooks/useSubMenuToggle";

interface DataType {
    navbarPlacement?: string;
}

const MainMenu = ({ navbarPlacement }: DataType) => {

    const [isOpen, setOpen] = useState(false);
    const { toggleSubMenu, isMenuOpen, getMenuStyle } = useSubMenuToggle();

    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement ? navbarPlacement : ""}`} data-in="fadeInDown" data-out="fadeOutUp">

                <li>
                    <Link
                        href="/"
                        className="dropdown-toggle"
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link
                        href="/about-us"
                        className="dropdown-toggle"
                    >
                        Pages
                    </Link>
                    
                </li>

                <li className={`dropdown ${isMenuOpen('services') ? 'on' : ''}`}>
                    <Link
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleSubMenu('services');
                        }}
                        scroll={false}
                    >
                        Services
                    </Link>
                    <ul
                        className="dropdown-menu"
                        style={getMenuStyle('services')}
                    >
                        <li><Link href="/services">Services Version Four</Link></li>
                        <li><Link href="/services-details/1">Services Details</Link></li>
                    </ul>
                </li>

                {/* <li className={`dropdown ${isMenuOpen('blog') ? 'on' : ''}`}>

                    <Link href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleSubMenu('blog');
                        }}
                        scroll={false}
                    >
                        Blog
                    </Link>

                    <ul
                        className="dropdown-menu"
                        style={getMenuStyle('blog')}
                    >
                        <li><Link href="/blog-standard">Blog Standard</Link></li>
                        <li><Link href="/blog-with-sidebar">Blog With Sidebar</Link></li>
                        <li><Link href="/blog-2-column">Blog Grid Two Colum</Link></li>
                        <li><Link href="/blog-3-column">Blog Grid Three Colum</Link></li>
                        <li><Link href="/blog-single/1">Blog Single</Link></li>
                        <li><Link href="/blog-single-with-sidebar/1">Blog Single With Sidebar</Link></li>
                    </ul>
                </li> */}

                <li><Link href="/contact-us">contact</Link></li>
            </ul>

            <ModalVideo channel='youtube' isOpen={isOpen} videoId="aTC_RNYtEb0" onClose={() => setOpen(false)} />
        </>
    );
};

export default MainMenu;