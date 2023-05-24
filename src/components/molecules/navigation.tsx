import React from 'react';
import { NaviItem, SubNaviItem } from 'models/navi';
import Link from 'next/link';

interface NavigationItemProps {
  item: NaviItem;
}

export default function NavigationItem({ item }: NavigationItemProps) {
  const { title, subs } = item;

  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {subs.map((subItem: SubNaviItem, index: number) => (
          <li key={index}>
            <Link href={subItem.link}>{subItem.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
