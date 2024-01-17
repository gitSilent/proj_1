import { Link, NavLink } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';
import logo from "../media/svg/white-logo.svg";
import wa from "../media/svg/howItWorkIcons/whatsapp_45x45.svg"
import tg from "../media/svg/howItWorkIcons/tg_45x45.svg"
import viber from "../media/svg/howItWorkIcons/viber_45x45.svg"
import vk from "../media/svg/howItWorkIcons/vk_45x45.svg"
import yt from "../media/svg/howItWorkIcons/yt_45x45.svg"
import dzen from "../media/svg/howItWorkIcons/dzen.svg"
import inst from "../media/svg/howItWorkIcons/inst_45x45.svg"
import { IContacts } from "../api/models";
import ModalFreeHours from "./ModalFreeHours";
import { useState } from "react";

interface IProps {
  isSidebarOpened: boolean;
  setIsSidebarOpened: React.Dispatch<React.SetStateAction<boolean>>;
  contacts: IContacts | undefined;
}

export default function Sidebar({ isSidebarOpened, setIsSidebarOpened, contacts }: IProps) {

  const activeLinkStyles = "block text-[24px] font-medium text-[#00BA61] pl-[20px] hover:text-[#00BA61] hover:cursor-pointer duration-100"
  const notActiveLinkStyles = "block text-[24px] font-medium text-white pl-[20px] hover:text-[#00BA61] hover:cursor-pointer duration-100"
  const [isModalFreeHoursActive, setIsModalFreeHoursActive] = useState<boolean>(false)


  return (
    <div
      className={`sidemenu fixed flex flex-col justify-between top-0 left-0 h-full w-[90vw] bg-[#1E1E1E] ease-in-out duration-300 ${isSidebarOpened ? "translate-x-0 " : "-translate-x-full"
        }`}
    >
      {isModalFreeHoursActive && <ModalFreeHours active={isModalFreeHoursActive} setActive={setIsModalFreeHoursActive} tag={2} />}
      <div className="">
        <div className="flex items-center justify-between px-[20px] pt-[10px]">
          <div className="flex items-center gap-[8px]">
            <svg className="sidemenu-close" onClick={() => { setIsSidebarOpened(false); }} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.99988 16.1992L16.1992 2.99989" stroke="white" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
              <path d="M2.99988 3L16.1992 16.1993" stroke="white" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
            </svg>
            <a href="/">
              <img src={logo} alt="" className="max-w-[89px] w-full l:max-w-[106px] l:h-[24px]" />
            </a>
          </div>
          <button onClick={()=>{setIsModalFreeHoursActive(true)}} className="button-default bg-[#00BA61] hover:bg-[#26c97b] p-[10px] h-fit rounded-[8px] font-semibold text-white text-[14px]  text-center l:py-[15px] l:px-[20px]">Бесплатные 2 часа</button>
        </div>

        <div className="flex flex-col gap-[20px] mt-[35px]">
          <NavLink onClick={() => { setIsSidebarOpened(false) }} to={"/about"} className={({ isActive }) => (isActive ? activeLinkStyles : notActiveLinkStyles)}>О нас</NavLink>
          <NavLink onClick={() => { setIsSidebarOpened(false) }} to={"/tutors"} className={({ isActive }) => (isActive ? activeLinkStyles : notActiveLinkStyles)}>Репетиторы</NavLink>
          <NavHashLink onClick={() => { setIsSidebarOpened(false) }} to={"/#price_block"} className={notActiveLinkStyles}>Стоимость</NavHashLink>
          <NavHashLink onClick={() => { setIsSidebarOpened(false) }} to={"/#reviews_block"} className={notActiveLinkStyles}>Отзывы</NavHashLink>
          <NavHashLink onClick={() => { setIsSidebarOpened(false) }} to={"/#question_block"} className={notActiveLinkStyles}>Частые вопросы</NavHashLink>
          <NavLink onClick={() => { setIsSidebarOpened(false) }} to={"/contacts"} className={({ isActive }) => (isActive ? activeLinkStyles : notActiveLinkStyles)}>Связаться с нами</NavLink>
        </div>
      </div>

      <div className='flex flex-col border-b-[1px] border-[#787878] sl:max-w-none l:border-b-[0px] l:border-r-[1px] l:px-[40px]'>
       
        <div className='flex  gap-[53px] w-[360px] px-[20px] mt-[30px] mb-[20px] mx:mt-0 l:mt-[10px] l:mb-[30px] l:max-w-[430px] l:px-0'>
          <div className='flex flex-col gap-[5px]'>
            <span className='block text-[#E3E3E3] text-[12px] font-semibold italic'>Телефон</span>
            <a href={`tel:${contacts?.phone}`}><span className='block text-white font-bold underline text-[16px]'>{contacts?.phone ? contacts?.phone : ""}</span></a>
          </div>
          <div className='flex flex-col gap-[5px]'>
            <span className='block text-[#E3E3E3] text-[12px] font-semibold italic'>Почта</span>
            <a href={`mailto:${contacts?.email}`}><span className='block text-white font-bold underline text-[16px]'>{contacts?.email ? contacts?.email : ""}</span></a>
          </div>
        </div>
        <div className='flex flex-col gap-[10px] px-[20px] mb-[30px] l:px-0'>
          <span className='text-[#E3E3E3] font-semibold text-[12px] italic'>Соцсети - @inspira_lingua</span>
          <div className="flex w-full gap-[5px]">
            {contacts?.whatsapp ? <a href={`https://api.whatsapp.com/send/?phone=${contacts?.whatsapp.slice(0, 1) === "+" ? contacts?.whatsapp.slice(1) : contacts?.whatsapp}`}>
              <img src={wa} alt="whatsapp" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all" /></a> : <></>}
            {contacts?.telegram ? <a href={contacts?.telegram}><img src={tg} alt="telegram" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all" /></a> : <></>}
            {contacts?.vkontakte ? <a href={contacts?.vkontakte}><img src={vk} alt="vk" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all" /></a> : <></>}
            {contacts?.youtube ? <a href={contacts?.youtube}><img src={yt} alt="youtube" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all" /></a> : <></>}
            {contacts?.instagram ? <a href={contacts?.instagram}><img src={inst} alt="instagram" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all" /></a> : <></>}
            {contacts?.dzen ? <a href={contacts?.dzen}><img src={dzen} alt="dzen" className="w-[42px] h-[42px] rounded-full cursor-pointer hover:scale-105 duration-150 transition-all" /></a> : <></>}
            {contacts?.viber ? <a href={contacts.viber}><img src={viber} alt="viber" className="w-[45px] h-[45px] cursor-pointer hover:scale-105 duration-150 transition-all" /></a> : <></>}
          </div>
        </div>
        <div className='flex justify-between w-full px-[20px]'>
          <Link to={"/policy_privacy"} className='block underline text-[#787878] text-[12px] font-medium'>Политика конфиденциальности</Link>
          <Link to={"/offer_documents"} className='block underline text-[#787878] text-[12px] font-medium'>Публичная оферта</Link>
        </div>
        <Link to={"/terms_of_service"} className='block underline text-[#787878] text-[12px] pt-[1px] mt-[5px] font-medium ml-[20px]'>Пользовательское соглашение</Link>
        <span className='block mx-auto w-full text-[#787878] border-[#787878] border-t text-[9px] font-medium my-[10px] pt-[10px] text-center'>ИП БОЛЬШАКОВ ВАЛЕРИЙ ВЯЧЕСЛАВОВИЧ ИНН 231909256020 ОГРНИП 323237500351461</span>
      
      </div>

    </div>
  );
}