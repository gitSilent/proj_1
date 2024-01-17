import { useState } from 'react'
import { ICoursePriceCard } from '../api/models'
import ModalConsulting from './ModalConsulting'
import ModalFreeHours from './ModalFreeHours'


export default function CoursePriceCard({ title, alternative_price, general_price, description, id, promo}: ICoursePriceCard) {

    const [isModalConsultingActive, setIsModalConsultingActive] = useState<boolean>(false)
    const [isModalFreeHoursActive, setIsModalFreeHoursActive] = useState<boolean>(false)
    
    return (
        <div className="max-w-[335px] l:max-w-[380px] flex flex-col justify-between min-h-full p-[15px] l:p-[20px] rounded-[12px] w-full bg-[#F3F4F5]">
            {isModalConsultingActive && <ModalConsulting active={isModalConsultingActive} setActive={setIsModalConsultingActive} tag={3} idCourse={id}/>}
            {isModalFreeHoursActive && <ModalFreeHours active={isModalFreeHoursActive} setActive={setIsModalFreeHoursActive} tag={3} idCourse={id}/>}
            <div className="mb-[20px]">
                <span className="block text-[#2D2D2D] text-[28px] font-black mb-[15px]">{title}</span>
                <p className='text-[#787878] w-[98%] text-[16px] leading-[19px] l:leading-[22.4px]'>{description}</p>
            </div>
            <div>
                <hr className='bg-[#E3E3E3] mb-[20px]' />
                <div className='flex items-start gap-[3px] l:gap-[15px] mb-[20px]'>
                    <div className='flex gap-[3px] '>
                        {general_price?.prevous_cost ?
                            <div className='flex items-center text-center gap-[3px]'>
                                <span className='block line-through text-[#787878] text-[12px] whitespace-nowrap'>{general_price?.prevous_cost} руб.</span>
                            </div>
                            : <></>
                        }
                        {general_price ?
                            <div className='gap-[3px] flex items-center whitespace-nowrap l:mr-[12px]'>
                                <span className='font-black text-[24px] text-[#2D2D2D]'>{general_price.total}</span>
                                <span className='text-[#2D2D2D] text-[12px]'>{general_price.prevous_period}</span>
                            </div>
                            : <></>
                        }
                        {alternative_price ?
                            <div className='gap-[3px] flex items-center'>
                                <span className='font-black text-[24px] text-[#2D2D2D]'>{alternative_price.total}</span>
                                <span className='text-[#2D2D2D] text-[12px] whitespace-nowrap'>{alternative_price.prevous_period}</span>
                            </div>
                            : <></>
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-[8px]'>
                    <button onClick={()=>{
                        if (promo.title.indexOf("час") >= 0){                            
                            setIsModalFreeHoursActive(true)
                        }else{
                            setIsModalConsultingActive(true)
                        }
                        }} className="button-default bg-[#00BA61] hover:bg-[#26c97b] px-[30px] py-[15px] w-full rounded-[8px] font-semibold text-white text-[14px] text-center">{promo.title ? promo.title : "Оставить заявку" }</button>
                    <button onClick={()=>{setIsModalConsultingActive(true)}} className="button-default bg-[#F3F4F5] border-[#E3E3E3] hover:bg-white border-[1px] px-[30px] py-[15px] w-full rounded-[8px] font-semibold text-[14px] text-center text-[#2D2D2D]">Бесплатная консультация</button>
                </div>
            </div>

        </div >
    )
}
