import VideoInfor from "./VideoInfor";
import VideoAudio from "./VideoAudio"
import classNames from "classnames/bind";
import styles from './VideoContent.module.scss'
const cx = classNames.bind(styles);

function VideoContent({ data }) {
    return (
        <div className={cx('wrapper')}>
            <VideoInfor data={data}></VideoInfor>
            <VideoAudio data={data}></VideoAudio>
        </div>
    );
}

export default VideoContent;