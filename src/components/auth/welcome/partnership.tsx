import Image from "next/image";

export default function Partnership(){
    return(
        <div className="mx-[30px] mt-5 rounded-md shadow-lg bg-gray-200 text-center">
            <h1 className='font-bold text-md icon-color p-5'>Partnership Opportunities with Leading Banks</h1>
            <p className="mx-[40px] font-light text-xs text-justify">NEXPAY partners with BPI, BDO, China Bank, and PNB to offer seamless transactions, enhanced security, and expanded financial services. Together, we create a more inclusive and efficient financial ecosystem.</p>
            <div className="flex p-5">
                <div className="bg-color w-15 h-15 rounded-full flex m-auto">
                    <Image src={'/bpi.png'} width={500} height={500} alt="BPI" className="w-10 flex justify-center m-auto"/>
                </div>
                <div className="bg-color w-15 h-15 rounded-full flex m-auto">
                    <Image src={'/bdo.png'} width={500} height={500} alt="BPI" className="w-10 flex justify-center m-auto"/>
                </div>
                <div className="bg-color w-15 h-15 rounded-full flex m-auto">
                    <Image src={'/chinabank.png'} width={500} height={500} alt="BPI" className="w-10 flex justify-center m-auto"/>
                </div>
                <div className="bg-color w-15 h-15 rounded-full flex m-auto">
                    <Image src={'/pnb.png'} width={500} height={500} alt="BPI" className="w-10 flex justify-center m-auto"/>
                </div>
            </div>
        </div>
    )
}
