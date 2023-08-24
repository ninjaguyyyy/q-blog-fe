import { Badge, Button } from "antd";
import InputField from "components/InputField";
import Image from "next/image";
import SubscribeNewsletterImg from "statics/images/subcribe-newsletter.png";
import { FaArrowRight } from "react-icons/fa";

export default function SubscribeNewsletter() {
  return (
    <section className="flex items-center px-20 mt-20">
      <div className="w-2/5">
        <p className="font-semibold text-4xl">Join our newsletter 🎉</p>
        <p className="block mt-6 text-neutral-500 dark:text-neutral-400">Read and share new perspectives on just about any topic. Everyone’s welcome.</p>
        <div className="mt-8">
          <Badge
            count={"01"}
            color="#dbe9fe"
            text="Get more discount"
            style={{ color: "black" }}
            className="mb-4 flex items-center gap-2 font-medium text-neutral-700 dark:text-neutral-300 text-base"
          />
          <Badge
            count={"02"}
            color="#fee2e1"
            text="Get premium magazines"
            style={{ color: "black" }}
            className="flex items-center gap-2 font-medium text-neutral-700 dark:text-neutral-300 text-base"
          />
        </div>
        <div className="mt-12">
          <InputField className="pr-1 w-[380px]" suffix={<Button type="primary" shape="circle" icon={<FaArrowRight className="mt-1" />} />} />
        </div>
      </div>
      <div className="flex-grow">
        <Image className="w-full" src={SubscribeNewsletterImg} alt="newsletter" />
      </div>
    </section>
  );
}
