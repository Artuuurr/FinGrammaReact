import React from 'react'
import { Cards } from './components/Cards/Cards'
import { AnchorForCourses } from './components/button/AnchorForCourses'
import { MainSection } from './components/mainSection/mainSection'
import { NavItem } from './components/navItem'
import { Reviews } from './components/reviews/reviews'
import { SuitsCards } from './components/suitsCards/suitsCards'
import { TitleSection } from './components/titleSection/titleSection'
import { ReactComponent as Calendar } from './images/calendar.svg'
import { ReactComponent as Graduation } from './images/graduation-cap.svg'
import { ReactComponent as Logo } from './images/logo.svg'
import { ReactComponent as Work } from './images/work.svg'

function App() {
	return (
		<div>
			<div className='container mx-auto  px-10 pt-8'>
				<header className='flex items-center'>
					<Logo className='w-40 h-14' />
					<nav className='flex ml-auto'>
						<NavItem text='Записаться' />
					</nav>
				</header>
				<MainSection />
			</div>
			<div className='backgroundGradient  py-9'>
				<div className='container mx-auto flex justify-around'>
					<div>
						<Calendar className='w-16 h-16' />
						<p className='text-mainColor text-2xl mt-3 font-semibold'>
							31 день
						</p>
					</div>
					<div>
						<Graduation className='w-16 h-16' />
						<p className='text-mainColor text-2xl mt-3 font-semibold'>
							6 уроков
						</p>
					</div>
					<div>
						<Work className='w-16 h-16' />
						<p className='text-mainColor text-2xl mt-3 font-semibold'>
							13 упражнений
						</p>
					</div>
				</div>
			</div>
			<div className='container mx-auto flex py-28'>
				<div>
					<TitleSection text='На этом курсе вы научитесь:' />

					<div className='grid grid-cols-3 pt-14 '>
						<Cards mark='whyCards' imgRoute='/images/check.svg' title='Основам и определениям' text='Получите четкое понимание того, что такое финансовая грамотность и почему она является краеугольным камнем успеха в любой сфере жизни.' />
						<Cards mark='whyCards' imgRoute='/images/users.svg' title='Пониманию сути денег' text='Изучите историческое и современное значение денег, их свойства и роль в экономике.' />
						<Cards mark='whyCards' imgRoute='/images/edit.svg' title='Планированию своих финансов' text='Научитесь эффективно планировать свой бюджет и вести финансовый учет.' />
						<Cards mark='whyCards' imgRoute='/images/briefcase.svg' title='Понимать финансовую систему' text='Изучите, как устроена глобальная финансовая система, каковы функции и роль различных финансовых организаций, и как это влияет на вашу личную финансовую жизнь.' />
						<Cards mark='whyCards' imgRoute='/images/bullseye.svg' title='Инвестированию и накоплению' text='Освоите базовые принципы инвестирования и накопления. Узнаете, как разумно вкладывать средства и строить свой капитал.' />
						<Cards mark='whyCards' imgRoute='/images/human.svg' title='Развитию финансового мышления' text='Преобразите свой подход к деньгам, улучшите свое финансовое мышление для более эффективного управления личными финансами.' />
					</div>
					<div className='flex justify-center '>
						<AnchorForCourses text='Хочу научиться!' />
					</div>
				</div>
			</div>

			<div className='backGround w-full text-white'>
				<div className='container mx-auto flex py-28 backGround'>
					<div>
						<div className='flex'>
							<div className=' w-2/5'>
								<TitleSection text='Курс вам подходит, если:' />
							</div>
							<div className=' w-3/5'>
								<SuitsCards imgRoute='/images/icon-list.svg' textBold='Вы хотите наладить личные финансы' text=' и стремитесь к более эффективному управлению своими доходами и расходами.' />
								<SuitsCards imgRoute='/images/icon-analyst.svg' textBold='Вы планируете начать инвестировать' text=' и хотите изучить основы управления своими инвестициями.' />
								<SuitsCards imgRoute='/images/icon-handshake.svg' textBold='Вы бизнесмен или руководитель' text=', поэтому нуждаетесь в глубоком понимании финансов для лучшего управления бизнесом.' />
								<SuitsCards imgRoute='/images/icon-tribune.svg' textBold='Вы ищете уверенность в финансовых решениях' text=', хотите научиться создавать и увеличивать свои сбережения для будущих целей.' />
								<SuitsCards imgRoute='/images/icon-dreaming.svg' textBold='Вы стремитесь к финансовой независимости' text=', желаете улучшить свое критическое мышление в финансовой сфере.' />
								<SuitsCards imgRoute='/images/icon-joy.svg' textBold='Вы заинтересованы в развитии финансового мышления' text=', хотите научиться принимать их обдуманно и взвешенно.' />
							</div>
						</div>
						<div className='flex '>
							<AnchorForCourses text='Мне подходит!' />
						</div>
					</div>
				</div>
			</div>
			<div className='container mx-auto flex py-28'>
				<div>
					<TitleSection text='Что я узнаю?' />
					<div className='grid grid-cols-3 pt-14 '>
						<Cards mark='findCards' imgRoute='/images/53.webp' title='Что такое финансовая грамотность' text='Определение финансовой грамотности, ее важность и влияние на личную и профессиональную жизнь.' />
						<Cards mark='findCards' imgRoute='/images/22.webp' title='Сущность товара и денег' text='История и эволюция денег, понимание их как товара и функции в современной экономике.' />
						<Cards mark='findCards' imgRoute='/images/1.webp' title='Личное финансовое планирование' text='Методы и стратегии для управления личными финансами, включая планирование бюджета и сбережений.' />
						<Cards mark='findCards' imgRoute='/images/6.webp' title='Финансовые организации и их роль' text='Разбор структуры и функций финансовых организаций, включая централизованные и децентрализованные системы.' />
						<Cards mark='findCards' imgRoute='/images/44.webp' title='Психология денег' text='Как отношение к деньгам влияет на финансовое поведение и как развить здоровые финансовые привычки.' />
						<Cards mark='findCards' imgRoute='/images/2.webp' title='Инструменты финансового анализа' text='Основные инструменты и методы для анализа финансовой информации и принятия обоснованных финансовых решений.' />
					</div>
					<div className='flex justify-center '>
						<AnchorForCourses text='Записаться' />
					</div>
				</div>
			</div>
			<div className='container mx-auto flex py-28'>
				<div>
					<div className='flex justify-center'>
						<TitleSection text='Что я получу после окончания курса?' />
					</div>
					<p className='text-center mt-4 text-2xl text-mainColor'>
						Кроме новых применимых на практике знаний, умений и навыков вы
						получите много полезного.
					</p>
					<div className='grid grid-cols-3 pt-14 text-center'>
						<Cards mark='getCards' imgRoute='/images/what-after-diploma.webp' title='Онлайн-сертификат' text='Об участии в онлайн-программе с подписью и печатью ООО 4брэйн.' />
						<Cards mark='getCards' imgRoute='/images/what-after-summary.webp' title='Дополнительные материалы' text='Сохраняйте ссылки на статьи, названия книг и другие полезные ресурсы.' />
						<Cards mark='getCards' imgRoute='/images/what-after-statistics.webp' title='Статистика' text='Информация о вашем прогрессе на программе и в отдельных упражнениях.' />
					</div>
					<div className='flex justify-center'>
						<AnchorForCourses text='Хочу на курс!' />
					</div>
				</div>
			</div>
			<div className='container mx-auto flex py-28'>
			<div className='mx-auto'>
						<div className='flex justify-center'>
							<TitleSection className='text-center' text='Отзывы о курсах 4brain:' />
						</div>
						<div className='mt-20 max-w-[1200px]'>
							<Reviews />
						</div>
					</div>
			</div>
		</div>
	)
}

export default App
