import config from '~/config';
import classNames from 'classnames/bind';
import style from './Header.module.scss'
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical, faEarthAsia,
    faCircleQuestion, faKeyboard,
    faArrowRightFromBracket, faGear
} from '@fortawesome/free-solid-svg-icons';
import { faUser, faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { UploadIcon, MessagesIcon, MailBoxIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
const MENU_ITEMS = [
    {
        icon: faEarthAsia,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ]
        }
    },
    {
        icon: faCircleQuestion,
        title: 'Feedback and Help',
        to: '/feedback'
    },
    {
        icon: faKeyboard,
        title: 'Keyboard shortcuts'
    }

]

const cx = classNames.bind(style)
function Header() {

    const currentUser = true;

    const USER_MENU_ITEMS = [
        {
            icon: faUser,
            title: 'View profile',
            to: '/'
        },
        {
            icon: faCirclePlay,
            title: 'Get coins',
            to: '/'
        },
        {
            icon: faGear,
            title: 'Settings',
            to: '/'
        },
        ...MENU_ITEMS,
        {
            separate: true,
            icon: faArrowRightFromBracket,
            title: 'Log out',
            to: '/'
        },
    ]

    //Handle 
    const handleOnChange = (item) => {
        const menuType = item.type;
        switch (menuType) {
            case 'language':
                break;
            default:

        }
    }

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <Link to={config.routes.home} className={cx('logo')}>
                <img src={images.logo.default} alt="Tiktok"></img>
            </Link>
            <Search></Search>
            <div className={cx('actions')}>
                {currentUser ? (
                    <div className={cx('actions_')}>
                        <Tippy
                            offset={[0, 2]}
                            className='tippy-box'
                            content="Upload Video"
                            delay={[0, 50]}
                        >
                            <button className={cx('action-btn')}>
                                <UploadIcon></UploadIcon>
                            </button>
                        </Tippy>
                        <Tippy
                            offset={[0, 2]}
                            className='tippy-box'
                            content="Messages"
                            delay={[0, 50]}
                        >
                            <button className={cx('action-btn')}>
                                <MessagesIcon></MessagesIcon>
                            </button>
                        </Tippy>
                        <Tippy
                            offset={[0, 2]}
                            className='tippy-box'
                            content="Inbox"
                            delay={[0, 50]}
                        >
                            <button className={cx('action-btn', 'action-message')}>
                                <div>12</div>
                                <MailBoxIcon></MailBoxIcon>
                            </button>
                        </Tippy>
                    </div>
                ) : (
                    <>
                        <Button text icon={faPlus}>
                            Upload
                        </Button>
                        <Button primary>
                            Login
                        </Button>
                    </>
                )}
                <Menu items={currentUser ? USER_MENU_ITEMS : MENU_ITEMS} onChange={handleOnChange}>
                    {currentUser ? (
                        <Image
                            className={cx('user-avatar')}
                            alt="Nguyen Van A"
                            src='https://scontent.xx.fbcdn.net/v/t1.15752-9/336595151_1327228821469085_1895277577890850764_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=aee45a&_nc_ohc=Z5fmDjISC74AX8WImcv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSUjaqvzzHrmc_KM3-oRM1AsI_t3KfyO33IjKoszUy5-Q&oe=644270AA'
                        // fallback='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3e6a9671d5e3d9255d63667c1299eb52~c5_100x100.jpeg?x-expires=1679662800&x-signature=Pib9yrizpX%2FBiAlGFS3q%2F61YlzU%3D'
                        />
                    ) : (
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    )}
                </Menu>
            </div>
        </div >
    </header >
}

export default Header;