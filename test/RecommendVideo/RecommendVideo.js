import classNames from "classnames/bind";
import styles from './RecommendVideo.module.scss'
import Avatar from "./VideoItem/Avatar";
import VideoItem from "./VideoItem";
import VideoContent from "./VideoItem/VideoContent";
import BoxProfile from "./VideoItem/BoxProfile";
import *as videoService from '~/services/videoService'
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);
function RecommendVideo() {

    const [listVideo, setListVideo] = useState([]);

    useEffect(() => {
        videoService
            .getRecommendVideo({ type: 'for-you', page: 1 })
            .then(data => {
                setListVideo(data);
            })
            .catch((error) => console.log(error))
    }, [])
    return (
        <div>
            {listVideo.map((video) => {
                return (
                    <VideoItem key={video.id} className={cx('wrapper')}>
                        <BoxProfile data={video.user}>
                            <Avatar src={video.user.avatar} medium></Avatar>
                        </BoxProfile>
                        <VideoContent data={video} className={cx('video-infor')}>
                        </VideoContent>
                    </VideoItem>
                )
            })}
        </div>
    );
}

export default RecommendVideo;