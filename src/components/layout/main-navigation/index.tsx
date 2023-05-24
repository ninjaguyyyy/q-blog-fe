import { BellOutlined, SearchOutlined } from '@ant-design/icons';
import { MdOutlineLightMode } from 'react-icons/md';
import { Button } from 'antd';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import Logo from './logo';
import classes from './index.module.scss';
import { useState } from 'react';

const MainNavigation = () => {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isItem1DropdownOpen, setIsItem1DropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleItem1Dropdown = () => {
    setIsItem1DropdownOpen(!isItem1DropdownOpen);
  };
  const handleListIconMouseEnter = () => {
    setIsItem1DropdownOpen(true);
  };

  return (
    <header className={classes.header}>
      <a className={classes.logo}>
        <Logo />
      </a>
      <button className={classes['btt-search']}>
        <form className={classes['search-form']}>
          <input placeholder="Search items" />
          <span className="pt-5">
            <SearchOutlined className="text-[30px]" />
          </span>
        </form>
      </button>
      <div className="mx-15">
        <div className={classes.dropdown} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <a className={classes['btt-home']}>Home</a>
          {isDropdownOpen && (
            <div className={classes.dropdownContent}>
              <ul className={classes.dropdownContentChild}>
                <li
                  onMouseEnter={toggleItem1Dropdown}
                  onMouseLeave={toggleItem1Dropdown}
                  className={isItem1DropdownOpen ? classes.active : ''}
                >
                  <a href="#">Item 1</a>
                  {isItem1DropdownOpen && (
                    <div className={classes['list-item']} onMouseEnter={handleListIconMouseEnter}>
                      <ul className={classes['list-item-child']}>
                        <li>
                          <a href="#">Icon 1</a>
                        </li>
                        <li>
                          <a href="#">Icon 2</a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li>
                  <a href="#">Item 2</a>
                </li>
                <li>
                  <a href="#">Item 3</a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className={classes.dropdown}>
          <a className={classes['btt-home']}>Discover</a>
          <div className={classes.dropdownContent}></div>
        </div>
        <a className={classes['btt-home']}>How it works</a>
        <span className="border-r-2 mx-5"></span>
      </div>
      <MdOutlineLightMode className="text-[30px] mx-5 hover:bg-[#edeef0] cursor-pointer" />
      <BellOutlined className="text-[30px] mx-5 hover:bg-[#edeef0] cursor-pointer" />
      <button className={classes['custom-button']}>Create</button>
      <div>{session ? <Button onClick={() => signOut()}>Logout</Button> : <Link href="/sign-in">Login</Link>}</div>
      <img />
    </header>
  );
};

export default MainNavigation;
