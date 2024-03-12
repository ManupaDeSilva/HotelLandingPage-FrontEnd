import { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";


export default function Slider1() {
   const [imageNum, setImageNum] = useState(1);
   const sliderImages = [
      {
         url: './SlideNo1.png',
      },
      {
         url: './SlideNo2.png',
      },
      {
         url: './SlideNo3.png',
      },
   ];
   return (
      <div>
         
         <SimpleImageSlider
            width={1519}
            height={545}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
            onStartSlide = {(index, length) => {
               setImageNum(index);
            }}
               autoPlayDelay = {3}
         />
        
      </div>
   );
}