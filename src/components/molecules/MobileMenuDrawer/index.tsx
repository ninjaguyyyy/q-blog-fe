import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Drawer, Space } from 'antd';

import { useState } from 'react';

export default function MobileMenuDrawer() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const openDrawer = () => {
    setIsOpen(true);
  };

  return (
    <>
      <MenuOutlined className="xsup:hidden" onClick={openDrawer} />
      <Drawer
        placement={'left'}
        closable={false}
        onClose={handleClose}
        open={isOpen}
        extra={
          <Space className="w-[30px] h-[30px] flex justify-end items-start">
            <CloseOutlined />
          </Space>
        }
      >
        <div>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </div>
      </Drawer>
    </>
  );
}
