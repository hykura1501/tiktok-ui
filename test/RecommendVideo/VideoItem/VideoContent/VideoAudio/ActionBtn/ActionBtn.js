import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useState } from "react";
import styles from './ActionBtn.module.scss'
import { forwardRef } from 'react'
const cx = classNames.bind(styles);
const ActionBtn = forwardRef(({ icon, actionCount, like }, ref) => {

    const [active, setActive] = useState(false);

    const handleActive = () => {
        if (like) {
            setActive(!active);
        }
    }

    return (
        <div className={cx('wrapper')} ref={ref}>
            <button className={cx('button')}
                onClick={handleActive}
            >
                <FontAwesomeIcon className={cx('icon', { active })} icon={icon}></FontAwesomeIcon>
            </button>
            <strong className={cx('action-count')}>{actionCount}</strong>
        </div >
    );
})

export default ActionBtn;