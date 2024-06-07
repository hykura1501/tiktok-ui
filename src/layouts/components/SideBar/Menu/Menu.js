import PropTypes from 'prop-types';
import styles from "./Menu.module.scss"
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function Menu({ children, className }) {
    return (
        <nav className={cx('wrapper', className)}>{children}</nav>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}
export default Menu;