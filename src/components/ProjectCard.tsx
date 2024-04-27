import { Image } from 'astro:assets';
import { useEffect, useState } from 'react';


interface Props {
  image: any,
  title: string,
  tags: string[]
}


export default function ProjectCard({ image, title, tags }: Props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setImageLoaded(true);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [])
  
  return (
    <div className="bg-[#E0C8FF] rounded-2xl p-4 box-border">
      <div className="flex flex-col gap-1 font-nohemi items-center justify-between">
        <div className="w-full mb-2 h-[170px]">
          {
            !imageLoaded ? 
            <div className='animate-pulse bg-slate-300 w-[250px] h-[170px]' /> :
            <img
              src={image.src}
              width={250}
              height={85}
              className="w-[250px] h-[170px] rounded-lg"
              alt="Rental Listing"
            />
          }
        </div>


        <div className="w-full">
          
          {
            !imageLoaded ? <div className='h-6 mb-4 w-3/5 animate-pulse bg-slate-300 rounded-sm'/> :
            <h3 className="text-3xl font-semibold text-black">
              {title}
            </h3>
          }
        
          <div className="w-full mt-1 whitespace-nowrap">
            <span
              className="px-3 py-2 mr-4 font-medium rounded-lg text-white bg-red"
              aria-label={tags[0]}
              role="button"
            >
              {tags[0]}
            </span>
            <span
              className="px-3 py-2 font-medium rounded-lg text-white bg-purple"
              aria-label={tags[1]}
              role="button"
            >
              {tags[1]}
            </span>
          </div>
        </div>
        
      </div>
    </div>
  )
}
