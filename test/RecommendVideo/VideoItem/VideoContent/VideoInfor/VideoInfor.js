import { forwardRef } from 'react'
import { faCheckCircle, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "~/components/Button";
import styles from './VideoInfor.module.scss'
const cx = classNames.bind(styles);
const VideoInfor = forwardRef(({ className, data }, ref) => {
    return (
        <div ref={ref}
            className={cx('wrapper', className)}>
            <div className={cx('content')}>
                <div className={cx('infor')}>
                    <h3 className={cx('username')}>
                        <span >{data.user.nickname}</span>
                        {data.user.tick && <FontAwesomeIcon className={cx('user-icon')} icon={faCheckCircle}></FontAwesomeIcon>}
                    </h3>
                    <h4 className={cx('name')}>
                        {`${data.user.first_name} ${data.user.last_name}`}
                    </h4>
                </div>
                <Button small outline className={cx('follow-btn')}>Follow</Button>
                <div className={cx('description')}>
                    <a href="/" className={cx('tags')}>#xuhuong</a> {data.description}
                </div>
                <a href="/" className={cx('music-infor')}>
                    <FontAwesomeIcon className={cx('music-icon')} icon={faMusic}></FontAwesomeIcon>
                    <span className={cx('music-name')}>Kỳ Vọng Sai Lầm (MK Remix) [Short Version] - Exclusive Music & Tăng Phúc & Nguyễn Đình Vũ & Yuno Bigboi</span>
                </a>
            </div>
        </div>
    );
})

export default VideoInfor;