import { NavHashLink } from "react-router-hash-link";
import { Suspense, lazy, useEffect, useState } from "react";
import SideMenu from "./SideMenu";
import menu from "../media/svg/menu-bars.svg";
import logo from "../media/svg/logo.svg";
import { NavLink } from "react-router-dom";
import { getContacts } from "../api/reqs";
import { IContacts } from "../api/models";

const ModalConsulting = lazy(() => import('../components/ModalConsulting'));
const ModalFreeHours = lazy(() => import('../components/ModalFreeHours'));

export default function Header() {

    const [isModalConsultingActive, setIsModalConsultingActive] = useState<boolean>(false)
    const [isModalFreeHoursActive, setIsModalFreeHoursActive] = useState<boolean>(false)

    const [isSidebarOpened, setIsSidebarOpened] = useState<boolean>(false);
    const activeLinkStyles = "block font-medium text-[#00BA61] hover:text-[#00BA61] hover:cursor-pointer duration-100"
    const notActiveLinkStyles = "block font-medium text-black  hover:text-[#00BA61] hover:cursor-pointer duration-100"

    const [contacts, setContacts] = useState<IContacts>()
    useEffect(()=>{
        getContacts()
        .then((res)=>{
            setContacts(res)
        })
    },[])
    return (
        <header className="fixed w-full top-0 right-0 left-0 mx-auto shadow-header z-[110] bg-[#F3F4F5]">
            {isModalConsultingActive && (
                <Suspense>
                    <ModalConsulting active={isModalConsultingActive} setActive={setIsModalConsultingActive} tag={3} />
                </Suspense>)
            }

            {isModalFreeHoursActive && (
                <Suspense>
                    <ModalFreeHours active={isModalFreeHoursActive} setActive={setIsModalFreeHoursActive} tag={1} />
                </Suspense>)
            }

            <SideMenu isSidebarOpened={isSidebarOpened} setIsSidebarOpened={setIsSidebarOpened} contacts={contacts}/>
            <nav className="max-w-[1200px] w-full mx-auto px-[20px] py-[10px] flex justify-between items-center">
                <div className="flex gap-[8px] items-center">
                    <img onClick={() => { setIsSidebarOpened(true); }} src={menu} alt="" className="max-w-[24px] w-full l:hidden hover:cursor-pointer" />
                    <a href="/">
                        <img src={logo} alt="" className="max-w-[89px] w-full l:max-w-[106px] l:h-[24px]" />
                    </a>
                </div>
                <div className="flex gap-[25px] items-center">
                    <div className="hidden l:flex gap-[20px] font-medium text-[16px]">

                        <NavLink to={"/about"} className={({ isActive }) => (isActive ? activeLinkStyles : notActiveLinkStyles)}>О нас</NavLink>
                        <NavLink to={"/tutors"} className={({ isActive }) => (isActive ? activeLinkStyles : notActiveLinkStyles)}>Репетиторы</NavLink>
                        <NavHashLink to={"/#price_block"} className={notActiveLinkStyles}>Стоимость</NavHashLink>
                        <NavHashLink to={"/#reviews_block"} className={notActiveLinkStyles}>Отзывы</NavHashLink>
                        <NavHashLink to={"/#question_block"} className={notActiveLinkStyles}>Частые вопросы</NavHashLink>
                        <a href={`tel:${contacts?.phone}`} className="block font-bold text-[16px] cursor-pointer hover:text-[#00BA61] hover:cursor-pointer duration-100" >{contacts?.phone ? contacts?.phone : ""}</a>
                    </div>

                    <div className="flex gap-[10px]">
                        <button onClick={() => { setIsModalConsultingActive(true) }} className="hidden button-default sl:block hover:bg-slate-100 bg-[white] p-[10px] h-fit rounded-[8px] font-semibold text-black border-[1px] border-[#E3E3E3] text-[14px]  text-center l:py-[15px] l:px-[20px]">Мы перезвоним</button>
                        <button onClick={() => { setIsModalFreeHoursActive(true) }} className="button-default bg-[#00BA61] hover:bg-[#26c97b] p-[10px] h-fit rounded-[8px] font-semibold text-white text-[14px]  text-center l:py-[15px] l:px-[20px]">Бесплатные 2 часа</button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
