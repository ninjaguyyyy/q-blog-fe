import { Button } from 'antd';
import { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  socialName: string;
  onClick: () => void;
};

export default function SocialLoginButton({ icon, socialName, onClick }: Props) {
  return (
    <Button
      type="primary"
      icon={icon}
      className="social bg-blue-light text-black flex items-center w-[450px] h-[40px] rounded-lg px-5"
      onClick={onClick}
    >
      <span className="text-center grow text-sm font-medium">Continue with {socialName}</span>
    </Button>
  );
}
