import Link from "next/link";

export default function Sidebar() {
    return (
        <nav id="sidebar" className="sidebar js-sidebar">
            <div className="sidebar-content js-simplebar">
            <Link className="sidebar-brand" href="/">
                <span className="align-middle">AdminKit</span>
            </Link>
            <ul className="sidebar-nav">
                <li className="sidebar-header">Pages</li>
                <li className="sidebar-item">
                <a className="sidebar-link" href="index.html">
                    <i className="align-middle" data-feather="sliders" />{" "}
                    <span className="align-middle">Dashboard</span>
                </a>
                </li>
                <li className="sidebar-item">
                <a className="sidebar-link" href="pages-profile.html">
                    <i className="align-middle" data-feather="user" />{" "}
                    <span className="align-middle">Profile</span>
                </a>
                </li>
            </ul>
            </div>
        </nav>
    );
  }
  