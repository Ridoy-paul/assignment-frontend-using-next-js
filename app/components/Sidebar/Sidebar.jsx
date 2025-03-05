import Link from "next/link";
import { routes } from "../Link";

export default function Sidebar() {
    return (
        <nav id="sidebar" className="sidebar js-sidebar">
            <div className="sidebar-content js-simplebar">
            <Link className="sidebar-brand" href={routes.home}>
                <span className="align-middle">AdminKit</span>
            </Link>
            <ul className="sidebar-nav">
                <li className="sidebar-item">
                    <Link className="sidebar-link" href={routes.home}>
                        <i className="align-middle" data-feather="sliders" />
                        <span className="align-middle">Home</span>
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link className="sidebar-link" href={routes.user.dashboard}>
                        <i className="align-middle" data-feather="user" />
                        <span className="align-middle">Dashboard</span>
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link className="sidebar-link" href={routes.user.add_hotel}>
                        <i className="align-middle" data-feather="user" />
                        <span className="align-middle">Add Hotel</span>
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link className="sidebar-link" href={routes.user.all_hotel}>
                        <i className="align-middle" data-feather="user" />
                        <span className="align-middle">Hotel List</span>
                    </Link>
                </li>
                
                
            </ul>
            </div>
        </nav>
    );
  }
  