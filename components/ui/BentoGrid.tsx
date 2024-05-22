"use client"
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg, 
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

    const [coppied, setCoppied] = useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText('daltonsevier@gmail.com')
        setCoppied(true);
    }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border-border-white/[0.1]",
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >

      <div className={`${id === 6 && 'flex justify-center h-full'}`}>
        <div className="w-full h-full absolute">
            {img && (
                <img 
                    src={img}
                    alt={img}
                    className={cn(imgClassName, 'object-cover, object-center')}
                />
            )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
            {spareImg && (
                    <img 
                        src={spareImg}
                        alt={spareImg}
                        className={'object-cover, object-center w-full h-full'}
                    />
                )}
        </div>
        {id === 6 && (
            <BackgroundGradientAnimation>
            </BackgroundGradientAnimation>
        )}

        <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 trasition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
            <div className="font-sans font-extralight text-[#C1C2D3] text-sm md:text-xs lg:text-base z-10">
                {description}
            </div>
            <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-1">
                {title}
            </div>
        
            {id === 2 && (
                <GlobeDemo />
            )}
            {id === 3 && (
                <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-1 lg:-top-5">
                    {/* Left Side */}
                    <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                        {['React.js', 'Next.js', 'MongoDB'].map((item) => (
                            <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base oppacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">{item}</span>
                        ))}
                        <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"/>
                    </div>       
                    {/* Right Side */}
                    <div className="flex flex-col gap-3 lg:gap-8">
                        <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"/>
                        {['Tailwind CSS', 'ShadCn UI', 'AWS'].map((item) => (
                            <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base oppacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">{item}</span>
                        ))}
                    </div>

                </div>
            )}

            {id === 6 && (
                <div className="mt-5 relative">
                    <div className={`absolute -bottom-5 right-0`}>
                        <Lottie options={{
                            loop: coppied,
                            autoplay: coppied,
                            animationData,
                            rendererSettings: {
                                preserveAspectRatio: 'xMidYMid slice'
                            }
                        }} />
                    </div>

                    <MagicButton
                        title={coppied ? 'Email Coppied' : 'Copy my email'}
                        icon={coppied ? '✅' : '📋'}
                        position="left"
                        otherClasses="!bg-[#161A31]"
                        handleClick={handleCopy}
                    />
                </div>
            )}

        </div>
        </div>
    </div>
  );
};
