import React from 'react'

export const NavItem = ({ text }) => {
	return (
		<div className='px-4 py-2 cursor-pointer border rounded-xl border-black hover:text-white hover:bg-black'>
			<span className='text-lg'>{text}</span>
		</div>
	)
}
