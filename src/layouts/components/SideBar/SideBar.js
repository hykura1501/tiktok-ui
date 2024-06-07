import classNames from "classnames/bind";
import { useState, useEffect } from 'react'
import style from './SideBar.module.scss'
import Menu, { MenuItem } from "./Menu";
import SuggestedAccounts from "./SuggestedAccounts";
import {
    HomeIcon, HomeActiveIcon,
    UserGroupIcon, UserGroupActiveIcon,
    LiveIcon, LiveActiveIcon,
} from "~/components/Icons";
import config from "~/config";
import *as userService from '~/services/userService'
// import *as followingService from '~/services/followingService'
const cx = classNames.bind(style);
const INIT_PAGE = 1;
const PER_PAGE = 5;


function SideBar() {

    //ApiSuggested

    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [isSeeAll, setIsSeeAll] = useState(false);
    const [page, setPage] = useState(INIT_PAGE);
    useEffect(() => {
        userService
            .getSuggested({ page, perPage: PER_PAGE })
            .then(data => {
                if (isSeeAll) {
                    setSuggestedUsers(prevUsers => [...prevUsers, ...data]);
                } else {
                    setSuggestedUsers(data);
                }
            })
            .catch(error => console.log(error))
    }, [page, isSeeAll])
    const handleViewChange = () => {
        if (isSeeAll) {
            setPage(page - 1);
        } else {
            setPage(page + 1);
        }
        setIsSeeAll(!isSeeAll);
    }


    //ApiFollowing

    // const [userFollowing, setUserFollowing] = useState([])

    // useEffect(() => {
    //     followingService
    //         .getFollowing({ page: 1 })
    //         .then(data => {
    //             setUserFollowing(data)
    //         })
    //     // fetch()
    // }, [])

    return (
        <aside className={cx('wrapper')}>
            <Menu className={'menu-list'}>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={{
                        default: <HomeIcon />,
                        active: <HomeActiveIcon />,
                    }}
                >
                </MenuItem>
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={{
                        default: <UserGroupIcon />,
                        active: <UserGroupActiveIcon />,
                    }}
                >
                </MenuItem>
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={{
                        default: <LiveIcon />,
                        active: <LiveActiveIcon />,
                    }}
                >
                </MenuItem>
            </Menu>
            <SuggestedAccounts isSeeAll={isSeeAll} onViewChange={handleViewChange} data={suggestedUsers} label='Suggested Accounts' title='See all' />
            {/* <SuggestedAccounts data={userFollowing} label='Following accounts' title='See more' /> */}
        </aside>
    )
}

export default SideBar;