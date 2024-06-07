import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react'
import images from '~/assets/images';
import classNames from 'classnames';
import styles from "./Image.module.scss"
const Image = forwardRef(({ alt, src, className,
    fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    }
    return (
        <img
            className={classNames(styles.wrapper, className)}
            alt={alt}
            src={fallback || src}
            ref={ref}
            {...props}
            onError={handleError}>
        </img>
    );
})

Image.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    fallback: PropTypes.string,
}

export default Image;