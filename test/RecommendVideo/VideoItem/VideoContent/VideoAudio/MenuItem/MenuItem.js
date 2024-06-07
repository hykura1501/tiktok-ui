import classNames from "classnames/bind";
import styles from './MenuItem.module.scss'
import { Wrapper as PopperWrapper } from "~/components/Popper";
import Tippy from "@tippyjs/react/headless";
import ShareItem from "./ShareItem";
import {
    EmbedIcon, PlaneIcon, FacebookIcon, WhatsAppIcon, UrlIcon, TwitterIcon,
    LinkedIcon,
    RedditIcon,
    TelegramIcon,
    EmailIcon,
    LineIcon,
    PinterestIcon
} from "~/components/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const cx = classNames.bind(styles);

const SHARE_ITEMS = [
    {
        icon: <EmbedIcon></EmbedIcon>,
        title: "Embed"
    },
    {
        icon: <PlaneIcon></PlaneIcon>,
        title: "Send to friend"
    },
    {
        icon: <FacebookIcon></FacebookIcon>,
        title: "Share to Facebook"
    },
    {
        icon: <WhatsAppIcon></WhatsAppIcon>,
        title: "Share to WhatsApp"
    },
    {
        icon: <UrlIcon></UrlIcon>,
        title: "Copy link"
    },
]

function MenuItem({ children }) {

    const items = [
        {
            icon: <TwitterIcon></TwitterIcon>,
            title: "Share to Twitter"
        },
        {
            icon: <LinkedIcon></LinkedIcon>,
            title: "Share to Linked"
        },
        {
            icon: <RedditIcon></RedditIcon>,
            title: "Share to Reddit"
        },
        {
            icon: <TelegramIcon></TelegramIcon>,
            title: "Share to Telegram"
        },
        {
            icon: <EmailIcon></EmailIcon>,
            title: "Share to Email"
        },
        {
            icon: <LineIcon></LineIcon>,
            title: "Share to Line"
        },
        {
            icon: <PinterestIcon></PinterestIcon>,
            title: "Share to Pinterest"
        },
    ]

    const [isMore, setIsMore] = useState(false);
    const [moreItem, setMoreItem] = useState(SHARE_ITEMS);
    const [heightMenu, setHeightMenu] = useState(false)
    const handleSeeMore = () => {
        setMoreItem(prev => {
            const result = prev.concat(items);
            return result;
        })
        setIsMore(true);
        setHeightMenu(true)

    }

    const renderShareItem = () => {
        return (
            <PopperWrapper className={cx('wrapper', {
                heightMenu
            })}

            >
                <span className={cx('arrow')}></span>
                {moreItem.map((item, index) => {
                    return (
                        <ShareItem key={index} icon={item.icon} title={item.title}></ShareItem>
                    )
                })}
                {!isMore && (
                    <button className={cx('more')}
                        onClick={handleSeeMore}
                    >
                        <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                    </button>
                )}
            </PopperWrapper>
        )
    }

    return (
        <Tippy
            // visible
            interactive
            render={renderShareItem}
            placement='top-start'
            offset={[-22, -2]}
            delay={[0, 800]}
        >
            {children}
        </Tippy>
    );
}

export default MenuItem;