import aboutScreen from "../media/about-screen.webp";
import { motion } from "framer-motion";

export default function AboutMainScreen() {
  return (
    <div className="h-fit relative mx-auto max-w-[1200px] mb-[80px] pt-[56px] l:pt-[66px]">

      <article className="relative z-[2] mb-[10px] lx:mb-[40px] l:mb-[20px] mt-[30px] px-[20px]">
        <span className="block font-semibold italic text-[16px] mb-[20px] text-[#00BA61]">
          О нас
        </span>
        <h2 className="font-black text-[#2D2D2D] text-[28px] l:text-[64px]">
          Наша миссия, сделать изучение языков - увлекательным
        </h2>
      </article>

      <section className="flex items-center l:items-start flex-col xs:gap-[40px] l:gap-[60px] lx:flex-row px-[20px] h-fit w-full">
        <motion.div initial={{ opacity: 0 }} transition={{ duration: 2 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative max-w-[580px] max-h-[346] w-full h-full">
          <img
            src={aboutScreen}
            alt=""
            className="relative w-full lx:ml-[-20px] scale-[121%] z-[1] lx:scale-105 l:scale-110"
          />

        </motion.div>
        <div className="max-w-[537px] w-full ">
          <p className="text-[16px] lx:text-[20px] font-normal text-[#2D2D2D] leading-[22.4px] l:leading-[27px] l:mt-[55px]">
            Добро пожаловать в лингвистическое пространство <span className="text-[#00BA61]">INSPIRA</span>", место где
            Вы обязательно покорите вершины языкового мастерства. <span className="text-[#00BA61]">INSPIRA</span>" - это
            команда лингвистов-педагогов, знающих свое дело и готовых Вам помочь
            разобраться со любыми трудностями, которые препятствуют Вам
            качественно освоить язык. Чтобы достичь максимальной эффективности,
            мы выстроили для себя строгие требования, направленные на
            оптимизацию развития Ваших навыков. Только <span className="text-[#00BA61]">индивидуальный</span> подход и
            учет всех пожеланий студента, <span className="text-[#00BA61]">систематичность</span>, которая поможет не
            упустить <span className="text-[#00BA61]">прогресс</span>, строгая отчетность, чтобы четко отслеживать
            <span className="text-[#00BA61]"> динамику</span>, опытные репетиторы с учеными степенями, не прекращающие
            саморазвитие даже спустя десятки лет работы. Вместе эти факторы
            обеспечивают четкое целеполагание и помогут избежать впустую
            потраченных лет освоения языка. Если Вы уже отчаялись и боитесь, что
            никогда не овладеете иностранным языком, или, наоборот, только
            начинаете свое увлекательное путешествие в мир <span className="text-[#00BA61]">лингвистики</span>, или быть
            может, Вам нужно улучшить или просто сохранить уже накопленные
            знания, то команда <span className="text-[#00BA61]">INSPIRA</span>" готова Вам с этим помочь! <span className="text-[#00BA61]">Ключ</span> к Вашему
            любимому языку лежит совсем <span className="text-[#00BA61]">близко</span>!
          </p>
        </div>
      </section>
    </div>
  );
}
