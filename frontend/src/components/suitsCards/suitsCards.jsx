import React from 'react'

export const SuitsCards = ({imgRoute, textBold, text }) => {
	return (
		<div>
			<div>
					<div className='flex'>
						<div className=' w-24  mt-10 '>
							<img src={imgRoute} alt={textBold} />
						</div>
						<div className='text-xl w-3/4 p-5 mt-6'>
							<p className='inline font-bold'>{textBold}</p> 
							<p className='inline'>{text}</p>
						</div>
					</div>

			</div>
		</div>
	)
}