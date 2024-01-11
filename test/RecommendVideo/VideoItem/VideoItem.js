// import classNames from "classnames/bind";
// import styles from './VideoItem.module.scss'
// const cx = classNames.bind(styles);
function VideoItem({ children, className }) {
    return (
        <div className={className}>{children}</div>
    );
}

export default VideoItem;