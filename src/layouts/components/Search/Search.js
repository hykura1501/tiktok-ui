import { useState, useEffect, useRef } from 'react'
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountsItem from '~/components/AccountsItem';
import { SearchIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark, faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss'
import { useDebounce } from '~/hooks';
import *as searchService from '~/services/searchService';
const cx = classNames.bind(styles)

function Search() {

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showSearchResult, setShowSearchResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debounceValue = useDebounce(searchValue, 600);


    useEffect(() => {
        if (!debounceValue.trim()) {
            return;
        }
        const fetchApi = async () => {
            setLoading(true)
            const result = await searchService.search(debounceValue);
            setSearchResult(result);
            setLoading(false)
        }
        fetchApi()
    }, [debounceValue]);

    // Handle 
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([])
        inputRef.current.focus();
    }

    const handleHideSearchResult = () => {
        setShowSearchResult(false);
    }
    return (
        //Using a wrapper <div> or <span> tag around the reference element solves 
        //this by creating a new parentNode context. 
        <div>
            <HeadlessTippy
                interactive
                visible={showSearchResult && searchResult.length > 0}
                render={attrs => (
                    <PopperWrapper>
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <h3 className={cx('search-title')}>
                                Accounts
                            </h3>
                            {searchResult.map((user) => {
                                return (
                                    <AccountsItem
                                        key={user.id}
                                        data={user}
                                    >
                                    </AccountsItem>
                                )
                            })}
                        </div>
                    </PopperWrapper>
                )}
                onClickOutside={handleHideSearchResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder='Search accounts and videos'
                        spellCheck={false}
                        onChange={(e) => {
                            if (e.target.value[0] !== ' ') {
                                setSearchValue(e.target.value);
                            }
                        }}
                        onFocus={() => setShowSearchResult(true)}
                    >
                    </input>
                    {(!!searchValue && !loading) && <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </button>}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>}

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon></SearchIcon>
                    </button>
                </div>
            </HeadlessTippy >
        </div>
    );
}

export default Search;