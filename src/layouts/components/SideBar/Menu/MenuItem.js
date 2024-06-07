import PropTypes from 'prop-types';
// import { useState } from 'react'
import styles from "./Menu.module.scss"
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
const cx = classNames.bind(styles);

function MenuItem({ title, to, icon }) {
    return (
        <NavLink to={to} className={(nav) => {
            return cx('menu-item', { active: nav.isActive })
        }}>
            {({ isActive }) => (
                <div className={cx('icon')}>
                    {isActive ? icon.active : icon.default}
                    <span className={cx('title')}>{title}</span>
                </div>
            )}
        </NavLink>

    );
}

MenuItem.proTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
}

export default MenuItem;