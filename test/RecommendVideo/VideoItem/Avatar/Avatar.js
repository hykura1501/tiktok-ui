import { forwardRef } from 'react'
import Image from "~/components/Image";
import classNames from "classnames/bind";
import styles from './Avatar.module.scss'
const cx = classNames.bind(styles);
const Avatar = forwardRef(({ small, medium, src }, ref) => {
    return (
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
    );
})

export default Avatar;