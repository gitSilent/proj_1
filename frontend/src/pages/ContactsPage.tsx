import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Suspense, lazy, useEffect } from "react";
import { ReactNotifications } from 'react-notifications-component'

// IMAGES
import contactsBg from "../media/ContactsBg.webp"
import callMeHand from "../media/CallMeHand.webp"
// LOAD COMPONENTS
import ScrollToTop from "../components/ScrollToTop";
import WeUseCookie from "../components/WeUseCookie";
import Contacts from "../components/Contacts";
import Header from "../components/Header";
import { motion } from 'framer-motion';
import { getNotifications } from '../api/reqs';
import { showNotification } from '../components/Notifications';
// LAZY LOAD COMPONENTS
const Footer = lazy(() => import('../components/Footer'));

export default function ContactsPage() {
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
        <motion.div initial={{opacity:0}} transition={{duration: 1}} animate={{opacity:1}} exit={{opacity:0}} className="h-full relative">

            <ScrollToTop />
            <WeUseCookie/>
            <Header />
            <ReactNotifications />

            <Suspense>
                <section className="bg-[#F3F4F5] min-h-[88%] pb-[100px] relative overflow-hidden">
                    <LazyLoadImage src={contactsBg} alt="" className="hidden l:block absolute z-[0] right-[-139px] top-[17px] min-w-[1616px] min-h-[861px]"/>
                    <div className='relative h-full w-full max-w-[1920px] mx-auto'>
                        <LazyLoadImage src={callMeHand} alt="" className="hidden l:block absolute z-[5] right-[-150px] top-[50px]" />
                        <LazyLoadImage src={callMeHand} alt="" className="hidden l:block absolute z-[5] left-[-150px] top-[273px] -scale-x-100 rotate-6" />
                    </div>
                    <Contacts />
                </section>
            </Suspense>

            <Suspense>
                    <Footer />
            </Suspense>

        </motion.div>
    );
}
