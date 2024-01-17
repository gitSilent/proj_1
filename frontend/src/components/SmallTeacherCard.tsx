import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { ITeacher } from '../api/models'
import de from '../media/svg/flags/de.svg'
import es from '../media/svg/flags/es.svg'
import us from '../media/svg/flags/us.svg'
import voiceImg from '../media/svg/voicePlay.svg'
// import ModalTutor from './ModalTeacher'
import viewSound from '../media/viewSound.gif'
import ModalTeacher from './ModalTeacher'

interface IAudioPlayerData {
	idCard: number
	isPlaying: boolean
}

interface IProps {
	data: ITeacher
	audioPlayerData: IAudioPlayerData | undefined
	setAudioPlayerData: Dispatch<SetStateAction<IAudioPlayerData | undefined>>
}

export default function SmallTeacherCard({
	data,
	audioPlayerData,
	setAudioPlayerData,
}: IProps) {
	const [isModalTeacherActive, setIsModalTeacherActive] =
		useState<boolean>(false)
	const [isPlay, setIsPlay] = useState<boolean>(false)
	const audioRef = useRef<HTMLAudioElement>(null)
	let yo = (y: string) =>
		/\d*1\d$/.test(y) || /[05-9]$/.test(y)
			? 'лет'
			: /1$/.test(y)
			? 'год'
			: 'года'

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.src = data.audio
			audioRef.current.preload = 'auto'
			audioRef.current.volume = 0.3
		}
	}, [data.audio])

	const audioPlay = () => {
		setIsPlay(true)
		if (audioRef.current) {
			setAudioPlayerData({
				idCard: data.id,
				isPlaying: true,
			})
			audioRef.current.play()
		}
	}

	const audioStop = () => {
		setIsPlay(false)
		if (audioRef.current) {
			setAudioPlayerData({
				idCard: data.id,
				isPlaying: false,
			})
			audioRef.current.pause()
		}
	}

	useEffect(() => {
		if (audioPlayerData?.idCard !== data.id && audioPlayerData?.isPlaying) {
			audioStop()
		}
	}, [audioPlayerData?.idCard, audioPlayerData?.isPlaying])

	return (
		<div className='min-w-[163px] xs:max-ssx:max-w-[163px] z-[50] bg-[#F8F8F8] rounded-[12px] max-w-[280px] p-[10px] w-full  relative'>
			<ModalTeacher
				isModalTeacherActive={isModalTeacherActive}
				setIsModalTeacherActive={setIsModalTeacherActive}
				data={data}
			/>
			{data.audio ? (
				<>
					<img
						src={isPlay ? viewSound : voiceImg}
						alt=''
						onClick={isPlay ? audioStop : audioPlay}
						className={`${
							isPlay ? ' ' : ''
						} z-10 absolute xs:w-[32px] xs:h-[32px] cursor-pointer hover:opacity-100  opacity-95 l:w-[48px] l:h-[48px] top-[20px] left-[20px]`}
					/>
					<audio ref={audioRef} onEnded={audioStop} />
				</>
			) : (
				<></>
			)}

			<div
				onClick={() => {
					setIsModalTeacherActive(true)
					audioStop()
				}}
				className='cursor-pointer'
			>
				<div className='xs:max-ssx:w-[143px] w-[170px] h-[170px] sm:w-[260px] sm:h-[289px]'>
					<img
						src={data.photo}
						alt=''
						className='w-full h-full rounded-[8px] object-cover swiperImg'
					/>
				</div>

				<div>
					<span className='block font-black text-[20px] text-[#2D2D2D] mb-[5px] mt-[8px] l:text-[24px] l:mt-[10px]'>
						{data.name}
					</span>
					<div className='l:mb-[15px] xs:mb-[10px]'>
						{data.specialization.map((item, idx) => {
							return (
								<span
									key={idx}
									className='font-medium text-[#787878] text-[12px] l:text-[16px]'
								>
									{data.specialization.length > 1 && idx === 0
										? item.language + ' / '
										: data.specialization.length > 2 && idx > 1
										? ''
										: item.language}{' '}
								</span>
							)
						})}
					</div>

					<div className='flex flex-wrap w-full gap-[2px] max-w-[247px]'>
						{data.university.map((item, idx) => {
							return (
								<div
									key={idx}
									className='sx:[16px] w-fit max-w-full whitespace-normal px-[4px] py-[2px] bg-[#2D2D2D] rounded-[3px] flex items-center justify-center'
								>
									<span className='text-[#F8F8F8] w-full text-[12px] l:text-[14px]'>
										{item.short}
									</span>
								</div>
							)
						})}

						{data.specialization.map((item, idx) => {
							return (
								<div
									key={idx}
									className='h-[20px] w-fit px-[4px] py-[2px] bg-[#2D2D2D] rounded-[3px]'
								>
									<span className='text-[#F8F8F8] text-[12px] l:text-[14px] whitespace-nowrap flex items-center gap-1'>
										{item.language === 'Английский' ? (
											<img src={us} alt='' />
										) : item.language === 'Немецкий' ? (
											<img src={de} alt='' />
										) : item.language === 'Испанский' ? (
											<img src={es} alt='' />
										) : (
											item.language + ' '
										)}
										{item.level}
									</span>
								</div>
							)
						})}

						<div className='sx:[16px] l:h-[20px] w-fit px-[4px] py-[2px] bg-[#2D2D2D] rounded-[3px] flex items-center justify-center'>
							<span className='text-[#F8F8F8] text-[12px] l:text-[14px] whitespace-nowrap'>{`Опыт ${
								data.work_experience
							}  ${yo(data.work_experience.toString())}`}</span>
						</div>
					</div>

					<div
						className={`w-full text-[12px] text-[#787878] mt-[10px] l:mt-[15px] l:text-[14px] xs:max-h-[36px] l:max-h-[42px] line-clamp-3 text-ellipsis overflow-hidden`}
						dangerouslySetInnerHTML={{
							__html: data.about ? data.about : 'Нет',
						}}
					></div>
				</div>
			</div>
		</div>
	)
}
