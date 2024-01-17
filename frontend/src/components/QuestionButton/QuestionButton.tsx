import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import wa from "../../media/svg/howItWorkIcons/whatsapp_45x45.svg";
import tg from "../../media/svg/howItWorkIcons/tg_45x45.svg";
import vk from "../../media/svg/howItWorkIcons/vk_45x45.svg";
import yt from "../../media/svg/howItWorkIcons/yt_45x45.svg";
import inst from "../../media/svg/howItWorkIcons/inst_45x45.svg";
import dzen from "../../media/svg/howItWorkIcons/dzen.svg"
import helpCircle from "../../media/svg/help-circle.svg";
import askQuestion from "../../media/svg/ask-question.svg";
import ex from "../../media/svg/ex.svg";
import viber from "../../media/svg/howItWorkIcons/viber_45x45.svg"

import "./questionBtnStyles.css";
import { IContacts } from "../../api/models";
import { getContacts } from "../../api/reqs";

export default function QuestionButton() {

    const [isHintHidden, setIsHintHidden] = useState<boolean>(false)
    const [isOpen, setIsOpen] = useState(false);
    const [contacts, setContacts] = useState<IContacts>()

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        getContacts()
            .then((res) => {
                setContacts(res)
            })
    }, [])

    return (
        <div className="fixed bottom-[20px] right-[20px] question-btn">
            {isHintHidden
                ?
                <></>
                :
                <div className="absolute right-[60px] top-[10px] w-[128px]">
                    <img src={askQuestion} alt="" className="w-[128px]" />
                </div>
            }
            {/* Render the floating action button */}
            <button className="active-btn flex justify-center items-center w-[56px] h-[56px] bg-[#2D2D2D] text-white rounded-full shadow-lg focus:outline-none" onClick={toggleMenu}>
                {isOpen
                    ?
                    <img src={ex} alt="" className="w-[19px] h-[19px] duration-100" />
                    :
                    <img src={helpCircle} alt="" className="w-[32px] h-[32px] duration-100" />}
            </button>

            {/* Render the hidden menu */}
            <CSSTransition in={isOpen} timeout={300} classNames="slide-up" unmountOnExit>
                <div className="absolute w-[42px] flex flex-col gap-[5px] list bottom-[71px] right-[6.6px]">
                    {contacts?.whatsapp ? <a href={`https://api.whatsapp.com/send/?phone=${contacts?.whatsapp.slice(0, 1) === "+" ? contacts?.whatsapp.slice(1) : contacts?.whatsapp}`}>
                        <img src={wa} alt="whatsapp" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all" /></a> : <></>}
                    {contacts?.tg_chanel ? <a href={contacts?.tg_chanel}><img src={tg} alt="telegram" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all" /></a> : <></>}
                    {contacts?.vkontakte ? <a href={contacts.vkontakte}><img src={vk} alt="vk" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all" /></a> : <></>}
                    {contacts?.youtube ? <a href={contacts.youtube}><img src={yt} alt="youtube" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all" /></a> : <></>}
                    {contacts?.instagram ? <a href={contacts?.instagram}><img src={inst} alt="instagram" className="w-[42px] h-[42px] cursor-pointer hover:scale-105 duration-150 transition-all" /></a> : <></>}
                    {contacts?.dzen ? <a href={contacts?.dzen}><img src={dzen} alt="instagram" className="w-[42px] h-[42px] rounded-full cursor-pointer hover:scale-105 duration-150 transition-all" /></a> : <></>}
                    {contacts?.viber ? <a href={contacts.viber}><img src={viber} alt="viber" className="w-[45px] h-[45px] cursor-pointer hover:scale-105 duration-150 transition-all" /></a> : <></>}
                </div>
            </CSSTransition>

            {/* Add Tailwind CSS animations */}
            <style></style>
        </div>
    );
};

