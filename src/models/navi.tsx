import React from 'react';
export interface NaviItem {
  title: string;
  subs: SubNaviItem[];
}

export interface SubNaviItem {
  title: string;
  link: string;
  icon: React.ReactNode;
}
