import PropTypes from 'prop-types';
import styles from "./SuggestedAccounts.module.scss"
import classNames from "classnames/bind";
import AccountItem from './AccountItem';
const cx = classNames.bind(styles);
function SuggestedAccounts({ label, title, data = [], onViewChange, isSeeAll }) {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('label')}>{label}</h4>
            {data.map((user) => {
                return (
                    <AccountItem data={user} key={user.id}>
                    </AccountItem>
                )
            })}
            {!isSeeAll ? (
                <p className={cx('title')} onClick={onViewChange}>{title}</p>
            ) : (
                <p className={cx('title')} onClick={onViewChange}>See less</p>
            )
            }

        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string,
    data: PropTypes.array,
}

export default SuggestedAccounts;