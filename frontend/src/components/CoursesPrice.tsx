import CoursePriceCard from "./CoursePriceCard";
import { ICourses } from "../api/models";
import '../swiperStyles.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from "react-router-dom";

export default function CoursesPrice(props: { data: ICourses[] }) {

    return (
        <div className="h-fit relative mx-auto max-w-[1200px] pb-[50px] m:pt-[50px]">

            <article className="mb-[15px] l:mb-[30px] px-[20px] sx:max-l:px-[30px]">
                <span className="block font-semibold italic text-[16px] mb-[12px] l:mb-[20px] text-[#00BA61]">Форматы</span>
                <h2 className="font-black text-[#2D2D2D] text-[28px] l:text-[48px] pb-[10px] tracking-tight leading-[52.8px]">
                    Стоимость курсов
                </h2>   
                <div className="flex items-end flex-row justify-between mb-[40px]">
                    <p className=" xs:max-w-[335px] sl:max-w-[400px] l:max-w-[480px] text-base text-[#787878]">Выберите комфортный для вас формат, чтобы узнать стоимость живых онлайн курсов иностранного языка</p>
                    <Link to={'/about'}  className="hidden button-default xm:block bg-[#00BA61] hover:bg-[#26c97b] px-[30px] py-[20px] mt-[18px] l:mt-0  h-[58px] rounded-[8px] font-semibold text-white text-[18px] text-center">Подробнее об INSPIRA"</Link>
                </div>
            </article>

            <section className="flex flex-col relative overflow-x-scroll hideScroll ">
                <div className="flex flex-row flex-wrap gap-[20px] mb-[20px] justify-center h-fit">
                    {props?.data?.slice(0, 3).map((item, idx) => {
                        return <CoursePriceCard key={idx} title={item.title} description={item.description} id={item.id} promo={item.promo} alternative_price={item.alternative_price} general_price={item.general_price} />
                    })}
                </div>
                <div className="flex flex-row flex-wrap gap-[20px] justify-center h-fit">
                    {props?.data?.slice(3).map((item, idx) => {
                        return <CoursePriceCard key={idx} title={item.title} description={item.description} id={item.id} promo={item.promo} alternative_price={item.alternative_price} general_price={item.general_price} />
                    })}
                </div>
            </section>
        </div>
    );
}
