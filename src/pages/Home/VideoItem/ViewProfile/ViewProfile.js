import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from './ViewProfile.module.scss'
import { Wrapper as PopperWrapper } from "~/components/Popper";
import Avatar from "../Avatar";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function ViewProfile({ children, offset = [-8, 4], data = [] }) {
    const renderViewProfile = () => {
        return (
            <PopperWrapper>
                <div className={cx('wrapper')}>
                    <div className={cx('heading')}>
                        <Avatar
                            to={data.nickname}
                            src={data.avatar}
                            small
                        >
                        </Avatar>
                        <div className={cx(('follow-btn'))}>
                            <Button outline>Follow</Button>
                        </div>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('infor')}>
                            <h3 className={cx('username')}>
                                {data.nickname}
                                {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>}
                            </h3>
                            <h4 className={cx('name')}>
                                {`${data.first_name} ${data.last_name}`}
                            </h4>
                        </div>
                    </div>
                    <div className={cx('statsUser')}>
                        <span className={cx('statsText')}>{data.followers_count}</span>
                        <span className={cx('statsDesc')}>Followers</span>
                        <span className={cx('statsText')}>{data.likes_count}</span>
                        <span className={cx('statsDesc')}>Likes</span>
                    </div>
                    <div className={cx('footer')}>
                        <p className={cx('description')}>
                            {data.bio}
                        </p>
                    </div>
                </div>
            </PopperWrapper>
        )
    }
    return (
        <div>
            <Tippy
                // visible
                delay={[800, 0]}
                interactive
                render={renderViewProfile}
                placement='bottom-start'
                offset={offset}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default ViewProfile;