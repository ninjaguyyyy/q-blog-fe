'use client';

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

export default function Loading() {
  return <Spin indicator={antIcon} className="flex justify-center my-16" />;
}
