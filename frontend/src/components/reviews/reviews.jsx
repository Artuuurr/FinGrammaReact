import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

export const Reviews = () => {
	const settings = {
		className: 'center',
		centerMode: true,
		infinite: true,
		centerPadding: '60px',
		slidesToShow: 3,
		speed: 500,
		arrows: false,
	}
	return (
		<div className='slider-container'>
			<Slider {...settings}>
				<div className='m-10 '>
					<div className='h-96 ml-10 px-10 py-8 shadow-xl  rounded-xl'>
						<div className='flex py-4 items-center'>
							<div className=' w-16 h-16 mr-4'>
								<img
									className='rounded-full'
									src='/images/reviewIcon/116158.webp'
									alt=''
								/>
							</div>
							<div>
								<div className='font-bold text-xl'>Елизавета</div>
								<div>
									Балл за курс <b>10/10</b>
								</div>
							</div>
						</div>
						<div className='my-4'>
							Очередной курс команды 4brain , который принес ощутимую пользу как
							в плане саморазвития так и в профессиональном использовании.
							Спасибо огромное и удачи!
						</div>
					</div>
				</div>
				<div className='m-10 '>
					<div className='h-96 ml-10 px-10 py-8 shadow-xl  rounded-xl'>
						<div className='flex py-4 items-center'>
							<div className=' w-16 h-16 mr-4'>
								<img
									className='rounded-full'
									src='/images/reviewIcon/15231957585515.webp'
									alt=''
								/>
							</div>
							<div>
								<div className='font-bold text-xl'>Вадим</div>
								<div>
									Балл за курс <b>10/10</b>
								</div>
							</div>
						</div>
						<div className='my-4'>
							Не ожидала, что в таком относительно небольшом курсе будет СТОЛЬКО
							практик, кейсов и интересных занятий. Великолепная подача, никакой
							«воды». Уже с удовольствием рекомендую вас знакомым.
						</div>
					</div>
				</div>
				<div className='m-10 '>
					<div className='h-96 ml-10 px-10 py-8 shadow-xl  rounded-xl'>
						<div className='flex py-4 items-center'>
							<div className=' w-16 h-16 mr-4'>
								<img
									className='rounded-full'
									src='/images/reviewIcon/15477176271208.webp'
									alt=''
								/>
							</div>
							<div>
								<div className='font-bold text-xl'>Антон</div>
								<div>
									Балл за курс <b>10/10</b>
								</div>
							</div>
						</div>
						<div className='my-4'>
							Замечательный курс, очень много полезной и интересной информации в
							одном месте! Завершил с удовольствием, многие задания отрабатывал
							стразу на практике, получил первые результаты побед в спорах.
							Авторам спасибо!!!
						</div>
					</div>
				</div>
				<div className='m-10 '>
					<div className='h-96 ml-10 px-10 py-8 shadow-xl  rounded-xl'>
						<div className='flex py-4 items-center'>
							<div className=' w-16 h-16 mr-4'>
								<img
									className='rounded-full'
									src='/images/reviewIcon/15539464571652.webp'
									alt=''
								/>
							</div>
							<div>
								<div className='font-bold text-xl '>Зина</div>
								<div>
									Балл за курс <b>10/10</b>
								</div>
							</div>
						</div>
						<div className='my-4'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Aspernatur voluptatum obcaecati, magni quisquam ipsa ea animi
							sequi odit consequatur doloribus. Unde, et asperiores vero harum
							laborum cupiditate nostrum rerum ratione.
						</div>
					</div>
				</div>
				<div className='m-10 '>
					<div className='h-96 ml-10 px-10 py-8 shadow-xl  rounded-xl'>
						<div className='flex py-4 items-center'>
							<div className=' w-16 h-16 mr-4'>
								<img
									className='rounded-full'
									src='/images/reviewIcon/15820837751733.webp'
									alt=''
								/>
							</div>
							<div>
								<div className='font-bold text-xl'>Валерия</div>
								<div>
									Балл за курс <b>10/10</b>
								</div>
							</div>
						</div>
						<div className='my-4'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Aspernatur voluptatum obcaecati, magni quisquam ipsa ea animi
							sequi odit consequatur doloribus. Unde, et asperiores vero harum
							laborum cupiditate nostrum rerum ratione.
						</div>
					</div>
				</div>
				<div className='m-10'>
					<div className='h-96 ml-10 px-10 py-8 shadow-xl  rounded-xl'>
						<div className='flex py-4 items-center'>
							<div className=' w-16 h-16 mr-4'>
								<img
									className='rounded-full'
									src='/images/reviewIcon/16126668982725.webp'
									alt=''
								/>
							</div>
							<div>
								<div className='font-bold text-xl'>Оля</div>
								<div>
									Балл за курс <b>10/10</b>
								</div>
							</div>
						</div>
						<div className='my-4'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Aspernatur voluptatum obcaecati, magni quisquam ipsa ea animi
							sequi odit consequatur doloribus. Unde, et asperiores vero harum
							laborum cupiditate nostrum rerum ratione.
						</div>
					</div>
				</div>
				<div className='m-10 '>
					<div className='h-96 ml-10 px-10 py-8 shadow-xl  rounded-xl'>
						<div className='flex py-4 items-center'>
							<div className=' w-16 h-16 mr-4'>
								<img
									className='rounded-full'
									src='/images/reviewIcon/16281423321329.webp'
									alt=''
								/>
							</div>
							<div>
								<div className='font-bold text-xl'>Елизавета</div>
								<div>
									Балл за курс <b>10/10</b>
								</div>
							</div>
						</div>
						<div className='my-4'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Aspernatur voluptatum obcaecati, magni quisquam ipsa ea animi
							sequi odit consequatur doloribus. Unde, et asperiores vero harum
							laborum cupiditate nostrum rerum ratione.
						</div>
					</div>
				</div>
				<div className='m-10 '>
					<div className='h-96 ml-10 px-10 py-8 shadow-xl  rounded-xl'>
						<div className='flex py-4 items-center'>
							<div className=' w-16 h-16 mr-4'>
								<img
									className='rounded-full'
									src='/images/reviewIcon/16720726884079.webp'
									alt=''
								/>
							</div>
							<div>
								<div className='font-bold text-xl'>Елизавета</div>
								<div>
									Балл за курс <b>10/10</b>
								</div>
							</div>
						</div>
						<div className='my-4'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Aspernatur voluptatum obcaecati, magni quisquam ipsa ea animi
							sequi odit consequatur doloribus. Unde, et asperiores vero harum
							laborum cupiditate nostrum rerum ratione.
						</div>
					</div>
				</div>
			</Slider>
		</div>
	)
}
