import Image from "next/image";

export default function Welcome_Banner(){
    return(
        <div className="relative w-full icon-color">
            <div className="text-3xl font-bold p-4 absolute top-10 left-0 w-full h-full flex flex-col">
                <h1>Welcome to <br />NEXPAY!</h1>
                <p className="text-xs mt-5 font-semibold italic">"Redefining finances, <br />securely <br />and seamlessly."</p>
            </div>
            <div className="z-0 flex justify-end">
                <Image src={'/welcome-image.png'} width={500} height={500} alt="Image" className="size-60" />
            </div>
        </div>
    );
}