import React from 'react'
import { ReactComponent as Finance } from '../../images/finance.svg'
import { AnchorForCourses } from '../button/AnchorForCourses'

export const MainSection = () => {
	return (
		<div className=' flex pt-20 pb-24'>
			<div className=' w-1/2'>
				<span className=' text-[#9fa1b3] text-xl font-bold'>экспресc-курс</span>
				<h1 className='mt-5 text-mainColor text-6xl font-bold'>Финансовая <br />грамотность</h1>
				<p className=' pt-11 text-mainColor text-lg'>Вы узнаете, как работает финансовая система, как зарабатывать деньги и управлять ими.</p>
				<AnchorForCourses text='Записаться на курс'/>
			</div>
			<div className='flex w-1/2 justify-center h-2/4'>
				<div className='w-3/4 ml-3'>
					<Finance />
				</div>
			</div>
		</div>
	)
}
