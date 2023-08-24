import Image from "next/image";
import TopPageBannerImg from "statics/images/top-page-banner.png";

export default function TopPageBanner() {
  return (
    <section className="flex items-center px-20 mt-20 mb-20">
      <div className="w-1/2">
        <h1 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
          Far from face <br /> but not from heart
        </h1>
        <p className="block mt-6 text-neutral-500 dark:text-neutral-400 pr-20">
          Let stay at home and share with everyone the most beautiful stories in your hometown 🎈
        </p>
        <div className="mt-8"></div>
        <div className="mt-12"></div>
      </div>
      <div className="flex-grow">
        <Image className="w-full" src={TopPageBannerImg} alt="top-page-banner" />
      </div>
    </section>
  );
}
