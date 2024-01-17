import { Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { ReactNotifications } from 'react-notifications-component'
// IMAGES
import questionsMark from "../media/questionMark.webp"
import mobileErr from "../media/mobileErr.webp"
import errImg from "../media/404.webp"
// LOAD COMPONENTS
import ScrollToTop from "../components/ScrollToTop";
import WeUseCookie from "../components/WeUseCookie";
import Header from "../components/Header";
import { motion } from "framer-motion";
// LAZY LOAD COMPONENTS
const Footer = lazy(() => import('../components/Footer'));

export default function ErrorPage() {

    const navigate = useNavigate()

    return (
        <motion.div initial={{ opacity: 0 }} transition={{ duration: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full relative">
            <Header />
            <WeUseCookie />
            <ScrollToTop />
            <ReactNotifications />

            <div className="relative overflow-hidden w:min-h-[88%]">

                <figure>
                    <img src={errImg} alt="" className="hidden w-[75vw] h-[60vh] right-[10px] top-[95px] sm:block absolute z-[-1]  xll:right-[13%]" />
                    <img src={questionsMark} alt="" className="hidden w-[100vw] h-[100vh] right-0 -bottom-[80px] sm:block absolute z-[-1]  xll:right-[11%]" />
                </figure>

                <main className="xs:max-sm:pt-[350px] xs:max-sm:pb-[100px] sm:py-[270px] mx-auto max-w-[500px]">
                    <article className="flex justify-center flex-col items-center">
                        <img src={mobileErr} alt="" className="hidden xs:max-sm:block min-w-[450px] min-h-[323px] xs:-right-[20px] absolute top-[80px] ssx:-right-[0px]" />
                        <h1 className="md:text-[64px] xs:text-[34px] font-black tracking-tighter mb-[40px]">Кажется, такой <br /> страницы нет!</h1>
                        <button className="button-default bg-[#00BA61] hover:bg-[#26c97b] p-[15px] mt-[18px] w-[335px] h-[58px] rounded-[8px] font-semibold text-white text-[18px] text-center" onClick={() => {
                            navigate("/")
                        }}>Вернуться на главную</button>
                    </article>
                </main>

            </div>

            <Suspense>
                <Footer />
            </Suspense>

        </motion.div>
    );
}
