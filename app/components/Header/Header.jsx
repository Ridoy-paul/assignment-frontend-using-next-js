import Link from "next/link";

export default function Header() {
    return (
        <nav className="navbar navbar-expand navbar-light navbar-bg">
            {/* <a className="sidebar-toggle js-sidebar-toggle">
                <i className="hamburger align-self-center" />
            </a> */}
            <div className="navbar-collapse collapse">
                <ul className="navbar-nav navbar-align">
                    
                    <li class="nav-item mx-2">
                        <Link class="nav-link border rounded px-2" href="/login">Login</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link border rounded px-2" href="/register">Register</Link>
                    </li>

                    <li className="nav-item dropdown">
                        <a
                            className="nav-icon dropdown-toggle d-inline-block d-sm-none"
                            href="#"
                            data-bs-toggle="dropdown"
                        >
                            <i className="align-middle" data-feather="settings" />
                        </a>
                        <a
                            className="nav-link dropdown-toggle d-none d-sm-inline-block"
                            href="#"
                            data-bs-toggle="dropdown"
                        >
                            <img
                                src="assets/img/no-profile.webp"
                                className="avatar img-fluid rounded me-1 rounded-pill"
                                alt="profile"
                            />
                            <span className="text-dark">Charles Hall</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="pages-profile.html">
                                <i className="align-middle me-1" data-feather="user" /> Profile
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
  }
  