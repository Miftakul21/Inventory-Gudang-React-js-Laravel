import React from "react";
import { Head, router, usePage, Link } from "@inertiajs/react";
// import $ from "jquery";

const Layout = ({ children }) => {
    const { auth } = usePage().props;
    const { url } = usePage();

    const buttonSidebar = () => {
        document.body.classList.toggle("sidebar-mini");
    };

    const handleLogout = () => {
        router.post("/logout");
    };

    return (
        <>
            {/* <div id="app"> */}
            <div className="main-wrapper main-wrapper-1">
                <div className="navbar-bg"></div>
                <nav className="navbar navbar-expand-lg main-navbar">
                    <form className="form-inline mr-auto">
                        <ul className="navbar-nav mr-3">
                            <li>
                                <a
                                    data-toggle="sidebar"
                                    className="nav-link nav-link-lg nav-link-md nav-link-sm sidebar"
                                    onClick={buttonSidebar}
                                >
                                    <i className="fas fa-bars text-white"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    data-toggle="search"
                                    className="nav-link nav-link-lg d-sm-none"
                                >
                                    <i className="fas fa-search"></i>
                                </a>
                            </li>
                        </ul>
                        <div className="search-element">
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                data-width="250"
                            />
                            <button className="btn" type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                            <div className="search-backdrop"></div>
                            <div className="search-result">
                                <div className="search-header">Histories</div>
                                <div className="search-item">
                                    <a href="#">How to hack NASA using CSS</a>
                                    <a href="#" className="search-close">
                                        <i className="fas fa-times"></i>
                                    </a>
                                </div>
                                <div className="search-item">
                                    <a href="#">Kodinger.com</a>
                                    <a href="#" className="search-close">
                                        <i className="fas fa-times"></i>
                                    </a>
                                </div>
                                <div className="search-item">
                                    <a href="#">#Stisla</a>
                                    <a href="#" className="search-close">
                                        <i className="fas fa-times"></i>
                                    </a>
                                </div>
                                <div className="search-header">Result</div>
                                <div className="search-item">
                                    <a href="#">
                                        <img
                                            className="mr-3 rounded"
                                            width="30"
                                            src="assets/img/products/product-3-50.png"
                                            alt="product"
                                        />
                                        oPhone S9 Limited Edition
                                    </a>
                                </div>
                                <div className="search-item">
                                    <a href="#">
                                        <img
                                            className="mr-3 rounded"
                                            width="30"
                                            src="assets/img/products/product-2-50.png"
                                            alt="product"
                                        />
                                        Drone X2 New Gen-7
                                    </a>
                                </div>
                                <div className="search-item">
                                    <a href="#">
                                        <img
                                            className="mr-3 rounded"
                                            width="30"
                                            src="assets/img/products/product-1-50.png"
                                            alt="product"
                                        />
                                        Headphone Blitz
                                    </a>
                                </div>
                                <div className="search-header">Projects</div>
                                <div className="search-item">
                                    <a href="#">
                                        <div className="search-icon bg-danger text-white mr-3">
                                            <i className="fas fa-code"></i>
                                        </div>
                                        Stisla Admin Template
                                    </a>
                                </div>
                                <div className="search-item">
                                    <a href="#">
                                        <div className="search-icon bg-primary text-white mr-3">
                                            <i className="fas fa-laptop"></i>
                                        </div>
                                        Create a new Homepage Design
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>
                    <ul className="navbar-nav navbar-right">
                        <li className="dropdown dropdown-list-toggle">
                            <a
                                href="#"
                                data-toggle="dropdown"
                                className="nav-link notification-toggle nav-link-lg beep"
                            >
                                <i className="far fa-bell"></i>
                            </a>
                            <div className="dropdown-menu dropdown-list dropdown-menu-right">
                                <div className="dropdown-header">
                                    Notifications
                                    <div className="float-right">
                                        <a href="#">Mark All As Read</a>
                                    </div>
                                </div>
                                <div className="dropdown-list-content dropdown-list-icons">
                                    <a href="#" className="dropdown-item">
                                        <div className="dropdown-item-icon bg-info text-white">
                                            <i className="fas fa-bell"></i>
                                        </div>
                                        <div className="dropdown-item-desc">
                                            Welcome to Stisla template!
                                            <div className="time">
                                                Yesterday
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="dropdown-footer text-center">
                                    <a href="#">
                                        View All{" "}
                                        <i className="fas fa-chevron-right"></i>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown">
                            <a
                                href="#"
                                data-toggle="dropdown"
                                className="nav-link dropdown-toggle nav-link-lg nav-link-user"
                            >
                                <img
                                    alt="image"
                                    src="assets/img/avatar/avatar-1.png"
                                    className="rounded-circle mr-1"
                                />
                                <div className="d-sm-none d-lg-inline-block">
                                    {auth.user.name}
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="dropdown-title">
                                    Logged in 5 min ago
                                </div>
                                <a
                                    href="features-profile.html"
                                    className="dropdown-item has-icon"
                                >
                                    <i className="far fa-user"></i> Profile
                                </a>
                                <a
                                    href="features-activities.html"
                                    className="dropdown-item has-icon"
                                >
                                    <i className="fas fa-bolt"></i> Activities
                                </a>
                                <a
                                    href="features-settings.html"
                                    className="dropdown-item has-icon"
                                >
                                    <i className="fas fa-cog"></i> Settings
                                </a>
                                <div className="dropdown-divider"></div>

                                <a
                                    href="#"
                                    className="dropdown-item has-icon text-danger"
                                    onClick={handleLogout}
                                >
                                    <i className="fas fa-sign-out-alt"></i>{" "}
                                    Logout
                                </a>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className="main-sidebar sidebar-style-2">
                    <aside id="sidebar-wrapper">
                        <div className="sidebar-brand">
                            <a>Inventory</a>
                        </div>
                        <div className="sidebar-brand sidebar-brand-sm">
                            <a href="index.html">IA</a>
                        </div>
                        <ul className="sidebar-menu">
                            <li className="menu-header">Dashboard</li>
                            <li
                                className={url === "/dashboard" ? "active" : ""}
                            >
                                <a className="nav-link" href="/dashboard">
                                    <i className="fas fa-fire"></i>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li className="menu-header">Data Master</li>
                            <li className={url === "/user" ? "active" : ""}>
                                <a className="nav-link" href="/user">
                                    <i className="fas fa-user-tag"></i>{" "}
                                    <span>User</span>
                                </a>
                            </li>
                            <li className={url === "/customer" ? "active" : ""}>
                                <a className="nav-link" href="/customer">
                                    <i className="fas fa-user"></i>{" "}
                                    <span>Customer</span>
                                </a>
                            </li>
                            <li className={url === "/supplier" ? "active" : ""}>
                                <a className="nav-link" href="/supplier">
                                    <i className="fas fa-parachute-box"></i>{" "}
                                    <span>Supplier</span>
                                </a>
                            </li>
                            <li className={url === "/produk" ? "active" : ""}>
                                <a href="/produk" className="nav-link">
                                    <i className="fas fa-th"></i>{" "}
                                    <span>Produk</span>
                                </a>
                            </li>
                            <li className={url === "/kategori" ? "active" : ""}>
                                <a href="/kategori" className="nav-link">
                                    <i className="fas fa-th"></i>{" "}
                                    <span>Kategori</span>
                                </a>
                            </li>
                            <li className={url === "/stok" ? "active" : ""}>
                                <a href="/stok" className="nav-link">
                                    <i className="fas fa-th"></i>{" "}
                                    <span>Stok</span>
                                </a>
                            </li>
                            <li className={url === "/satuan" ? "active" : ""}>
                                <a href="/satuan" className="nav-link">
                                    <i className="fas fa-th"></i>{" "}
                                    <span>Satuan</span>
                                </a>
                            </li>
                            <li className="dropdown">
                                <a
                                    href="#"
                                    className="nav-link has-dropdown"
                                    data-toggle="dropdown"
                                >
                                    <i className="fas fa-columns"></i>{" "}
                                    <span>Pembelian</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link
                                            className="nav-link"
                                            href="/pembelian"
                                        >
                                            Data Pembelian
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="nav-link"
                                            href="/approve-pembelian"
                                        >
                                            Approve Pembelian
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/laporan-pembelian"
                                            className="nav-link"
                                        >
                                            Laporan Pembelian
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="dropdown">
                                <a
                                    href="#"
                                    className="nav-link has-dropdown"
                                    data-toggle="dropdown"
                                >
                                    <i className="fas fa-columns"></i>{" "}
                                    <span>Penjualan</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link
                                            className="nav-link"
                                            href="/penjualan"
                                        >
                                            Data Penjualan
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="nav-link"
                                            href="/approve-penjualan"
                                        >
                                            Approve Penjualan
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/laporan-pembelian"
                                            className="nav-link"
                                        >
                                            Laporan Pembelian
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* <li className="dropdown dropdown-menu-sidebar">
                                <a
                                    className="nav-link has-dropdown"
                                    data-toggle="dropdown"
                                >
                                    <i className="fas fa-columns"></i>{" "}
                                    <span>Pembelian Produk</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a
                                            href="/pembelian"
                                            className="nav-link"
                                        >
                                            Pembelian
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="nav-link"
                                            href="/approve-pembelian"
                                        >
                                            Approve Pembelian
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/laporan-pembelian"
                                            className="nav-link"
                                        >
                                            Laporan Pembelian
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown dropdown-menu-sidebar">
                                <a
                                    className="nav-link has-dropdown"
                                    data-toggle="dropdown"
                                >
                                    <i className="fas fa-columns"></i>{" "}
                                    <span>Penjualan Produk</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a
                                            href="/penjualan"
                                            className="nav-link"
                                        >
                                            Penjualan
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="nav-link"
                                            href="/approve-penjualan"
                                        >
                                            Approve Penjualan
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/laporan-penjualan"
                                            className="nav-link"
                                        >
                                            Laporan Penjualan
                                        </a>
                                    </li>
                                </ul>
                            </li> */}
                        </ul>
                    </aside>
                </div>

                {/* <!-- Main Content --> */}
                <div className="main-content">{children}</div>
                <footer className="main-footer">
                    <div className="footer-left">
                        Copyright &copy; 2018 <div className="bullet"></div>{" "}
                        Design By{" "}
                        <a href="https://nauval.in/">Muhamad Nauval Azhar</a>
                    </div>
                    <div className="footer-right"></div>
                </footer>
                {/* </div>{" "} */}
            </div>
        </>
    );
};

export default Layout;
