import InfoCard from "../components/InfoCard";
import HowItWorkImg_1 from "../media/HowItWorkImg_1.webp"
import HowItWorkImg_2 from "../media/HowItWorkImg_2.webp"
import HowItWorkImg_3 from "../media/HowItWorkImg_3.webp"
import HowItWorkImg_4 from "../media/HowItWorkImg_4.webp"
import HowItWorkImg_5 from "../media/HowItWorkImg_5.webp"


export default function HowItWork() {
    return (
        <div className="h-fit relative  mx-auto max-w-[820px] xs:max-sm:pt-[35px] m:pt-[50px] xs:max-l:px-[20px]">

            <article className="mb-[40px] xs:max-ss:px-[10px] ">
                <span className="block font-semibold italic text-[16px] mb-[12px] l:mb-[23px] text-[#00BA61]  xs:max-sm:px-[20px]">Прохождение курса</span>
                <h2 className="font-black text-[#2D2D2D] text-[28px] mb-[15px] leading-[30.8px] l:mb-[25px] l:text-[48px] l:leading-[52.8px] tracking-tight xs:max-sm:px-[20px]">
                    Как все устроено?
                </h2>
                <p className="max-w-[480px] text-base text-[#787878] leading-[22.4px] tracking-tight xs:max-sm:px-[20px] relative z-[4]">Здесь мы покажем подробную инструкцию того, как начать курсы, и как все будет проходить.
                    Если у Вас останутся вопросы - обращайтесь к нашим менеджерам они Вам всегда помогут и ответят на любые вопросы!</p>
            </article>


            <section className="mx-auto h-fit w-full">
                <div className="xm:grid xm:grid-flow-row-dense xm:grid-cols-2 xm:justify-center max-w-[780px] gap-[15px] l:gap-[20px] xs:max-xm:hidden">
                    <div className="flex flex-col gap-[20px] ">
                        <InfoCard img={HowItWorkImg_1} title="1. Попробуйте бесплатно" desc="Запишитесь на пробное занятие, чтобы узнать о курсах, о нас и познакомиться с нашим репетитором!" withButton={true} buttonText="Выбрать репетитора" isAboutCard={false} btnLink="/tutors" />
                        <InfoCard img={HowItWorkImg_3} title="3. Учитесь онлайн!" desc="После прохождения тестирования, выбора комфортного формата и понравившегося репетитора приступайте к освоению языка!" withButton={false} isAboutCard={false} />
                        <InfoCard img={HowItWorkImg_5} title="5. Методика под запрос" desc="Используем только те методы, которые отвечают вашим запросам и уже имеющимся навыкам, чтобы сделать процесс наиболее эффективным." withButton={false} isAboutCard={false} />
                    </div>
                    <div className="flex flex-col gap-[20px] ">
                        <InfoCard img={HowItWorkImg_2} title="2. Пройдите тест" desc="Пройдите тестирование своих знаний, чтобы специалист мог создать под Вас индивидуальный курс для максимальной эффективности" withButton={false} isAboutCard={false} />
                        <InfoCard img={HowItWorkImg_4} title="4. Все материалы - с нас!" desc="Вам не нужно покупать дополнительные учебники или тетради, мы предоставим все необходимые материалы для курсов, которые после прохождения останутся у вас!" withButton={true} buttonText="Подробнее об INSPIRA”" isAboutCard={false} btnLink="/about" />
                        <InfoCard title="А еще мы в интернете..." desc="Чтобы Вам было проще общаться и узнавать что-то новое, и отслеживать актуальную информацию об INSPIRA”, мы есть во всех соцсетях и мессенджерах, чтобы Вам было удобнее!" withButton={false} isAboutCard={true} />
                    </div>
                </div>
                <div className="px-[20px] flex flex-col gap-[15px] xm:hidden justify-center items-center">
                    <InfoCard img={HowItWorkImg_1} title="1. Попробуйте бесплатно" desc="Запишитесь на пробное занятие, чтобы узнать о курсах, о нас и познакомиться с нашим репетитором!" withButton={true} buttonText="Выбрать репетитора" isAboutCard={false} btnLink="/tutors" />
                    <InfoCard img={HowItWorkImg_2} title="2. Пройдите тест" desc="Пройдите тестирование своих знаний, чтобы специалист мог создать под Вас индивидуальный курс для максимальной эффективности" withButton={false} isAboutCard={false} />
                    <InfoCard img={HowItWorkImg_3} title="3. Учитесь онлайн!" desc="После прохождения тестирования, выбора комфортного формата и понравившегося репетитора приступайте к освоению языка!" withButton={false} isAboutCard={false} />
                    <InfoCard img={HowItWorkImg_4} title="4. Все материалы - с нас!" desc="Вам не нужно покупать дополнительные учебники или тетради, мы предоставим все необходимые материалы для курсов, которые после прохождения останутся у вас!" withButton={true} buttonText="Подробнее об INSPIRA”" isAboutCard={false} btnLink="/about" />
                    <InfoCard img={HowItWorkImg_5} title="5. Методика под запрос" desc="Используем только те методы, которые отвечают вашим запросам и уже имеющимся навыкам, чтобы сделать процесс наиболее эффективным." withButton={false} isAboutCard={false} />
                    <InfoCard title="А еще мы в интернете..." desc="Чтобы Вам было проще общаться и узнавать что-то новое, и отслеживать актуальную информацию об INSPIRA”, мы есть во всех соцсетях и мессенджерах, чтобы Вам было удобнее!" withButton={false} isAboutCard={true} />
                </div>
            </section>

        </div>
    );
}
