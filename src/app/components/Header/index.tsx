import styles from './index.module.scss';
import HeaderMenu from 'app/components/Header/components/HeaderMenu';
import { MdOutlineLightMode } from 'react-icons/md';
import { HiOutlineBell } from 'react-icons/hi';
import { FaSearch } from 'react-icons/fa';
import InputField from 'app/components/InputField';
import Image from 'next/image';
import Logo from 'statics/images/logo.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="flex items-center gap-16">
        <Image alt="logo" src={Logo} width={150} />
        <InputField
          suffix={<FaSearch className="text-base" />}
          className="w-[320px]"
        />
      </div>
      <div className="flex items-center gap-[200px]">
        <HeaderMenu />
        <div className="flex gap-4 items-center">
          <MdOutlineLightMode className="text-[30px] hover:bg-[#edeef0] cursor-pointer xs:hidden" />

          <HiOutlineBell className="text-[25px] hover:bg-[#edeef0] cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
