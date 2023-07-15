import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Drawer, Menu, Space } from 'antd';
import { FaFacebookSquare, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

import { useState } from 'react';
import styles from './index.module.scss';

export default function MobileMenuDrawer() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [current, setCurrent] = useState('1');

  const handleClose = () => {
    setIsOpen(false);
  };

  const openDrawer = () => {
    setIsOpen(true);
  };

  const items = [
    {
      key: 1,
      children: [
        { key: 'a', label: 'Option 1' },
        { key: 'b', label: 'Option 2' },
        { key: 'c', label: 'Option 3' },
      ],
      label: 'Home',
    },
    {
      key: 2,
      children: [{ key: 'd', children: [{}], label: 'Option 1' }],
      label: 'Home',
    },
  ];

  const onClick = (e: any) => {
    setCurrent(e.key);
    console.log('aa', e);
  };

  return (
    <>
      <MenuOutlined className="xsup:hidden" onClick={openDrawer} />
      <Drawer placement={'left'} closable={false} onClose={handleClose} open={isOpen} className={styles['header-drawer']}>
        <div>
          <div className="px-4">
            <div className="flex justify-between items-center">
              <p>Logo</p>
              <Space className="w-[30px] h-[30px] flex justify-end items-start">
                <CloseOutlined />
              </Space>
            </div>
            <p className="my-4">Discover the most outstanding articles in all topics of life. </p>
            <div className="flex gap-4">
              <FaFacebookSquare size={20} color="#3b5998" />
              <FaTwitter size={20} color="#1DA1F2" />
              <FaInstagram size={20} color="#d62976" />
              <FaYoutube size={22} color="#FF0000" />
            </div>
          </div>
          <hr className="h-[2px] my-6 border-none text-gray-500 bg-gray-200" />
          <div className="px-4">
            <Menu items={items} mode="inline" onClick={onClick} selectedKeys={[current]} />
          </div>
        </div>
      </Drawer>
    </>
  );
}
