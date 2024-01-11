import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from './BoxProfile.module.scss'
import { Wrapper as PopperWrapper } from "~/components/Popper";
import Avatar from "../Avatar";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function BoxProfile({ children, offset = [-8, 4], data: user }) {
    const renderBoxProfile = () => {
        return (
            <PopperWrapper>
                <div className={cx('wrapper')}>
                    <div className={cx('heading')}>
                        <Avatar src={user.avatar} small></Avatar>
                        <div className={cx(('follow-btn'))}>
                            <Button outline>Follow</Button>
                        </div>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('infor')}>
                            <h3 className={cx('username')}>
                                {user.nickname}
                                {user.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>}
                            </h3>
                            <h4 className={cx('name')}>
                                {`${user.first_name} ${user.last_name}`}
                            </h4>
                        </div>
                    </div>
                    <div className={cx('statsUser')}>
                        <span className={cx('statsText')}>{user.followers_count}</span>
                        <span className={cx('statsDesc')}>Followers</span>
                        <span className={cx('statsText')}>{user.likes_count}</span>
                        <span className={cx('statsDesc')}>Likes</span>
                    </div>
                    <div className={cx('footer')}>
                        <p className={cx('description')}>
                            {user.bio}
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
                render={renderBoxProfile}
                placement='bottom-start'
                offset={offset}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default BoxProfile;