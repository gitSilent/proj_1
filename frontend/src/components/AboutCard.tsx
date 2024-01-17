import { IAboutCard } from "../api/models";

export default function AboutCard({title, desc,bgChar,addStyles}:IAboutCard) {
    return (
        <div className="relative overflow-hidden w-[335px] h-fit p-[20px] bg-[#F3F4F5] rounded-[12px] l:w-[380px]">
            <h3 className="relative z-[1] font-black text-[20px] w-[90%] text-[#2D2D2D] mb-[8px]">{title}</h3>
            <p className="relative z-[1] font-medium text-[14px] text-[#787878] leading-4">
                {desc}
            </p>
            <span className={`absolute block right-[-50px] z-[0] top-0 bottom-0 my-auto font-black text-[280px] text-[#E7F1EE] leading-[205px] ${addStyles ? addStyles : ""}`}>{bgChar}</span>
        </div>
    );
}
