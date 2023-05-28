import { BellOutlined, SearchOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import React, { useState } from 'react';
import { Button, Menu, Form, Input } from 'antd';
import { MdOutlineLightMode } from 'react-icons/md';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import classes from './index.module.scss';

type MenuItem = Required<MenuProps>['items'][number];

const MainNavigation = () => {
  const { data: session } = useSession();
  const [form] = Form.useForm();
  const [current, setCurrent] = useState('1');


  const suffix = (
    <SearchOutlined
      style={{
        fontSize: 30,
        color: '#1677ff',
      }}
    />
  );

  const onClick = (e: any) => {
    setCurrent(e.key);
    console.log('aa', e);
  };


  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    children?: MenuItem[],
    theme?: 'light' | 'dark'
  ): MenuItem {
    return {
      key,
      children,
      label,
      theme,
    } as MenuItem;
  }




  const items: MenuItem[] = [
    getItem('Home', '1', [
      getItem('Option 1', '2', [getItem('Discover')]),
      getItem('Option 2', '3'),
      getItem('Option 3', '4'),
    ]),
    getItem('Discover'),
    getItem('How it word')
  ];

  return (
    <header className={classes.header}>
      <a>Logo</a>
      <Form form={form} className="flex flex-row" style={{ padding: 50 }}>
        <Input placeholder="Search items" suffix={suffix} style={{ borderRadius: 40, width: 300, height: 42 }} />
      </Form>
      <div>
        <Menu items={items} mode="horizontal" onClick={onClick} selectedKeys={[current]}/>
      </div>
      <MdOutlineLightMode className="text-[30px] hover:bg-[#edeef0] cursor-pointer" />
      <BellOutlined className="text-[30px] mx-5 hover:bg-[#edeef0] cursor-pointer" />
      <button className={classes['custom-button']}>Create</button>
      <div>{session ? <Button onClick={() => signOut()}>Logout</Button> : <Link href="/sign-in">Login</Link>}</div>
    </header>
  );
};

export default MainNavigation;
