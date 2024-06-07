import classNames from "classnames/bind";
import styles from './Home.module.scss'
import VideoItem from "./VideoItem";
import *as videoService from "~/services/videoService";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);

function Home() {

    const [videos, setVideos] = useState([]);
    console.log(videos)
    useEffect(() => {
        videoService
            .getRecommendVideo({ type: 'for-you', page: 2 })
            .then((data) => {
                setVideos(data);
            })
    }, [])
    return (
        <div className={cx('home')}>
            <div className={cx('wrapper')}>
                {/* <VideoItem></VideoItem>
                <VideoItem></VideoItem>
                <VideoItem></VideoItem>
                <VideoItem></VideoItem> */}
                {videos.map((video) => {
                    return <VideoItem key={video.id} data={video}></VideoItem>
                })}
            </div>
        </div>
    );
}

export default Home;