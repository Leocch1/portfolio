"use client"

import { useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi"

const WorkSliderBtns = ({ containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-10 w-full justify-between xl:w-max xl:justify-none", 
    btnStyles= "bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all", iconStyles}) => {
    const swiper = useSwiper();
    return( <div className={containerStyles}>
        <button className={btnStyles} onClick={()=> swiper.slidePrev()}>
            <PiCaretLeftBold className={iconStyles} />
        </button>
        <button className={btnStyles} onClick={()=> swiper.slideNext()}>
            <PiCaretRightBold className={iconStyles} />
        </button>
    </div>
    )
}

export default WorkSliderBtns
