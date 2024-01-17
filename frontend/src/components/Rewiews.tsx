import { IRewiewCard } from "../api/models";
import RewiewCard from "./RewiewCard";
import Marquee from "react-fast-marquee";



export default function Rewiews(props: { data: IRewiewCard[] }) {

    let rewiews_1: Array<IRewiewCard> = props.data.slice(0, props.data.length / 2)
    let rewiews_2: Array<IRewiewCard> = props.data.slice(props.data.length / 2)

    return (
        <div className="h-fit relative mx-auto m:pt-[90px] overflow-visible">

            <article className="mb-[30px] max-w-[1200px] mx-auto px-[20px]">
                <span className="block font-semibold italic text-[16px] mb-[20px] text-white">Отзывы</span>
                <h2 className="font-black text-white text-[28px] mb-[40px] l:text-[48px]">
                    Что говорят ученики
                </h2>
            </article>

            <section className="flex items-center flex-col gap-[15px] overflow-visible select-none">
                {window.innerWidth > 1040 ?
                    <>
                        <Marquee autoFill={true} style={{ display: 'flex', gap: '20px' }} direction="right" pauseOnClick={true}>
                            <div className="flex gap-[20px] cursor-pointer">
                                {rewiews_1?.map((item, idx) => {
                                    return <RewiewCard key={idx} photo={item.photo} name={item.name} created_at={item.created_at} title={item.title} description={item.description} />
                                })}
                            </div>
                        </Marquee>

                        <Marquee autoFill={true} style={{ display: 'flex', gap: '20px' }} direction="left" pauseOnClick={true}>
                            <div className="flex gap-[20px] cursor-pointer">
                                {rewiews_2?.map((item, idx) => {
                                    return <RewiewCard key={idx} photo={item.photo} name={item.name} created_at={item.created_at} title={item.title} description={item.description} />
                                })}
                            </div>
                        </Marquee>
                    </>
                    : <>
                        <Marquee autoFill={true} style={{ display: 'flex', gap: '20px' }} direction="left" pauseOnClick={true}>
                            <div className="flex gap-[20px] cursor-pointer">
                                {props.data?.map((item, idx) => {
                                    return <RewiewCard key={idx} photo={item.photo} name={item.name} created_at={item.created_at} title={item.title} description={item.description} />
                                })}
                            </div>
                        </Marquee>
                    </>
                }

            </section>


        </div >
    );
}
