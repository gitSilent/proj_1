import { useState } from 'react'
import { useQuery } from 'react-query'
import { getTeachers } from '../api/reqs'
import de from '../media/svg/flags/de.svg'
import es from '../media/svg/flags/es.svg'
import us from '../media/svg/flags/us.svg'
import SkeletonTutor from './SkeletonTutor'
import SmallTeacherCard from './SmallTeacherCard'

interface ILanguage {
	language: string
	icon: string
}

interface IAudioPlayerData {
	idCard: number
	isPlaying: boolean
}

export default function TutorsComponent() {
	const [audioPlayerData, setAudioPlayerData] = useState<IAudioPlayerData>()
	const [selectedLanguage, setSelectedLanguage] = useState<ILanguage>()
	const { isLoading: teachersLoading, data: teachers } = useQuery(
		['teachers', { language: selectedLanguage }],
		() => getTeachers(selectedLanguage?.language)
	)

	const languages: ILanguage[] = [
		{ language: 'Английский', icon: us },
		{ language: 'Испанский', icon: es },
		{ language: 'Немецкий', icon: de },
	]

	const teachersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	return (
		<div className='h-fit relative mx-auto max-w-[1200px] xs:pb-[50px] l:pb-[100px] pt-[50px] px-[20px]'>
			<div className='max-w-[1200px] flex justify-between flex-row items-end xs:max-xl:flex-col l:px-0 xs:max-xl:justify-start xs:max-xl:items-start'>
				<article className='mb-[30px]'>
					<section>
						<span className='block font-semibold italic text-[16px] mb-[20px] text-[#00BA61]'>
							Репетиторы
						</span>
						<h2 className='font-black text-[#2D2D2D] text-[28px] mb-[30px] l:text-[48px]'>
							Кто будет вести курсы?
						</h2>
						<p className='max-w-[480px] text-base font-medium text-[#787878]'>
							Все наши репетиторы проходят 3 этапа собеседования и имеют минимум
							5 лет стажа преподавательской деятельности
						</p>
					</section>
				</article>

				<section className='relative w-full max-w-[500px] sm:max-w-fit overflow-x-scroll hideScroll mb-[25px]'>
					<div className='radio-inputs'>
						<label className='radio l:hover:bg-[#2d2d2d79] rounded-lg transition-all duration-150'>
							<input
								type='radio'
								name='language'
								defaultChecked
								onClick={() => {
									setSelectedLanguage(undefined)
								}}
							/>
							<span className='name whitespace-nowrap'>Все языки</span>
						</label>

						{languages.map((item, idx) => {
							return (
								<label
									key={idx}
									className='radio l:hover:bg-[#2d2d2d79] rounded-lg transition-all duration-150'
								>
									<figure className='relative'>
										<input
											type='radio'
											name='language'
											onClick={() => {
												setSelectedLanguage(item)
											}}
										/>
										<div className='name flex items-center gap-1'>
											<img src={item.icon} alt='flagIcon' />
											<span className=''>{item.language}</span>
										</div>
									</figure>
								</label>
							)
						})}
					</div>
				</section>
			</div>

			<section className='grid z-[60] xs:grid-cols-2 xs:justify-items-center h-fit xs:gap-x-[9px] sm:grid-cols-1 sl:grid-cols-2 xm:grid-cols-3 l:grid-cols-4 auto-cols-auto gap-y-[20px] '>
				{teachersLoading
					? teachersArr.map(idx => {
							return <SkeletonTutor key={idx} />
					  })
					: teachers?.results?.map((item, idx) => {
							return (
								<SmallTeacherCard
									key={idx}
									data={item}
									audioPlayerData={audioPlayerData}
									setAudioPlayerData={setAudioPlayerData}
								/>
							)
					  })}
			</section>
		</div>
	)
}
