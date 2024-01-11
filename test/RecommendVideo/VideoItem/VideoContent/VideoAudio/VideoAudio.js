import { useEffect, useRef, useSate } from 'react'
import classNames from "classnames/bind";
import styles from './VideoAudio.module.scss'
import ActionBtn from "./ActionBtn";
import { faCommentDots, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import MenuItem from './MenuItem'
const cx = classNames.bind(styles);

function VideoAudio({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <video
                    className={cx('audio')}
                    controls
                    src={data.file_url}
                >
                </video>
            </div>
            <div className={cx('actions')}>
                <ActionBtn like icon={faHeart} actionCount={data.likes_count}></ActionBtn>
                <ActionBtn comment icon={faCommentDots} actionCount={data.comments_count}></ActionBtn>
                <MenuItem>
                    <ActionBtn share icon={faShare} actionCount={data.share_count}></ActionBtn>
                </MenuItem>
            </div>
        </div>
    );
}

export default VideoAudio;