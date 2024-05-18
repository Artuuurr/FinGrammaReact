import React from 'react'

export const AnchorForCourses = ({ text }) => {
	return (
		<button><a href='#Payment'>
			<div href='#Payment' className='flex items-center mt-10'>
				
					<span className='button-item flex rounded-full bg-minorColor w-14 h-14 before:w-1 before:h-6 before:bg-white before:absolute before:rounded-full before:mt-4 before:ml-[26px]  after:w-6 after:h-1 after:bg-white after:absolute after:rounded-full after:mt-[26px]  after:ml-4  ease-in-out hover:rotate-360 cursor-pointer'></span>
					<span className='text-xl  pl-6 font-bold text-minorColor font-bold'>
						{text}
					</span>
				
			</div></a>
		</button>
	)
}
