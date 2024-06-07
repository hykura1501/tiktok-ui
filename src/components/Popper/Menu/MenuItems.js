import PropTypes from 'prop-types';
import Button from "~/components/Button";
import classNames from "classnames/bind";
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

function MenuItems({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    })
    return (
        <Button onClick={onClick} className={classes} icon={data.icon} to={data.to} > {data.title}</Button >
    );
}

MenuItems.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
}

export default MenuItems;