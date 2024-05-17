import React from 'react'

export const Cards = ({ mark, imgRoute, title, text }) => {
	return (
		<div>
			<div>
				<div className=' px-12 pt-14 pb-9'>
					{mark === 'findCards' ? (
						<div>
							<img
								className='w-52 h-28 rounded-lg object-cover'
								src={imgRoute}
								alt={title}
							/>
						</div>
					) : mark === 'getCards' ? (
						<div className=' h-64 flex justify-center'>
							<img src={imgRoute} alt={title} />
						</div>
					) : (
						<div>
							<img src={imgRoute} alt={title} />
						</div>
					)}
					<div className=' pt-6 text-2xl font-extrabold text-mainColor'>
						<h3>{title}</h3>
					</div>
					<div className=' mt-3 text-lg text-mainColor'>
						<p>{text}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
