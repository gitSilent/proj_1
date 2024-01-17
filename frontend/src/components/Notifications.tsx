import { Store } from 'react-notifications-component'
import { Link } from 'react-router-dom'

interface IProps {
    title?: string,
    desc: string,
}

interface IWordOfDay extends IProps {
    dayOfWord: string,
    transcription: string
}

export function CookieNotification() {
    return (
        <div className=" z-[30] relative bg-white rounded-[12px] w-[335px] p-[20px] text-[14px] leading-[16.8px]">
            <div className='absolute right-[23px] top-[15px]'>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.99988 16.1992L16.1992 2.99989" stroke="#787878" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
                    <path d="M2.99988 3L16.1992 16.1993" stroke="#787878" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
                </svg>
            </div>
            <h2 className='text-[#787878] font-bold tracking-[3%] mb-[8px]'>Мы используем Cookie файлы</h2>
            <p className='text-[#2D2D2D] text-[16px] leading-[19.2px] tracking-[3%]'>Закрывая это уведомление, вы даете согласие на использование файлов Cookie<br /> <Link to="/policy_privacy" className='underline'>Политика конфиденциальности</Link></p>
        </div>
    )
}

export function SmthWentWrongNotification() {
    return (
        <div className=" z-[30] relative bg-white rounded-[12px] w-[335px] p-[20px] text-[14px] leading-[16.8px]">
            <div className='absolute right-[23px] top-[15px]'>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.99988 16.1992L16.1992 2.99989" stroke="#787878" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
                    <path d="M2.99988 3L16.1992 16.1993" stroke="#787878" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
                </svg>
            </div>
            <h2 className='text-[#FF0000] font-bold  tracking-[3%] mb-[8px]'>Что-то пошло не так!</h2>
            <p className='text-[#2D2D2D] text-[16px] leading-[19.2px] tracking-[3%]'>Не удалось отправить заявку, попробуйте еще раз, проверив интернет соединение, или сообщите нам об ошибке:  <a href="tel:8 923 782 49-52" className='underline'>8 923 782 49-52</a></p>
        </div>
    )
}


export function WordOfDayNotififation({ title, desc, dayOfWord, transcription }: IWordOfDay) {
    return (
        <div className=" z-[30] relative bg-white rounded-[12px] w-[335px] p-[20px] text-[14px] leading-[16.8px]">
            <div className='absolute right-[23px] top-[15px]'>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.99988 16.1992L16.1992 2.99989" stroke="#787878" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
                    <path d="M2.99988 3L16.1992 16.1993" stroke="#787878" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
                </svg>
            </div>
            <h2 className='text-[#00BA61] font-bold  tracking-[3%] mb-[8px]'>{title}</h2>
            <p className='text-[#2D2D2D] text-[16px] leading-[19.2px] tracking-[3%]' dangerouslySetInnerHTML={{ __html: desc }}>
                {/* {desc} */}
            </p>
        </div>
    )
}


export function InfoNotification({ title, desc }: IProps) {
    return (
        <div className=" z-[30] relative bg-white rounded-[12px] w-[335px] p-[20px] text-[14px] leading-[16.8px]">
            <div className='absolute right-[23px] top-[15px]'>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.99988 16.1992L16.1992 2.99989" stroke="#787878" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
                    <path d="M2.99988 3L16.1992 16.1993" stroke="#787878" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
                </svg>
            </div>
            <h2 className='text-[#787878] font-bold tracking-[3% ] mb-[8px]'>{title}</h2>
            <p className='text-[#2D2D2D] text-[16px] leading-[19.2px] tracking-[3%]'>{desc}</p>
        </div>
    )
}



export function SuccessNotification({ title, desc }: IProps) {
    return (
        <div className=" z-[30] relative bg-white rounded-[12px] w-[335px] p-[20px] text-[14px] leading-[16.8px]">
            <div className='z-[30] absolute right-[23px] top-[15px]'>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.99988 16.1992L16.1992 2.99989" stroke="#787878" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
                    <path d="M2.99988 3L16.1992 16.1993" stroke="#787878" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
                </svg>
            </div>
            <h2 className='text-[#00BA61] font-bold  tracking-[3%] mb-[8px]'>{title}</h2>
            <p className='text-[#2D2D2D] text-[16px] leading-[19.2px] tracking-[3%]' dangerouslySetInnerHTML={{ __html: desc }}></p>
        </div>
    )
}

export function ErrorNotification({ title, desc }: IProps) {
    return (
        <div className=" z-[30] relative bg-white rounded-[12px] w-[335px] p-[20px] text-[14px] leading-[16.8px]">
            <div className='absolute right-[23px] top-[15px]'>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.99988 16.1992L16.1992 2.99989" stroke="#787878" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
                    <path d="M2.99988 3L16.1992 16.1993" stroke="#787878" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
                </svg>
            </div>
            <h2 className='text-[#FF0000] font-bold  tracking-[3%] mb-[8px]'>{title}</h2>
            <p className='text-[#2D2D2D] text-[16px] leading-[19.2px] tracking-[3%]'>{desc}</p>
        </div>
    )
}


export function showNotification({ type, title, desc }: { type: "info" | "success" | "error", title: string, desc: string }) {
    let element: JSX.Element;

    switch (type) {
        case "info":
            element = <InfoNotification title={title} desc={desc} />
            break;
        case "success":
            element = <SuccessNotification title={title} desc={desc} />
            break;
        case "error":
            element = <ErrorNotification title={title} desc={desc} />
            break;
        default:
            element = <InfoNotification title={title} desc={desc} />
            break;
    }
    return Store.addNotification({
        type: "info",

        content: element,
        insert: "top",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__bounceIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 0,
            onScreen: false,
            touch: false,
        },
    });
}