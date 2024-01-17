import { useState } from 'react';
import "./stylesQuestion.css"

const data = {
  rows: [
    {
      title: "Как всё проходит?",
      content: `Все проходит с использованием платформ Zoom или Google Meet в совокупности
            с другими интерактивными интернет-платформами и материалами, в
            соответствии с выбранным Вами форматом.`,
    },
    {
      title: "Какая методика используется?",
      content: `Существует множество методик преподавания и изучения языков. По
            результатам тестирования Ваш репетитор предоставит Вам отчёт, в котором
            подробно опишет план работы. Ознакомившись с ним, Вы будете знать о всех
            тонкостях дальнейшей работы.`,
    },
    {
      title: "Как оплачивать занятия?",
      content: `После согласования даты тестирования, Вам будут высланы реквизиты,
            согласно которым Вы сможете произвести оплату.`,
    },
    {
      title: "Как начать осваивать язык в INSPIRA” ?",
      content: `Свяжитесь с нами через любой из контактов, указанных на нашем сайте, или
            оставьте заявку и мы сами с Вами свяжемся. После консультации нашего
            менеджера и подбора репетитора, назначается дата тестирования, и Вы
            можете приступать к освоению языка!`,
    },
    {
      title: "Как создается индивидуальный план обучения?",
      content: `Индивидуальный план создается на основе результатов тестирования. В него
            входит подробное описание материала, который будет использоваться в
            процессе и оценка Вашего текущего уровня.`,
    },
    {
      title: "Возможны ли отмены и переносы?",
      content: `Да! Предлагаем Вам ознакомится с порядком переносов и отмен, указанным в
            Публичной Оферте. Количество бесплатных переносов и отмен зависит от
            Вашего расписания.`,
    },
    {
      title: "Как проходит тестирование?",
      content: `Длительность от 40 до 60 минут, в зависимости от скорости выполнения заданий.
            В ходе тестирования выполняются задания на различные аспекты языка, для
            оценки уровня владения. Задания включают в себя: аудирование, чтение, письмо,
            грамматический тест, говорение. По итогам, будет предоставлен отчет и план
            работы. В случаях отсутствия каких-либо навыков, проводится собеседования,
            для определения целей и подходов.`,
    },
    {
      title: "Могу ли я вернуть деньги?",
      content: `Конечно, Вы сможете вернуть средства, которые не успели потратить.`,
    },
  ],
}


export default function Questions() {
  const [selected, setSelected] = useState(null);

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const inspiraWord = <span>Как начать осваивать язык в <b className='text-[#00BA61]'>INSPIRA”</b> ?</span>

  return (
    <div className="h-fit relative mx-auto max-w-[1200px] pb-[50px] m:pt-[50px]">

      <article className="mb-[15px] l:mb-[30px] px-[20px]">
        <span className="block font-semibold italic text-[16px] mb-[12px] l:mb-[20px] text-[#00BA61]">FAQ</span>
        <h2 className="font-black text-[#2D2D2D] text-[28px] l:text-[48px] mb-[30px]">
          Частые вопросы
        </h2>
      </article>

      <section className="flex flex-col relative px-[20px] overflow-x-scroll hideScroll">

        <div className='wrapper'>
          <div className='accordion'>
            {data.rows.map((item, idx) => (
              <div className='item hover:cursor-pointer' key={idx} onClick={() => toggle(idx)}>
                <div className='title'>
                  <h2 className={`text-[20px] md:text-[24px] max-w-[90%] font-black text-left pt-[5px] ${selected === idx ? 'active-title' : 'not-active-title'}`}>{idx == 3 ? inspiraWord : item.title}</h2>
                  <span className={`block text-center text-[32px] font-light ${selected === idx ? 'rotate-45' : 'rotate-0'} duration-100`}>+</span>
                </div>
                <div className={`font-normal text-[16px] text-[#787878] leading-[22.4px] ${selected === idx ? 'content show' : 'content'}`}>
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>

  )
}
