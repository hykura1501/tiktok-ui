import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss"
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function AccountPreview({ data }) {
    return (
        <div className={cx('preview')}>
            <div className={cx('heading')}>
                <Link to={`@${data.nickname}`}>
                    <Image
                        className={cx('avatar')}
                        src={data.avatar}
                        alt={data.nickname}
                    >

                    </Image>
                </Link>
                <Button primary className={cx('follow-btn')}>Follow</Button>
            </div>
            <div className={cx('infor')}>
                <h4 className={cx('username')}>
                    <span>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>}
                </h4>
                <span className={cx('name')}>{`${data.first_name} ${data.last_name}`}</span>
            </div>
            <div className={cx('footer')}>
                <span className={cx('statsText')}>{data.followers_count}</span>
                <span className={cx('statsDesc')}>Followers</span>
                <span className={cx('statsText')}>{data.likes_count}</span>
                <span className={cx('statsDesc')}>Likes</span>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object
}

export default AccountPreview;