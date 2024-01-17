import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Suspense, lazy, useEffect } from "react";
import { ReactNotifications } from 'react-notifications-component'
// IMAGES
import scrollingPhone from "../media/ScrollingPhone.webp"
import microphone from "../media/Microphone.webp"
import curlyArrow from "../media/curlyArrow.webp"
import pointingUp from "../media/PointingUp.webp"
import scribble from "../media/scribble.webp"
import okHand from "../media/OkHand.webp"
// LOAD COMPONENTS
import TutorsComponent from "../components/TutorsComponent";
import ScrollToTop from "../components/ScrollToTop";
import WeUseCookie from "../components/WeUseCookie";
import Header from "../components/Header";
import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
import { getCourses, getNotifications, getRewiews } from '../api/reqs';
import { showNotification } from '../components/Notifications';
// LAZY LOAD COMPONENTS
const MakeFirstStep = lazy(() => import('../components/MakeFirstStep'));
const WeLeftButton = lazy(() => import('../components/WeLeftButton'));
const Questions = lazy(() => import('../components/Questions'));
const Rewiews = lazy(() => import('../components/Rewiews'));
const Footer = lazy(() => import('../components/Footer'));

export default function TutorsPage() {

    const { data: coursesData } = useQuery(`courses`, getCourses)
    const { data: rewiewsData } = useQuery(`rewiews`, getRewiews)
    
    useEffect(() => {
        let wordDayCookie = document.cookie.replace(/(?:(?:^|.*;\s*)wordDayCookie\s*\=\s*([^;]*).*$)|^.*$/, "$1");

        if (wordDayCookie === "") {
            
            getNotifications()
                .then((res) => {
                    showNotification({ type: 'success', title: res.title, desc: res.description })
                })

            let date = new Date;
            date.setMinutes(date.getMinutes() + 360);
            let newDate = date.toUTCString()

            let newCookie = `wordDayCookie=true; expires=${newDate}`
            document.cookie = newCookie;
        }
    }, [])

    return (
        <motion.div initial={{ opacity: 0 }} transition={{ duration: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full relative overflow-x-hidden">
            <Header />
            <WeUseCookie />
            <ScrollToTop />
            <ReactNotifications />

            <section className="bg-white pt-[50px]">
                <TutorsComponent />
            </section>

            <Suspense>
                <section id="firstStep_block" className=" relative py-[40px] l:pt-[130px] l:pb-[90px] z-[100]">
                    <div className="bg-[#2D2D2D] z-[-6] absolute top-0 left-0 h-full w-full skewed-r3"></div>
                    <div className="max-w-[780px] mx-auto relative">
                        <LazyLoadImage src={scribble} alt="" className="hidden show-up l:block absolute min-h-[100px] min-w-[150px] z-[-5] right-[-12rem] top-[-4.75rem]" />
                        <LazyLoadImage src={scrollingPhone} alt="" className="hidden show-up l:block absolute min-h-[200px] min-w-[250px] z-[-1] right-[-7rem] top-[-6.25rem]" />
                        {coursesData ? <MakeFirstStep courses={coursesData} /> : <></>}
                    </div>
                </section>
            </Suspense>

            <Suspense>
                <section id="question_block" className="bg-white pt-[60px] mt-[30px] l:mt-[50px] relative overflow-hidden z-[5]">
                    <Questions />
                </section>
            </Suspense>

            <Suspense>
                <div id="reviews_block" className="relative h-fit">
                    <div className="bg-[#00BA61] absolute h-[calc(100%+50px)] top-[50px] w-full z-[-1] green-block-skew"></div>
                        <LazyLoadImage src={curlyArrow} alt="" className="show-up block absolute z-[0] top-[34%] left-[90%] scale-[340%] ss:scale-[200%] ss:left-[35%] xs:scale-[200%] xs:left-[35%] sxs:scale-[320%] sx:scale-[200%] sm:scale-[230%] sm:top-[15%] sm:left-[60%] sl:scale-[220%] mx:scale-[200%] m:scale-[170%] m:left-[40%] md:scale-[100%] md:left-[30%] xm:scale-[125%] lg:scale-[100%] lg:top-[-10%] lg:left-[20%] l:scale-[111%] l:top-[8%] l:left-[35%] w:left-[40%] sw:left-[43%]" />
                        <LazyLoadImage src={microphone} alt="" style={{ scale: `${window.innerWidth >= 480 ? '95%' : '130%'}` }} className="block absolute min-h-[200px] min-w-[360px] scale-95 z-[1] right-[-170px] top-[44px] sm:top-[-90px] sm:right-[-200px] mx:right-[-350px] mx:top-[-100px] l:top-[-140px] hd:right-[-120px] w:right-[1%] ww:right-[8%] www:right-[15%] uw:right-[23%] uuw:right-[31%] sw:right-[35%] small-levitate" />
                        <section className=" relative xs:max-md:pt-32 pt-[30px] z-[1]">
                            {rewiewsData ? <Rewiews data={rewiewsData} /> : <></>}
                        </section>
                </div>
            </Suspense>

            <Suspense>
                <section className="relative max-w-[1920px] mx-auto">
                        <LazyLoadImage style={{ rotate: `${window.innerWidth >= 1200 ? '0deg' : '-25deg'}`, scale: `${window.innerWidth >= 600 ? '85%' : '87%'}` }} src={okHand} alt="" className="show-up block scaleX xs:-right-[81px] xs:w-[240px]  xs:bottom-[200px] m:bottom-[200px] absolute min-h-[100px] min-w-[150px] z-[1] l:left-0 l:-bottom-[100px] l:scale-[85%] l:w-[426px] " />
                        <LazyLoadImage src={pointingUp} alt="" className="hidden show-up l:block absolute min-h-[200px] min-w-[250px] z-[1] right-[-109px] -bottom-[80px]" />
                    <WeLeftButton />
                </section>
            </Suspense>

            <Suspense>
                <Footer />
            </Suspense>

        </motion.div>
    );
}
