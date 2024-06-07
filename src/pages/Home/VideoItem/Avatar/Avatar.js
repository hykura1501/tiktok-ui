import { forwardRef } from 'react'
import Image from "~/components/Image";
import classNames from "classnames/bind";
import styles from './Avatar.module.scss'
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
const Avatar = forwardRef(({ small, medium, src, to }, ref) => {
    return (
        <Link
            to={`/@/${to}`}
        >
            <Image
                ref={ref}
                src={src}
                alt="avatar"
                className={cx('avatar', {
                    small,
                    medium
                })}
            >
            </Image>
        </Link>
    );
})

export default Avatar;