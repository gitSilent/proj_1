import { IContacts, IInfoCard } from "../api/models";
import wa from "../media/svg/howItWorkIcons/whatsapp_45x45.svg"
import tg from "../media/svg/howItWorkIcons/tg_45x45.svg"
import viber from "../media/svg/howItWorkIcons/viber_45x45.svg"
import vk from "../media/svg/howItWorkIcons/vk_45x45.svg"
import yt from "../media/svg/howItWorkIcons/yt_45x45.svg"
import inst from "../media/svg/howItWorkIcons/inst_45x45.svg"
import dzen from "../media/svg/howItWorkIcons/dzen.svg"
import { Link } from "react-router-dom";
import { getContacts } from "../api/reqs";
import { useEffect, useState } from "react";


export default function InfoCard({ img, title, desc, withButton, buttonText, isAboutCard, btnLink }: IInfoCard) {
    const [contacts, setContacts] = useState<IContacts>()

    useEffect(() => {
        if (isAboutCard) {
            getContacts()
                .then((res) => {
                    setContacts(res)
                })
        }
    }, [])
    return (
        <div className="z-[5] flex flex-col bg-white  h-fit max-w-[335px] p-[20px] rounded-[12px] xm:min-w-[380px]">
            {!isAboutCard ?
                <div className="h-[160px] xm:h-[220px] mb-[15px]">
                    <img src={img} alt="" className="object-cover mb-[15px] rounded-[8px] xs:max-xm:min-w-[295px] xs:max-xm:max-h-[160px]  l:min-w-[340px] l:min-h-[220px]" />
                </div> : <> </>
            }
            <div className="flex flex-col gap-[8px]">
                <h2 className="font-black text-[#2D2D2D] text-[20px] xm:text-[24px] leading-[22px] xm:leading-[26.4px] tracking-tight">{title}</h2>
                <p className="text-[14px] sl:text-[16px] font-medium text-[#787878] leading-[19.2px] tracking-tight w-[295px] l:w-[340px]">{desc}</p>
            </div>
            {isAboutCard ?
                <div className="flex w-full gap-[5px] mt-[20px]">
                    {contacts?.whatsapp
                        ? <a href={`https://api.whatsapp.com/send/?phone=${contacts?.whatsapp.slice(0,1) === "+" ? contacts?.whatsapp.slice(1) : contacts?.whatsapp}`}><img src={wa} alt="whatsapp" className="w-[45px] h-[45px] cursor-pointer hover:scale-105 duration-150 transition-all" /></a>
                        : <></>
                    }
                    {contacts?.telegram
                        ? <a href={contacts?.telegram}><img src={tg} alt="telegram" className="w-[45px] h-[45px] cursor-pointer hover:scale-105 duration-150 transition-all" /></a>
                        : <></>
                    }
                    {contacts?.viber
                        ? <a href={contacts.viber}><img src={viber} alt="viber" className="w-[45px] h-[45px] cursor-pointer hover:scale-105 duration-150 transition-all" /></a>
                        : <></>
                    }
                    {contacts?.vkontakte
                        ? <a href={contacts.vkontakte}><img src={vk} alt="vk" className="w-[45px] h-[45px] cursor-pointer hover:scale-105 duration-150 transition-all" /></a>
                        : <></>
                    }
                    {contacts?.youtube 
                        ? <a href={contacts.youtube}><img src={yt} alt="youtube" className="w-[45px] h-[45px] cursor-pointer hover:scale-105 duration-150 transition-all" /></a>
                        : <></>
                    }
                    {/* {contacts?.facebook 
                        ? <a href="#"><img src={fb} alt="facebook" className="w-[45px] h-[45px] cursor-pointer hover:scale-105 duration-150 transition-all" /></a>
                        : <></>
                    } */}
                    {contacts?.instagram
                        ? <a href={contacts?.instagram}><img src={inst} alt="instagram" className="w-[45px] h-[45px] cursor-pointer hover:scale-105 duration-150 transition-all" /></a>
                        : <></>
                    }
                    {contacts?.dzen ? <a href={contacts?.dzen}><img src={dzen} alt="dzen" className="w-[45px] h-[45px] rounded-full cursor-pointer hover:scale-105 duration-150 transition-all" /></a> : <></>}


                </div> : <> </>
            }
            {withButton ? <Link to={btnLink ? btnLink : "/"} className="button-default bg-[#00BA61] hover:bg-[#26c97b] p-[15px] mt-[18px] w-full h-fit rounded-[8px] font-semibold text-white text-[14px] text-center">{buttonText}</Link>
                : <></>
            }
        </div>
    );
}
