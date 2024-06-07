import PropTypes from 'prop-types';
import styles from "./SuggestedAccounts.module.scss"
import classNames from "classnames/bind";
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Tippy from '@tippyjs/react/headless';
import AccountPreview from './AccountPreview';
const cx = classNames.bind(styles);

function AccountItem({ data }) {

    const renderPreview = (props) => {
        return (
            <div tabIndex='-1' {...props}>
                <PopperWrapper>
                    <AccountPreview data={data}>
                    </AccountPreview>
                </PopperWrapper>
            </div>
        )
    }

    return (
        <div>
            <Tippy
                // visible
                interactive
                delay={[800, 0]}
                placement='bottom-start'
                render={renderPreview}
                offset={[-8, -2]}
            >
                <Link to={`/@/${data.nickname}`} className={cx('account-item')}>
                    <Image
                        className={cx('avatar')}
                        src={data.avatar}
                        alt={data.nickname}
                    >
                    </Image>
                    <div className={cx('infor')}>
                        <h4 className={cx('username')}>
                            <span>{data.nickname}</span>
                            {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>}
                        </h4>
                        <span className={cx('name')}>{`${data.first_name} ${data.last_name}`}</span>
                    </div>
                </Link >
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object,
}

export default AccountItem;