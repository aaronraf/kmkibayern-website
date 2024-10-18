import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/kmkibayern-logo-whitebg.png";
import NavbarLink from "./NavbarLink";
import NavbarButton from "./NavbarButton";

const Navbar = ({ currentLang, onLangChange }) => {
	return (
		<header>
			<nav>
				<Container>
					<Row className="justify-content-center align-items-center">
						<NavbarLink link="#" imgSrc={logo} imgAlt="KMKI Bayern logo" />
						<NavbarLink link="#" text="Home" />
						<NavbarLink link="#" text="Upcoming Events" />
						<NavbarLink link="#" text="Articles" />
						<NavbarLink link="#" text="About Us" />
						<NavbarButton name={"ID"} onClick={() => onLangChange("id")} />
						<NavbarButton name={"EN"} onClick={() => onLangChange("en")} />
						<NavbarButton name={"DE"} onClick={() => onLangChange("de")} />
					</Row>
				</Container>
			</nav>
		</header>
	);
};

export default Navbar;

// contoh website ppim

// function NavbarPPI() {`
// 	return (
// 		<div class="header--row-inner header-main-inner">
// 			<div class="container">
// 				<div class="row row--wrapper" data-section="hfg_header_layout_main">
// 					<div class="hfg-slot left">
// 						<div class="builder-item desktop-left">
// 							<div
// 								class="item--inner builder-item--logo"
// 								data-section="title_tagline"
// 								data-item-id="logo">
// 								<div class="site-logo">
// 									<a
// 										class="brand"
// 										href="https://ppimunich.org/"
// 										title="← PPI Munich"
// 										aria-label="PPI Munich PPIM untuk Semua"
// 										rel="home">
// 										<img
// 											fetchpriority="high"
// 											width="3660"
// 											height="2132"
// 											src="https://ppimunich.org/wp-content/uploads/2024/06/Logo-PPIM-highres.png"
// 											class="neve-site-logo skip-lazy"
// 											alt=""
// 											data-variant="logo"
// 											decoding="async"
// 											srcset="
// 												https://ppimunich.org/wp-content/uploads/2024/06/Logo-PPIM-highres.png           3660w,
// 												https://ppimunich.org/wp-content/uploads/2024/06/Logo-PPIM-highres-300x175.png    300w,
// 												https://ppimunich.org/wp-content/uploads/2024/06/Logo-PPIM-highres-1024x596.png  1024w,
// 												https://ppimunich.org/wp-content/uploads/2024/06/Logo-PPIM-highres-768x447.png    768w,
// 												https://ppimunich.org/wp-content/uploads/2024/06/Logo-PPIM-highres-1536x895.png  1536w,
// 												https://ppimunich.org/wp-content/uploads/2024/06/Logo-PPIM-highres-2048x1193.png 2048w
// 											"
// 											sizes="(max-width: 3660px) 100vw, 3660px"
// 										/>
// 									</a>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div class="hfg-slot right">
// 						<div class="builder-item has-nav">
// 							<div
// 								class="item--inner builder-item--primary-menu has_menu"
// 								data-section="header_menu_primary"
// 								data-item-id="primary-menu">
// 								<div class="nv-nav-wrap">
// 									<div
// 										role="navigation"
// 										class="nav-menu-primary style-border-bottom m-style"
// 										aria-label="Primary Menu">
// 										<ul
// 											id="nv-primary-navigation-main"
// 											class="primary-menu-ul nav-ul menu-desktop">
// 											<li
// 												id="menu-item-354"
// 												class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-309 current_page_item menu-item-354 nv-active">
// 												<div class="wrap">
// 													<a href="https://ppimunich.org/" aria-current="page">
// 														Home
// 													</a>
// 												</div>
// 											</li>
// 											<li
// 												id="menu-item-356"
// 												class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-356">
// 												<div class="wrap">
// 													<a href="https://ppimunich.org/about/">
// 														<span class="menu-item-title-wrap dd-title">
// 															Organisasi
// 														</span>
// 													</a>
// 													<div
// 														role="button"
// 														aria-pressed="false"
// 														aria-label="Open Submenu"
// 														tabindex="0"
// 														class="caret-wrap caret 2"
// 														style="margin-left: 5px">
// 														<span class="caret">
// 															<svg
// 																fill="currentColor"
// 																aria-label="Dropdown"
// 																xmlns="http://www.w3.org/2000/svg"
// 																viewBox="0 0 448 512">
// 																<path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
// 															</svg>
// 														</span>
// 													</div>
// 												</div>
// 												<ul class="sub-menu">
// 													<li
// 														id="menu-item-470"
// 														class="menu-item menu-item-type-post_type menu-item-object-page menu-item-470">
// 														<div class="wrap">
// 															<a href="https://ppimunich.org/about/">
// 																Tentang Kami
// 															</a>
// 														</div>
// 													</li>
// 													<li
// 														id="menu-item-480"
// 														class="menu-item menu-item-type-post_type menu-item-object-page menu-item-480">
// 														<div class="wrap">
// 															<a href="https://ppimunich.org/ad-art/">AD/ART</a>
// 														</div>
// 													</li>
// 													<li
// 														id="menu-item-601"
// 														class="menu-item menu-item-type-post_type menu-item-object-page menu-item-601">
// 														<div class="wrap">
// 															<a href="https://ppimunich.org/arsip-kepengurusan/">
// 																Arsip
// 															</a>
// 														</div>
// 													</li>
// 													<li
// 														id="menu-item-481"
// 														class="menu-item menu-item-type-post_type menu-item-object-page menu-item-481">
// 														<div class="wrap">
// 															<a href="https://ppimunich.org/contacts/">
// 																Kontak
// 															</a>
// 														</div>
// 													</li>
// 												</ul>
// 											</li>
// 											<li
// 												id="menu-item-358"
// 												class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-358">
// 												<div class="wrap">
// 													<a href="https://ppimunich.org/events/">
// 														<span class="menu-item-title-wrap dd-title">
// 															Events
// 														</span>
// 													</a>
// 													<div
// 														role="button"
// 														aria-pressed="false"
// 														aria-label="Open Submenu"
// 														tabindex="0"
// 														class="caret-wrap caret 7"
// 														style="margin-left: 5px">
// 														<span class="caret">
// 															<svg
// 																fill="currentColor"
// 																aria-label="Dropdown"
// 																xmlns="http://www.w3.org/2000/svg"
// 																viewBox="0 0 448 512">
// 																<path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
// 															</svg>
// 														</span>
// 													</div>
// 												</div>
// 												<ul class="sub-menu">
// 													<li
// 														id="menu-item-357"
// 														class="menu-item menu-item-type-post_type menu-item-object-page menu-item-357">
// 														<div class="wrap">
// 															<a href="https://ppimunich.org/program-kerja/">
// 																Program Kerja
// 															</a>
// 														</div>
// 													</li>
// 													<li
// 														id="menu-item-479"
// 														class="menu-item menu-item-type-post_type menu-item-object-page menu-item-479">
// 														<div class="wrap">
// 															<a href="https://ppimunich.org/upcoming-past-events/">
// 																Upcoming/Past Events
// 															</a>
// 														</div>
// 													</li>
// 												</ul>
// 											</li>
// 											<li
// 												id="menu-item-355"
// 												class="menu-item menu-item-type-post_type menu-item-object-page menu-item-355">
// 												<div class="wrap">
// 													<a href="https://ppimunich.org/posts/">Blog</a>
// 												</div>
// 											</li>
// 											<li
// 												id="menu-item-478"
// 												class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-478">
// 												<div class="wrap">
// 													<a href="https://ppimunich.org/faq/">
// 														<span class="menu-item-title-wrap dd-title">
// 															FAQ
// 														</span>
// 													</a>
// 													<div
// 														role="button"
// 														aria-pressed="false"
// 														aria-label="Open Submenu"
// 														tabindex="0"
// 														class="caret-wrap caret 11"
// 														style="margin-left: 5px">
// 														<span class="caret">
// 															<svg
// 																fill="currentColor"
// 																aria-label="Dropdown"
// 																xmlns="http://www.w3.org/2000/svg"
// 																viewBox="0 0 448 512">
// 																<path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
// 															</svg>
// 														</span>
// 													</div>
// 												</div>
// 												<ul class="sub-menu">
// 													<li
// 														id="menu-item-523"
// 														class="menu-item menu-item-type-post_type menu-item-object-page menu-item-523">
// 														<div class="wrap">
// 															<a href="https://ppimunich.org/study-in-munich/">
// 																Study in Munich
// 															</a>
// 														</div>
// 													</li>
// 													<li
// 														id="menu-item-524"
// 														class="menu-item menu-item-type-post_type menu-item-object-page menu-item-524">
// 														<div class="wrap">
// 															<a href="https://ppimunich.org/life-in-munich/">
// 																Life in Munich
// 															</a>
// 														</div>
// 													</li>
// 													<li
// 														id="menu-item-525"
// 														class="menu-item menu-item-type-post_type menu-item-object-page menu-item-525">
// 														<div class="wrap">
// 															<a href="https://ppimunich.org/komunitas/">
// 																Komunitas
// 															</a>
// 														</div>
// 													</li>
// 												</ul>
// 											</li>
// 										</ul>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
