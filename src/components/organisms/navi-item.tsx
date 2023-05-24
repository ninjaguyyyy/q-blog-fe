import React from 'react';
import { NaviItem as NaviItemType } from 'models/navi'; 
import { NAVIGATION_ITEMS } from 'constants/navi-items';
import NavigationItem from 'components/molecules/navigation';

export default function NaviComponent() { 
  return (
    <div>
      {NAVIGATION_ITEMS.map((item: NaviItemType, index: number) => (
        <NavigationItem key={index} item={item}  />
      ))}
    </div>
  );
}
