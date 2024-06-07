import classNames from "classnames/bind";
import styles from './VideoItem.module.scss'
import Avatar from "./Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCommentDots, faHeart, faMusic, faPause, faPlay, faShare, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Button/Button";
import ActionBtn from "./ActionBtn";
import MenuItem from "./ActionBtn/MenuItem";
import ViewProfile from './ViewProfile'
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function VideoItem({ data = [] }) {
    const [playing, setPlaying] = useState(false);
    const [playIcon, setPlayIcon] = useState(false);
    const [showControls, setShowControls] = useState(false);
    const [range, setRange] = useState(50);
    const videoRef = useRef();
    const handlePlay = () => {
        setPlayIcon(!playIcon);
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
            setShowControls(true);
        } else {
            videoRef.current.play();
            setPlaying(true);
            setShowControls(false);
        }
    }

    const handleRange = (e) => {
        setRange(e.target.value)
        // console.log(e.target.value);
        videoRef.current.volume = (range / 100);
    }

    return (
        <div className={cx('wrapper')}>
            <ViewProfile data={data.user}>
                <Avatar to={data.user.nickname} src={data.user.avatar} data={data.user} medium></Avatar>
            </ViewProfile>
            <div className={cx('content')}>
                <div className={cx('text-infor')}>
                    <Link
                        to={`/@/${data.user.nickname}`}
                    >
                        <div className={cx('infor')}>
                            <h3 className={cx('username')}>
                                <span >{data.user.nickname}</span>
                                {data.user.tick && <FontAwesomeIcon className={cx('user-icon')} icon={faCheckCircle}></FontAwesomeIcon>}
                            </h3>
                            <h4 className={cx('name')}>
                                {`${data.user.first_name} ${data.user.last_name}`}
                            </h4>
                        </div>
                    </Link>
                    <Button small outline className={cx('follow-btn')}>Follow</Button>
                    <div className={cx('description')}>
                        <a href="/" className={cx('tags')}>#xuhuong</a> {data.description}
                    </div>
                    <a href="/" className={cx('music-infor')}>
                        <FontAwesomeIcon className={cx('music-icon')} icon={faMusic}></FontAwesomeIcon>
                        <span className={cx('music-name')}>Kỳ Vọng Sai Lầm (MK Remix) [Short Version] - Exclusive Music & Tăng Phúc & Nguyễn Đình Vũ & Yuno Bigboi</span>
                    </a>
                </div>
                <div className={cx('video-player')}>
                    <div className={cx('video-content')}>
                        <video
                            autoPlay=""
                            loop
                            className={cx('video')}
                            src={data.file_url}
                            ref={videoRef}
                        >
                        </video>
                        <FontAwesomeIcon
                            className={cx('play-btn', { showControls })}
                            icon={playIcon ? faPause : faPlay}
                            onClick={handlePlay}
                        >
                        </FontAwesomeIcon>
                        <div className={cx('volume')}>
                            <FontAwesomeIcon
                                className={cx('volume-btn', { showControls })}
                                icon={faVolumeHigh}
                            >
                            </FontAwesomeIcon>
                            <input
                                value={range}
                                onChange={(e) => handleRange(e)}
                                className={cx('volume-range')}
                                type="range"
                                min='0'
                                max='100'
                                step='1'
                            >
                            </input>
                        </div>
                    </div>
                    <div className={cx('actions')}>
                        <ActionBtn like icon={faHeart} actionCount={data.likes_count}></ActionBtn>
                        <ActionBtn comment icon={faCommentDots} actionCount={data.comments_count}></ActionBtn>
                        <MenuItem>
                            <ActionBtn share icon={faShare} actionCount={data.shares_count}></ActionBtn>
                        </MenuItem>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default VideoItem;