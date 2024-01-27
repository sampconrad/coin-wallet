import BannerImg from '/banner-img.svg';

function TextSlide() {
  return (
    <div className='pb-2 tracking-tight font-extrabold text-3xl md:text-4xl lg:text-nowrap [text-wrap:balance]  w-full text-center lg:text-left'>
      <span className='bg-clip-text text-transparent bg-gradient-to-r from-slate-400/60 to-50% to-slate-500 '>
        Track
      </span>{' '}
      <span className='inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden w-full'>
        <ul className='block animate-text-slide-5 text-center lg:text-left leading-tight [&_li]:block'>
          <li className='text-emerald-400'>PRICES</li>
          <li className='text-red-400'>VARIATION</li>
          <li className='text-fuchsia-400'>VOLUME</li>
          <li className='text-sky-300'>MARKET CAP</li>
          <li className='text-pink-500'>HISTORIC DATA</li>
          <li
            className='text-emerald-400'
            aria-hidden='true'>
            PRICES
          </li>
        </ul>
      </span>
    </div>
  );
}

export default function Heading() {
  return (
    <div className='flex flex-col-reverse lg:flex-row gap-x-10 gap-y-2 items-center mb-10 lg:mb-20'>
      <div className='w-full lg:w-1/2 flex flex-wrap flex-col'>
        <div className='flex-col text-center lg:text-left'>
          <h1 className='scroll-m-20 text-4xl font-extrabold tracking-normal lg:text-5xl -mb-3 text-slate-700 '>
            THE CRYPTO
          </h1>
          <h1 className='scroll-m-20 text-7xl font-extrabold tracking-tight lg:text-8xl bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 inline-block text-transparent bg-clip-text '>
            WALLET
          </h1>
        </div>
        <TextSlide />
        <p className='text-center justce lg:text-left text-sm lg:text-base text-muted-foreground  text-slate-400 '>
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
