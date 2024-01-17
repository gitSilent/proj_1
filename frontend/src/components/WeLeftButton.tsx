import { useState } from 'react';
import ModalOrder from './ModalOrder';

export default function WeLeftButton() {
    const [isModalOrderActive, setIsModalOrderActive] = useState<boolean>(false)

    return (
        <div className="h-fit relative max-w-[620px] shd:max-w-[750px] xl:max-w-[780px] mx-auto pt-[180px] md:pt-[222px] pb-[50px] md:pb-[140px]">
            {isModalOrderActive && <ModalOrder active={isModalOrderActive} setActive={setIsModalOrderActive} tag={3} />}
            <article className="mb-[40px] px-[20px]">
                <span className="block font-semibold italic text-[16px] mb-[20px] text-[#00BA61]">Кстати!</span>
                <h2 className="w-[75%] l:w-full font-black text-[#2D2D2D] text-[28px] mb-[30px] l:text-[48px]">
                    Мы оставили тут кнопочку...
                </h2>
                <p className="max-w-[480px] text-base text-[#787878]">Если Вы все же приняли смелое решение сделать первый шаг
                    в изучении нового языка. Вот она, ниже, чтобы не скроллить...</p>
                <button onClick={() => { setIsModalOrderActive(true) }} className="button-default hover:bg-[#26c97b] bg-[#00BA61] px-[30px] py-[20px] mt-[40px]  h-[58px] rounded-[8px] font-semibold text-white text-[18px] text-center w-full">Оставить заявку</button>
            </article>

        </div>
    );
}
