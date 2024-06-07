import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Button.module.scss'

const cx = classNames.bind(styles)
function Button({
    className,
    to,
    href,
    children,
    text,
    primary,
    outline,
    small,
    large,
    onClick,
    icon,
    medium,
    ...passProps }) {
    let Comp = 'button'
    const props = {
        onClick,
        ...passProps
    }
    if (to) {
        Comp = Link
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }
    const classes = cx('wrapper', {
        text, primary, outline,
        small, large, medium
    }, className)
    return (
        <Comp {...props} className={classes}>
            {icon && <FontAwesomeIcon className={cx('icon')} icon={icon}></FontAwesomeIcon>}
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    text: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    onClick: PropTypes.func,
    icon: PropTypes.any,
}

export default Button;