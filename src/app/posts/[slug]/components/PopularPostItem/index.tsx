import Image from 'next/image';
import PostImg from 'statics/images/post-img.jpeg';
import Avatar from 'statics/images/avatar.jpg';

export default function PopularPostItem() {
  return (
    <div className="flex">
      <div className="flex-grow">
        <div className="flex items-center">
          <Image
            src={Avatar}
            alt="avatar"
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="text-xs block mr-3 ml-2 text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
            Chi Nguyen
          </span>
          <span className="text-xs float-right text-neutral-500 dark:text-neutral-400 font-normal">
            May 20, 2023
          </span>
        </div>
        <div className="mt-2 block text-base font-semibold text-neutral-900 dark:text-neutral-100">
          People who inspired us in 2019{' '}
        </div>
      </div>
      <div className="w-[80px]">
        <Image alt="post" src={PostImg} className="w-full" />
      </div>
    </div>
  );
}
