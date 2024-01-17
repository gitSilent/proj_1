import mainBg from "../../media/svg/main-bg.svg";
import tgIcon from "../../media/svg/tg-icon.svg";
import MainFolder from "../../media/MainBlockImages/MainFolder.webp"
import MainHeadphones from "../../media/MainBlockImages/MainHeadphones.webp"
import MainMac from "../../media/MainBlockImages/MainMac.webp"
import MainMacMirrored from "../../media/MainBlockImages/MainMacMirrored.webp"
import MainPhone from "../../media/MainBlockImages/MainPhone.webp"
import MainWatch from "../../media/MainBlockImages/MainWatch.webp"
import "./stylesMainScreen.css"
import { useEffect, useState } from "react";
import { getContacts } from "../../api/reqs";
import { IContacts } from '../../api/models'
import ModalFreeHours from "../ModalFreeHours";


export default function MainScreen() {
    const [isModalFreeHoursActive, setIsModalFreeHoursActive] = useState<boolean>(false)
    const [contacts, setContacts] = useState<IContacts>()

    useEffect(() => {
        getContacts()
            .then((res) => {
                setContacts(res)
            })
    }, [])
    return (
        <div className="relative w-full overflow-y-hidden overflow-x-hidden pt-[64px] h-[654px] l:h-[895px]">
            {isModalFreeHoursActive && <ModalFreeHours active={isModalFreeHoursActive} setActive={setIsModalFreeHoursActive} tag={2} />}

            <div className="absolute w-full bevealed-bottom overflow-y-hidden overflow-x-hidden top-[0] bg-[#F3F4F5] h-[594px] l:h-[775px]">
                <img src={mainBg} alt="" className="absolute l:scale-[155%] w-full z-[0] l:right-[170px] l:top-[135px] xm:h-full" />
            </div>
            <div className="max-w-[1920px] mx-auto relative h-full mt-[-60px] pt-[60px]">

                <img
                    style={{
                        scale: `${window.innerWidth >= 1200 ? '175%' : '65%'}`,
                        rotate: `${window.innerWidth >= 1200 ? '-3deg' : '-10deg'}`
                    }}
                    src={MainFolder} alt="" className="no-copy z-[5] absolute max-w-[352px] max-h-[255px] xs:max-l:left-[204px] top-[200px] l:top-[525px] l:-right-[45px] medium-levitate" />

                <img

                    style={{
                        scale: `${window.innerWidth >= 1200 ? '100%' : '50%'}`,
                        rotate: `${window.innerWidth >= 1200 ? '0deg' : '25deg'}`
                    }} src={MainPhone} alt="" className="no-copy z-[5] absolute left-[-166px] top-[178px] l:top-[533px] l:left-[auto] l:right-[617px] small-levitate" />

                <img
                    style={{
                        scale: `${window.innerWidth >= 1200 ? '100%' : '75%'}`,
                        rotate: `${window.innerWidth >= 1200 ? '0deg' : 'deg'}`,
                    }}
                    src={MainMac} alt="" className="no-copy hidden l:block z-[5] absolute top-[203px] right-[5px] l:top-[148px] l:left-[auto] l:right-[149px] hard-levitate" />

                <img
                    style={{
                        scale: `${window.innerWidth >= 1200 ? '100%' : '70%'}`,
                    }}
                    src={MainMacMirrored} alt="" className="no-copy z-[5] absolute top-[203px] left-[-15px] l:hidden hard-levitate" />


                <img
                    style={{
                        scale: `${window.innerWidth >= 1200 ? '100%' : '40%'}`,
                        rotate: `${window.innerWidth >= 1200 ? '0deg' : '5deg'}`
                    }}
                    src={MainHeadphones} alt="" className="no-copy z-[5] absolute top-[0px] left-[194px] l:top-[-26px] l:left-[auto] l:right-[18px] medium-levitate" />

                <img
                    style={{
                        scale: `${window.innerWidth >= 1200 ? '95%' : '35%'}`,
                        rotate: `${window.innerWidth >= 1200 ? '0deg' : '19deg'}`,
                    }}
                    src={MainWatch} alt="" className="no-copy z-[5] absolute top-[168px] left-[139px] l:top-[252px] l:left-[auto] l:right-[70px] small-levitate" />

                <div className="max-w-[1200px] h-full max-h-[464px] l:max-h-[494px] w-full mx-auto z-[10] relative">
                    <div className="flex flex-col relative justify-between h-full mt-[15px] px-[20px] l:px-[25px] l:mt-[66px] ">
                        <article className=" l:mb-[40px]">
                            {/* <img src={bgItemsMobile} alt="" className="absolute levitate object-cover top-[20px] left-[-50px] min-w-[500px] max-w-[600px] w-full z-[-1] l:hidden small-levitate" /> */}
                            <h1 className="tracking-tight leading-[37.4px] l:leading-[70.4px] font-black text-[34px] ss:min-w-[340px] l:text-[64px] text-[#2D2D2D]">
                                Изучайте язык так,
                                <br className="xs:max-ss:hidden" /> как удобно Вам!
                            </h1>
                            <p className="mt-[15px] l:mt-[20px] font-medium text-[16px] l:text-[20px] leading-[22.4px] l:leading-[28px] text-[#787878]">
                                Индивидуальный план под Ваши нужды,
                                <br className="xs:max-ss:hidden" /> профи в области лингвистики и педагогики,
                                <br className="xs:max-ss:hidden" /> разные форматы - все это в INSPIRA”
                            </p>
                        </article>

                        <div className="flex flex-col gap-[10px] l:gap-[20px] l:max-w-[335px]">
                            <p className="text-center font-medium italic leading-[14.4px] l:leading-[16.8px] mx-auto l:mx-0 w-[295px] text-[12px] text-[#787878] l:text-[14px] l:text-left l:w-[90%]">*Нажимайте на кнопочку, ведь иностранный язык сам себя не выучит! ツ</p>
                            <button onClick={() => { setIsModalFreeHoursActive(true) }} className="z-[5] button-default bg-[#00BA61] hover:bg-[#26c97b] p-[10px] h-fit rounded-[12px] font-bold text-white text-[18px] text-center py-[20px] px-[20px]">Получить скидку 25%</button>
                        </div>

                        <div className="z-[5] hidden l:flex items-center text-[#787878] l:mt-[50px] gap-[15px] text-[14px]  font-medium italic">
                            <a href={contacts?.telegram}><img src={tgIcon} alt="" /></a>
                            <span className="leading-[16.8px]">
                                А ещё, подписывайтесь <br /> на наш телеграм-канал!
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
