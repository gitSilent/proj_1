import camera from '../media/LinguaImages/LinguaCamera.webp'
import macbook from '../media/LinguaImages/LinguaMac.webp'
import speaker from '../media/LinguaImages/LinguaSpeaker.webp'
import speaker_img from '../media/Speaker.webp'
import AboutCard from './AboutCard'

export default function AboutLinguaSpace() {
	return (
		<main className='w-full mx-auto mx:min-h-[810px] mb-[45px] h-fit m:h-full max-h-[815px] xs:max-sm:pb-[15px] max-w-[1200px]'>
			<article className='px-[20px] mb-[25px]'>
				<span className='block font-semibold italic text-[16px] mb-[12px] text-[#00BA61]'>
					Наши ценности
				</span>
				<h2 className='font-black text-[#2D2D2D] text-[28px]  l:text-[48px]'>
					О лингвистическом <br /> пространстве INSPIRA
					<span className='text-[#00BA61]'>”</span>
				</h2>
			</article>

			<section className='relative'>
				<img
					src={speaker_img}
					style={{ rotate: '12deg' }}
					alt=''
					className='absolute medium-levitate left-[-50px] top-[100px] rotate-12 l:hidden'
				/>
				<div className='relative max-w-[1200px] px-[20px] mx:px-0 l:px-[20px] flex hideScroll gap-[10px] mx:pb-[90px] h-fit m:h-full max-h-[820px] overflow-y-hidden overflow-x-scroll mx:justify-between mx:overflow-x-hidden'>
					<img
						style={{ scale: '33%' }}
						src={camera}
						alt=''
						className='hidden small-levitate l:block absolute object-cover w-full rotate-[-2deg] scale-[33%] top-[-200px] l:top-[-400px] right-[-179px] '
					/>
					<img
						style={{ scale: '68%' }}
						src={macbook}
						alt=''
						className='hidden medium-levitate l:block absolute object-cover w-full rotate-[-2deg] scale-[68%] top-[-200px] l:top-[-254px] right-[111px] '
					/>
					<img
						style={{ scale: '63%' }}
						src={speaker}
						alt=''
						className='hidden hard-levitate l:block absolute object-cover w-full rotate-[-2deg] scale-[63%] top-[-200px] l:top-[111px] right-[-72px] '
					/>
					<div className='flex gap-[10px] mx:flex-col l:pt-[40px] mx:gap-[20px]'>
						<AboutCard
							title='Никаких секретов'
							desc='Мы ничего не скрываем! Все самое важное  о нас можно найти в наших социальных сетях и в блоге нашего руководителя. Не нашли ответы на свои вопросы? Тогда обращайтесь к нашим менеджерам и они развеют ваши сомнения!'
							bgChar='1'
							addStyles='top-[-30px]'
						/>
						<AboutCard
							title={`Индивидуальный подход - КЛЮЧ ко всему!`}
							desc='Все мы очень разные и одни и те же методы не работают универсально. Именно поэтому мы предлагаем Вам курсы разработанные согласно Вашим целям и способностям, для оптимизации процесса. Как мы это делаем? Сначала мы проводим тщательное тестирование, которое раскроет все Ваши сильные стороны и подсветит слабые. И только так Вы добьётесь своих целей!'
							bgChar='2'
						/>
						<AboutCard
							title='Работаем со всеми'
							desc='75 лет или 6 - неважно. Вы глубокий технарь? - Не проблема. Работаем с детьми и взрослыми занятыми в любых сферах. Главное - подход и огромное желание покорять новые вершины! Напишите - и мы развеем любые Ваши сомнения!'
							bgChar='3'
							addStyles='top-[-30px]'
						/>
					</div>

					<div className='flex gap-[10px] mx:flex-col l:pt-[40px] mx:gap-[20px]'>
						<AboutCard
							title='Опытные специалисты лингвистики и педагогики'
							desc='Наши репетиторы - настоящие асы своего дела. Пройдя строгий отбор, имея средний опыт преподавания 10 лет и высшее лингвистическое образование, они успели решить тысячи невыполнимых задач и смогут найти подход к каждому, вне зависимости от возраста, пола, профессии и навыков.'
							bgChar='4'
						/>
						<AboutCard
							title='Scrum-Agile'
							desc='Подход основанный на четком планировании и формулировании целей с дедлайнами, не оставят Вам шанса не освоить язык.'
							bgChar='5'
							addStyles='top-[-45px]'
						/>
						<AboutCard
							title='Все честно!'
							desc='Мы не будем рассказывать Вам, что Вы заговорите за три дня или что С1 можно достичь за месяц. (Спойлер: все индивидуально). Обучение - нелегкий процесс именно поэтому, получив свой индивидуальный план, мы дадим Вам четкое понимание как и за какое время можно освоить те или иные навыки.'
							bgChar='6'
							addStyles='top-[-15px]'
						/>
					</div>
				</div>
			</section>
		</main>
	)
}
