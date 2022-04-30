import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import './SideBar.css';

const SideBar: React.FC = () => {
    const [active, setActive] = useState<string>('home');
    const clickHandler = (e: any) => {
        switch (e.target.pathname as string) {
            case '/':
                setActive('home');
                break;
            case '/hospitals':
                setActive('hospitals');
                break;
            case '/vaccination':
                setActive('vaccination');
                break;
            case '/testing':
                setActive('testing');
                break;
            case '/news':
                setActive('news');
                break;
            case '/hoaxes':
                setActive('hoaxes');
                break;
            default:
                setActive('home');
                break;
        }
    };
    const activeState = (current: string) => active === current ? 'active' : '';

    return (
        <nav className="covid-menu">
            <ul>
                <li><Link onClick={(e) => clickHandler(e)} className={activeState('home')} to="/">Daily Update</Link></li>
                <li><Link onClick={(e) => clickHandler(e)} className={activeState('testing')} to="/testing">Testing</Link></li>
                <li><Link onClick={(e) => clickHandler(e)} className={activeState('vaccination')} to="/vaccination">Vaccination</Link></li>
                <li><Link onClick={(e) => clickHandler(e)} className={activeState('hospitals')} to="/hospitals">Hospitals</Link></li>
                <li><Link onClick={(e) => clickHandler(e)} className={activeState('news')} to="/news">News</Link></li>
            </ul>
        </nav>
    );
};

export default SideBar;