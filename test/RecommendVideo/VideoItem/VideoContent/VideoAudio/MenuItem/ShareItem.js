import classNames from "classnames/bind";
import styles from './MenuItem.module.scss'
const cx = classNames.bind(styles);
function ShareItem({ icon, title }) {
    return (
        <div className={cx('item')}>
            {icon}
            <span className={cx('title')}>{title}</span>
        </div>
    );
}

export default ShareItem;