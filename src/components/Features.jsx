import React from 'react';

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="uppercase md:text-6xl text-4xl">{title}</h1>
          {description && <p className="mt-3 max-w-64 text-lg">{description}</p>}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="text-5xl text-blue-50">STORY</p>
          <p className="max-w-md text-lg text-blue-100 opacity-50">
            <b>The Unknown Journey Continues... </b>
            Cloud and his comrades escape the city of Midgar in pursuit of the fallen hero, Sephiroth. As they travel across the world, they find themselves on a journey that will decide the fate of the planet.
          </p>
        </div>

        {/* <!-- Bento grid --> 
        - New Regions
        - New Songs 
        - Performance mode and 4k support
        - World intel
        - Quests
        - Mini games
        - Story Telling
        */}
        <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden md:h-[40vh] rounded-xl">
          <BentoCard
            src="/videos/world.mp4"
            // title={<>Regions</>}
            description={<>Explore new regions and discover new secrets</>}
          />
        </div>

        {/* <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
          <div className="bento-tilt_1 border-hsla row-span-1 md:col-span-1 md:row-span-2"></div>
          <div className="bento-tilt_1 border-hsla row-span-1 ms-32 md:col-span-1 md:ms-0"></div>
        </div> */}


<div className="grid w-full h-full grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-3 gap-4">
        {/* First card - spans 2 rows on larger screens */}
        <div className="border-hsla bg-gradient-to-br overflow-hidden md:row-span-2 rounded-xl min-h-[400px] h-full">
          <BentoCard
            src="/videos/catty.mp4"
            description={<>Explore new regions and discover new secrets</>}
          />
        </div>

        {/* Second card */}
        <div className="border-hsla rounded-xl overflow-hidden min-h-[400px] h-full">
          <BentoCard
            src="/videos/main-menu.mp4"
            description={<>Explore new regions and discover new secrets</>}
          />
        </div>

        {/* Third card */}
        <div className="border-hsla rounded-xl overflow-hidden min-h-[400px] h-full">
          <BentoCard
            src="/videos/world-intel.mp4"
            description={<>Explore world intels and gain Materia</>}
          />
        </div>

        {/* Fourth card - spans 2 columns on all screens larger than mobile */}
        <div className="border-hsla rounded-xl overflow-hidden md:col-span-2 min-h-[400px] h-full">
          <BentoCard
            src="/videos/mini-game.mp4"
            description={<>Play Unique Minigames</>}
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Features;
