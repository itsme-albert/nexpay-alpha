import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Email(){
    return(
        <div className="relative ps-4 pb-5">
            <Input placeholder="Submit your Email Here" className="bg-white opacity-51 w-50 h-7 text-xs" />
            <Button type="button" className="absolute top-1 left-42 h-5 w-10 text-xs my-auto bg-gray-300 rounded-sm"><span className="icon-color text-[10px] font-bold">Save</span></Button>
        </div>
    );
}