interface ErrorProps {
  message: string;
  className?: string;
}

export default function Error(props: ErrorProps) {
  if (props.message) {
    return <div className={`${props.className} text-red-700 text-[13px] leading-[17px]`}>{props.message}</div>;
  } else {
    return null;
  }
}
