import Image from 'next/image';
import BannerImg from 'statics/images/banner.jpeg';

export default function Banner() {
  return (
    <section className="h-[450px] w-full px-2 mb-8 mt-8">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="bg-black bg-opacity-30 absolute top-0 left-0 right-0 bottom-0 z-10 rounded-[50px]"></div>
        <Image
          alt="banner"
          src={BannerImg}
          fill
          objectFit="cover"
          className="rounded-[44px]"
        />
        <h1 className="relative z-50 text-white text-6xl font-semibold">
          IT Technical Sharing
        </h1>
      </div>
    </section>
  );
}
