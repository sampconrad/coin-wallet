import BannerImg from '/banner-img.svg';

export default function Heading() {
  return (
    <div className='flex flex-col-reverse lg:flex-row gap-x-10 gap-y-2 items-center mb-10 lg:mb-20'>
      <div className='w-full lg:w-1/2 flex flex-wrap flex-col gap-x-2'>
        <div className='flex-col text-center lg:text-left'>
          <h1 className='scroll-m-20 text-4xl font-extrabold tracking-normal lg:text-5xl -mb-3 text-slate-800'>
            THE CRYPTO
          </h1>
          <h1 className='scroll-m-20 text-7xl font-extrabold tracking-tight lg:text-8xl bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 inline-block text-transparent bg-clip-text'>
            WALLET
          </h1>
        </div>
        <div className='flex flex-wrap lg:flex-col justify-center gap-x-2'>
          <h2 className='scroll-m-20 pb-2 text-2xl font-extrabold tracking-tight first:mt-0 -mb-2 lg:text-5xl text-slate-700'>
            Tracking
          </h2>
          <h2 className='scroll-m-20 pb-2 text-2xl font-extrabold tracking-tight first:mt-0 lg:text-5xl text-emerald-400'>
            SIMPLIFIED
          </h2>
        </div>
        <p className='text-center lg:text-left text-sm lg:text-base text-muted-foreground mr-auto text-slate-400'>
          Get real-time prices, historical data, and more <br />
          for a comprehensive view of your digital assets.
        </p>
      </div>
      <img
        className='w-full lg:w-1/2 max-h-[150px] lg:max-h-[400px] animate-[bounce_4s_ease-in-out_infinite]'
        src={BannerImg}
        alt=''
      />
    </div>
  );
}
