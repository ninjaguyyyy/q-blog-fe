'use client';

import { Input } from 'antd';
import { ReactNode } from 'react';

type Props = {
  suffix?: ReactNode;
  className?: string;
  defaultValue?: string;
  onSearch?: (key: string) => void;
};

export default function InputField({
  className,
  suffix,
  defaultValue,
  onSearch,
}: Props) {
  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      onSearch && onSearch(event.target.value);
    }
  };

  return (
    <Input
      placeholder="Search items"
      suffix={suffix}
      style={{ borderRadius: 40, height: 42 }}
      className={`${className}`}
      onKeyDown={handleKeyDown}
      defaultValue={defaultValue}
    />
  );
}
