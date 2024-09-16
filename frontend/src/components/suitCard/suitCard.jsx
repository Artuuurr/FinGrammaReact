import React from 'react'

function SuitCard({ imgRoute, textBold, text }) {
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

export function SuitCardList() {
	const suitCards = [
		{
			imgRoute: '/images/icon-list.svg',
			textBold: 'Вы хотите наладить личные финансы',
			text:
				' и стремитесь к более эффективному управлению своими доходами и расходами.',
		},
		{
			imgRoute: '/images/icon-analyst.svg',
			textBold: 'Вы планируете начать инвестировать',
			text: ' и хотите изучить основы управления своими инвестициями.',
		},
		{
			imgRoute: '/images/icon-handshake.svg',
			textBold: 'Вы бизнесмен или руководитель',
			text:
				', поэтому нуждаетесь в глубоком понимании финансов для лучшего управления бизнесом.',
		},
		{
			imgRoute: '/images/icon-tribune.svg',
			textBold: 'Вы ищете уверенность в финансовых решениях',
			text:
				', хотите научиться создавать и увеличивать свои сбережения для будущих целей.',
		},
		{
			imgRoute: '/images/icon-dreaming.svg',
			textBold: 'Вы стремитесь к финансовой независимости',
			text: ', желаете улучшить свое критическое мышление в финансовой сфере.',
		},
		{
			imgRoute: '/images/icon-joy.svg',
			textBold: 'Вы заинтересованы в развитии финансового мышления',
			text: ', хотите научиться принимать их обдуманно и взвешенно.',
		},
	]

	return (
		<div>
			{suitCards.map((card, index) => (
				<SuitCard
					key={index}
					imgRoute={card.imgRoute}
					textBold={card.textBold}
					text={card.text}
				/>
			))}
		</div>
	)
}

export default SuitCardList
