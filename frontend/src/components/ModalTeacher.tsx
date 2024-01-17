import { motion } from 'framer-motion'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import Modal from 'react-modal'
import { ITeacher } from '../api/models'
import de from '../media/svg/flags/de.svg'
import es from '../media/svg/flags/es.svg'
import us from '../media/svg/flags/us.svg'
import teacherTalk from '../media/svg/teacherTalk.svg'
import voiceImg from '../media/svg/voicePlay.svg'
import viewSound from '../media/viewSound.gif'
import ModalTutor from './ModalTutor'
import './stylesModalTeacher.css'

interface IProps {
	isModalTeacherActive: boolean
	setIsModalTeacherActive: Dispatch<SetStateAction<boolean>>
	data: ITeacher
}

export default function ModalTeacher({
	isModalTeacherActive,
	setIsModalTeacherActive,
	data,
}: IProps) {
	const [ableToPlay, setAbleToPlay] = useState<boolean>()
	const [isModalTutorActive, setIsModalTutorActive] = useState<boolean>(false)
	const [isPlay, setIsPlay] = useState<boolean>(false)
	const audioRefModal = useRef<HTMLAudioElement>(null)
	let yo = (y: string) =>
		/\d*1\d$/.test(y) || /[05-9]$/.test(y)
			? 'лет'
			: /1$/.test(y)
			? 'год'
			: 'года'

	useEffect(() => {
		if (
			audioRefModal.current &&
			data.audio &&
			audioRefModal.current.src !== data.audio
		) {
			audioRefModal.current.pause()
			audioRefModal.current.src = data.audio
			audioRefModal.current.preload = 'auto'
			audioRefModal.current.volume = 0.3
			audioRefModal.current.load() // Начать загрузку нового аудиофайла
		}
	}, [data.audio])

	useEffect(() => {
		if (audioRefModal.current) {
			audioRefModal.current.oncanplaythrough = () => {
				setAbleToPlay(true)
			}
			audioRefModal.current.onended = () => {
				audioStop()
			}
		}
	}, [])

	const audioPlay = () => {
		setIsPlay(true)
		if (audioRefModal.current && ableToPlay) {
			audioRefModal.current.play()
		}
	}

	const audioStop = () => {
		setIsPlay(false)
		if (audioRefModal.current) {
			audioRefModal.current.pause()
		}
	}

	const customStylesModal = {
		overlay: {
			zIndex: 120, // уровень z-index для оверлея
		},
		content: {
			zIndex: 130, // уровень z-index для контента модального окна
		},
	}

	return (
		<>
			{data.audio ? (
				<>
					<audio
						ref={audioRefModal}
						onEnded={audioStop}
						onCanPlayThrough={() => {
							setAbleToPlay(true)
						}}
					/>
				</>
			) : (
				<></>
			)}
			<Modal
				isOpen={isModalTeacherActive}
				className={'modal-teacher hide-scroll'}
				onRequestClose={() => {
					setIsModalTeacherActive(false)
					audioStop()
				}}
				ariaHideApp={false}
				contentLabel='Example Modal'
				style={customStylesModal}
			>
				<ModalTutor
					active={isModalTutorActive}
					setActive={setIsModalTutorActive}
					idTeacher={data.id}
				/>
				<motion.div
					initial={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className='relative flex flex-col h-[100%] w-full md:flex-row'
				>
					<div
						onClick={() => {
							setIsModalTeacherActive(false)
							audioStop()
						}}
						className={`close-modal fixed md:top-[60px] md:right-[calc(50vw-380px)] mm:right-[calc(50vw-400px)] flex justify-center items-center z-[100] bg-[#2D2D2D] bg-opacity-30 rounded-[10px] border-[1px] border-[#E3E3E3]  w-[48px] h-[48px] ${
							isModalTutorActive ? 'hidden' : ''
						} top-[10px] right-[10px] md:top-[-10px] md:right-[-10px] lx:fixed lx:top-[50px] lx:right-[calc(50vw-410px-58px)]`}
					>
						<svg
							width='19'
							height='19'
							viewBox='0 0 19 19'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M2.99988 16.1992L16.1992 2.99989'
								stroke='white'
								strokeWidth='1.5'
								strokeLinecap='square'
								strokeLinejoin='round'
							/>
							<path
								d='M2.99988 3L16.1992 16.1993'
								stroke='white'
								strokeWidth='1.5'
								strokeLinecap='square'
								strokeLinejoin='round'
							/>
						</svg>
					</div>

					<div className=''>
						<div className='md:fixed'>
							<div className='mb-[30px] mx-auto overflow-hidden max-w-[375px] md:max-w-[260px] max-h-[417px] rounded-bl-[21px] relative rounded-br-[21px] md:rounded-tl-[21px] md:rounded-tr-[21px] md:min-w-[260px] md:h-[288px] md:mb-0'>
								<img
									src={data.photo}
									alt=''
									className='w-full h-full object-cover rounded-bl-[21px] rounded-br-[21px] md:rounded-tl-[21px] md:rounded-tr-[21px]'
								/>
								{data.audio ? (
									<>
										<img
											src={isPlay ? viewSound : voiceImg}
											alt=''
											onClick={isPlay ? audioStop : audioPlay}
											className=' hover:scale-105 hover:cursor-pointer absolute  w-[48px] h-[48px] bottom-[10px] left-[10px]'
										/>
										<img
											src={teacherTalk}
											alt=''
											className='absolute w-[141px] h-[34px] bottom-[16px] left-[60px]'
										/>
									</>
								) : (
									<></>
								)}
							</div>

							<button
								onClick={() => {
									setIsModalTutorActive(true)
								}}
								className='hidden button-default bg-[#00BA61] hover:bg-[#26c97b] w-[260px] rounded-[12px] py-[20px] px-[40px] mt-[20px] md:block'
							>
								<span className='block font-bold text-[18px] text-white text-center'>
									Запись к репетитору
								</span>
							</button>
						</div>
						<button className='invisible w-[260px] py-[20px] px-[40px] mt-[20px]'></button>
					</div>

					<section className='px-[20px] mt-[-70px] xs:max-md:pb-[30%]  md:mt-[20px]'>
						<div className='border-b-[1px] border-b-[#E3E3E3] pb-[25px]'>
							<div className='mb-[10px] flex flex-wrap w-full gap-[3px] max-w-[400px]'>
								<div className='flex items-center h-[22px] w-fit px-[4px] py-[2px] bg-[#2D2D2D] rounded-[5px]'>
									{data.university.map((item, idx) => {
										return (
											<span
												key={idx}
												className='flex text-[#F8F8F8] text-[12px] l:text-[14px] whitespace-nowrap'
											>
												{item.short}
											</span>
										)
									})}
								</div>

								{data.specialization.map((item, idx) => {
									return (
										<div
											key={idx}
											className='flex items-center h-[22px] w-fit px-[4px] py-[2px] bg-[#2D2D2D] rounded-[5px]'
										>
											<span className='flex text-[#F8F8F8] text-[12px] l:text-[14px] whitespace-nowrap'>
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
							</div>

							<span className='block text-[28px] text-[#2D2D2D] font-black mb-[12px]'>
								{data.name}
							</span>
							{data.specialization.map((item, idx) => {
								return (
									<span
										className='text-[#787878] tracking-tight leading-[19.2px]'
										key={idx}
									>
										{idx === 0 && data.specialization.length > 1
											? item.language + ' / '
											: idx < 2
											? item.language
											: ''}
									</span>
								)
							})}
						</div>

						<div className='pt-[25px] md:pb-[20px]'>
							<h3 className='font-black text-[24px] text-[#2D2D2D] pb-[15px]'>
								От репетитора:
							</h3>
							<p
								className='text-[#2D2D2D] text-[16px] leading-[16px] md:leading-[22.4px] pb-[25px]'
								dangerouslySetInnerHTML={{
									__html: data.about ? data.about : 'Нет',
								}}
							></p>

							<h3 className='font-black text-[24px] text-[#2D2D2D] pb-[15px]'>
								Образование:
							</h3>
							{data.university.map((item, idx) => {
								return (
									<p
										key={idx}
										className='text-[#2D2D2D] text-[16px] leading-[16px] md:leading-[22.4px]'
									>
										{item.original}
									</p>
								)
							})}
							<h3 className='font-black text-[24px] text-[#2D2D2D] mt-[25px] pb-[15px]'>
								Опыт работы:
							</h3>
							<p className='text-[#2D2D2D] text-[16px] leading-[16px] md:leading-[22.4px] pb-[25px]'>
								{data.work_experience
									? data.work_experience +
									  ' ' +
									  yo(data.work_experience.toString())
									: 'Нет'}
							</p>

							<h3 className='font-black text-[24px] text-[#2D2D2D] pb-[15px]'>
								Возраст и уровень студентов:
							</h3>
							<p className='text-[#2D2D2D] text-[16px] leading-[16px] md:leading-[22.4px] pb-[25px]'>
								{data.working_with ? data.working_with : 'Нет'}
							</p>

							<h3 className='font-black text-[24px] text-[#2D2D2D] pb-[15px]'>
								Направления:
							</h3>
							<p className='text-[#2D2D2D] text-[16px] leading-[16px] md:leading-[22.4px] pb-[25px]'>
								{data.heading ? data.heading : 'Нет'}
							</p>

							<h3 className='font-black text-[24px] text-[#2D2D2D] pb-[15px]'>
								Хобби:
							</h3>
							<p className='text-[#2D2D2D] text-[16px] leading-[16px] md:leading-[22.4px] pb-[25px]'>
								{data.hobbies ? data.hobbies : 'Нет'}
							</p>

							<h3 className='font-black text-[24px] text-[#2D2D2D] pb-[15px]'>
								Дополнительно:
							</h3>
							<p className='text-[#2D2D2D] text-[16px] leading-[16px] md:leading-[22.4px] pb-[25px]'>
								{data.additionally ? data.additionally : 'Нет'}
							</p>
						</div>

						<button
							onClick={() => {
								setIsModalTutorActive(true)
							}}
							style={{ position: 'fixed' }}
							className='button-default fixed bottom-[2%] left-[50%] -translate-x-1/2 max-w-[370px] bg-[#00BA61] hover:bg-[#26c97b] disabled:hover:bg-[#00BA61] w-full rounded-[12px] py-[20px] px-[40px] mt-[30px] md:hidden'
						>
							<span className='block font-bold text-[18px] text-white text-center'>
								Запись к репетитору
							</span>
						</button>
					</section>
				</motion.div>
			</Modal>
		</>
	)
}
