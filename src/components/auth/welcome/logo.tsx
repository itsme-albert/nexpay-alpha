import Image from "next/image";

export default function Logo(){
    return(
        <div>
            <Image src="/nexpayfinal.png" height={500} width={500} priority={true} alt="Logo" className="self-center rounded-full size-20 ms-3" />
        </div>
    );
}