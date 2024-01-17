import { IRewiewCard } from '../api/models'
import reviewPhoto from "../media/svg/rewievPhotoPlaceholder.svg"
import quotes from "../media/Quotes.webp"

export default function RewiewCard({ name, created_at, title, description, photo }: IRewiewCard) {

    return (
        <div className="w-[335px] lx:w-[580px] bg-white p-[20px] rounded-xl relative overflow-hidden">

            <img src={quotes} alt="" className='no-copy absolute z-0 max-w-[206px] right-0 top-0' />

            <section className='relative z-[1] flex items-center justify-start gap-[10px]'>
                <figure className='w-[40px] h-[40px] rounded-full'>
                    <img src={photo ? photo : reviewPhoto} alt="Avatar" className='no-copy h-full w-full object-cover rounded-full swiperImg' />
                </figure>
                <div className="flex flex-col justify-start items-start">
                    <span className='text-xs leading-[14.4px] font-black tracking-tight text-[#2D2D2D]'>{name}</span>
                    <span className='text-xs leading-[14.4px] font-medium text-[#787878] tracking-tight'>Отзыв от {created_at.split(" ")[0].replaceAll("-", ".")}</span>
                </div>
            </section>

            <hr className='my-[8px] mx-[20px]' />

            <section className='relative z-[1] max-w-[295px] lx:max-w-[550px]'>
                <article>
                    <h2 className='text-base leading-[19.2px] font-black text-[#2D2D2D] tracking-tight mb-[8px]'>{title}</h2>
                    <p className='text-sm leading-[16.8px] font-medium text-[#787878] tracking-tight '>{description}</p>
                </article>
            </section>

        </div>
    )
}
