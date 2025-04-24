import Image from "next/image";

const Circles = () => {
    return (
        <div className="hidden xl:block w-[200px] xl:w-[250px] absolute right-0 bottom-0
        mix-blend-color-dodge animate-pulse duration-10 z-10 pointer-events-none">
            <Image src={"/circles.png"} width={200} height={200}
            className="w-full h-full" alt=""/>
        </div>
    )
}

export default Circles;
