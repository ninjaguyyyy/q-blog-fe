'use client';
import Image from 'next/image';
import Avatar from 'statics/images/avatar.jpg';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { useState, useEffect } from 'react';

export default function ListComment() {
  const [clicked, setClicked] = useState(false);
  const [count, setCount] = useState(96);
  useEffect(() => {
    if (clicked) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  }, [clicked]);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="flex pt-4 justify-center">
      <div className="">
        <Image
          src={Avatar}
          alt="avatar"
          width={24}
          height={24}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col border-2 border-color mx-4 pb-4">
        <div className="flex-grow mx-4 pt-2">
          <div className="flex items-center">
            <span className="text-xs block mr-3 ml-2 text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
              Chi Nguyen
            </span>
            <span className="text-xs float-right text-neutral-500 dark:text-neutral-400 font-normal">
              May 20, 2023
            </span>
          </div>
          <div className="mt-2 block text-base text-neutral-900 ">
            Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.
            Morbi ut odio.{' '}
          </div>
        </div>
        <div className="w-[80px] flex flex-row  pt-4 mx-4">
          <button className="bg-neutral-100 hover:bg-rose-50  w-full h-8 rounded-full" onClick={handleClick}>
            {clicked ? (
              <HeartFilled style={{ color: 'red' }} />
            ) : (
              <HeartOutlined style={{ color: 'gray' }} />
            )}{' '}
            {count}
          </button>
        </div>
      </div>
    </div>
  );
}
