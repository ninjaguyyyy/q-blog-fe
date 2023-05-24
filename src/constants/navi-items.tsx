import React from 'react';
import { DatabaseOutlined, HomeOutlined } from '@ant-design/icons';
import { NaviItem } from 'models/navi';

export const NAVIGATION_ITEMS: NaviItem[] = [
  {
    title: 'Dashboard',
    subs: [
      {
        title: 'Home',
        link: '/home',
        icon: <HomeOutlined />,
      },
      {
        title: 'Database',
        link: '/database',
        icon: <DatabaseOutlined />,
      },
    ],
  },
];
