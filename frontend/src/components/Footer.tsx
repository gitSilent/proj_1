import { getContacts, postFeedback } from '../api/reqs'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { showNotification } from './Notifications'
import { NavHashLink } from 'react-router-hash-link'
import { IContacts } from '../api/models'
import rightArrow from "../media/svg/rightArrow.svg"
import viber from "../media/svg/howItWorkIcons/viber_45x45.svg"
import inst from "../media/svg/howItWorkIcons/inst_45x45.svg"
import logo from "../media/svg/footerLogo.svg"
import dzen from "../media/svg/howItWorkIcons/dzen.svg"
import wa from "../media/svg/howItWorkIcons/whatsapp_45x45.svg"
import tg from "../media/svg/howItWorkIcons/tg_45x45.svg"
import vk from "../media/svg/howItWorkIcons/vk_45x45.svg"
import yt from "../media/svg/howItWorkIcons/yt_45x45.svg"

export default function Footer() {
    const [contacts, setContacts] = useState<IContacts>()
    const [email, setEmail] = useState<string>()

    const location = useLocation()
    const pages: string[] = ["/", "/about", "/tutors", "/contacts"]

    useEffect(() => {
        getContacts()
            .then((res) => {
                setContacts(res)
            })
    }, [])

    function sendFeedback() {
        if (email) {
            postFeedback({
                email: email
            }).then(() => {
                showNotification({ type: "success", title: "Заявка отправлена", desc: "Вы успешно отправили заявку, ожидайте ответа" })
                setEmail("")
            }).catch(() => {
                showNotification({ type: "error", title: "Что-то пошло не так", desc: "Проверьте правильность ввода электронной почты" })
            })
        }
    }


    return (
        <footer
            className={`${pages.findIndex(element => element.includes(location.pathname)) === -1 ? "footer-reversed" : ""} 
            w-full bg-[#2D2D2D] z-[10] pt-[40px] pb-[30px] l:pb-[10px]`}>
            {/* <ReactNotifications /> */}
            <div className='max-w-[1220px] mx-auto l:mb-[50px]'>
                {/* <span className="block mb-[30px] text-white text-[40px] font-semibold px-[20px] l:text-[77px]">INSPIRA<span className="text-[#00BA61]">"</span></span> */}

                <div className="flex items-center">
                    <a href="/">
                        <img src={logo} alt="" className="ml-[21px] mb-[30px] l:mb-[43px] xs:w-[169px] xs:h-[40px] l:w-[320px] l:h-[77px]" />
                    </a>
                </div>

                <div className='flex flex-wrap xs:max-ss:justify-center'>
                    <nav className='flex gap-[70px] pb-[30px] px-[20px] mb-[32px] border-b-[1px] xs:max-sl:w-full border-[#787878] l:border-b-[0px] l:border-r-[1px] l:pt-[10px] l:pr-[50px] l:gap-[40px]'>
                        <div className='flex flex-col gap-[20px]'>
                            <a href="/" className='font-medium text-[18px] text-white hidden l:block'>Главная</a>
                            <a href="/about" className='font-medium text-[18px] text-white'>О нас</a>
                            <a href="/tutors" className='font-medium text-[18px] text-white'>Репетиторы</a>
                            <a href="/#price_block" className='font-medium text-[18px] text-white'>Стоимость</a>
                        </div>
                        <div className='flex flex-col gap-[20px]'>
                            <NavHashLink to="/#reviews_block" className='font-medium text-[18px] text-white'>Отзывы</NavHashLink>
                            <NavHashLink to="/#question_block" className='font-medium text-[18px] text-white'>Частые вопросы</NavHashLink>
                            <NavHashLink to="/contacts" className='font-medium text-[18px] text-white'>Связаться с нами</NavHashLink>
                        </div>
                    </nav>

                    <div className='flex flex-col mb-[32px] xs:max-sl:w-full xs:max-ss:justify-center  border-b-[1px] border-[#787878] sl:max-w-none l:border-b-[0px] l:pt-[10px] l:border-r-[1px] l:pl-[50px] l:pr-[25px]'>
                        <div className='flex gap-[39px] md:gap-[65px] xs:max-ss:w-full w-[360px] px-[20px] mb-[20px] l:mb-[30px] l:max-w-[430px] l:px-0 '>
                            <div className='flex flex-col gap-[3px]'>
                                <span className='block text-[#E3E3E3] text-[12px] font-semibold italic tracking-tight leading-[14.4px]'>Телефон</span>
                                <a href={`tel:${contacts?.phone}`}><span className='block text-white font-bold underline text-[16px] cursor-pointer whitespace-nowrap tracking-tight leading-[20.8px]'>{contacts?.phone ? contacts?.phone : ""}</span></a>
                            </div>
                            <div className='flex flex-col gap-[3px]'>
                                <span className='block text-[#E3E3E3] text-[12px] font-semibold italic tracking-tight leading-[14.4px]'>Почта</span>
                                <a href={`mailto:${contacts?.email}`}><span className='block text-white font-bold underline text-[16px] cursor-pointer tracking-tight leading-[20.8px]'>{contacts?.email ? contacts?.email : ""}</span></a>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[10px] px-[20px] mb-[30px] l:px-0'>
                            <span className='text-[#E3E3E3] font-semibold text-[12px] italic'>Соцсети - {contacts?.social_networks}</span>
                            <div className="flex w-full gap-[5px] xs:max-ss:flex-wrap xs:max-ss:justify-center">
                                {contacts?.whatsapp ? <a href={`https://api.whatsapp.com/send/?phone=${contacts?.whatsapp.slice(0, 1) === "+" ? contacts?.whatsapp.slice(1) : contacts?.whatsapp}`}>
                                    <img src={wa} alt="whatsapp" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all" /></a> : <></>}
                                {contacts?.telegram ? <a href={contacts?.telegram}><img src={tg} alt="telegram" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all" /></a> : <></>}
                                {contacts?.vkontakte ? <a href={contacts?.vkontakte}><img src={vk} alt="vk" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all" /></a> : <></>}
                                {contacts?.youtube ? <a href={contacts?.youtube}><img src={yt} alt="youtube" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all" /></a> : <></>}
                                {contacts?.instagram ? <a href={contacts?.instagram}><img src={inst} alt="instagram" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all" /></a> : <></>}
                                {contacts?.dzen ? <a href={contacts?.dzen}><img src={dzen} alt="dzen" className="w-[42px] h-[42px] rounded-full cursor-pointer hover:scale-105 duration-150 transition-all" /></a> : <></>}
                                {contacts?.viber ? <a href={contacts?.viber}><img src={viber} alt="viber" className="w-[45px] h-[45px] cursor-pointer hover:scale-105 duration-150 transition-all" /></a> : <></>}
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col border-b-[1px] border-[#787878] px-[20px] l:px-0 l:border-b-[0px] xs:max-sl:w-full l:pl-[45px] l:pt-[10px] pb-[26px]'>
                        <div className='flex flex-col gap-[10px] mb-[20px]'>
                            <span className='text-[16px] text-[#E3E3E3] font-semibold italic'>Обратиться за помощью</span>
                            <form onSubmit={(e) => { e.preventDefault(); sendFeedback() }} className='flex gap-[2px] l:w-[360px]'>
                                <input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Электропочта' className='py-[15px] px-[20px] text-[18px] font-medium placeholder-[#787878] bg-white rounded-tl-[12px] rounded-bl-[12px] l:w-[294px] ' />
                                <button type='submit' className='button-default py-[15px] px-[20px] w-[64px] leading-[18px] bg-[#00BA61]  hover:bg-[#26c97b] rounded-tr-[12px] rounded-br-[12px]'>
                                    <img src={rightArrow} alt="" className='mx-auto' />
                                </button>
                            </form>
                        </div>

                        <div className='flex gap-[5px] ss:justify-between ss:flex-row xs:flex-col xs:items-left max-w-[360px] l:pt-[17px] l:max-w-[360px] '>
                            <Link to={"/policy_privacy"} className='block underline text-[#787878] text-[12px] font-medium'>Политика конфиденциальности</Link>
                            <Link to={"/offer_documents"} className='block underline text-[#696969] text-[12px] font-medium'>Публичная оферта</Link>
                        </div>
                        <Link to={"/terms_of_service"} className='block underline text-[#787878] text-[12px] pt-[1px] mt-[5px] font-medium'>Пользовательское соглашение</Link>
                    </div>
                </div>
            </div >

            <span className='block mx-auto w-full text-[#787878] text-[9px] l:border-t l:pt-[10px] l:border-[#787878] font-medium  mt-[30px] l:mt-[10px] text-center'>ИП БОЛЬШАКОВ ВАЛЕРИЙ ВЯЧЕСЛАВОВИЧ ИНН 231909256020 ОГРНИП 323237500351461</span>
        </footer >
    )
}
