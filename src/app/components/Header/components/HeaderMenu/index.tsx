'use client';

import { Menu, MenuProps } from 'antd';
import { ROUTE } from 'constants/route';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

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
  getItem('Posts', '1', [
    getItem('Topic 1', '2', [getItem('Nested Topic 1')]),
    getItem('Topic 2', '3'),
    getItem('Topic 3', '4'),
  ]),
  getItem('Contact'),
];

export default function HeaderMenu() {
  const router = useRouter();

  const [current, setCurrent] = useState('1');

  const onClick = (e: any) => {
    setCurrent(e.key);
    router.push(ROUTE.POSTS);
  };

  return (
    <Menu
      items={items}
      mode="horizontal"
      onClick={onClick}
      selectedKeys={[current]}
      className="min-w-[200px]"
    />
  );
}
