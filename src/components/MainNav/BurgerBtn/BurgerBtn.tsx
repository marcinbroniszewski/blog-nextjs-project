'use client'

import styles from './BurgerBtn.module.scss'
import { useState } from 'react'

export default function BurgerBtn() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(prevState => !prevState)
	}

	const burgerClosedClasses = 'w-0 invisible'
	const burgerOpenClasses = 'w-full visible'

	return (
		<>
			<div>
				<button type='button' className='p-3' onClick={toggleMenu}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-14 h-14  text-lime'>
						<path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12' />
					</svg>
				</button>

				<div
					className={`absolute inset-0 h-full bg-white ${styles['mobile-container']} ${
						isMenuOpen ? burgerOpenClasses : burgerClosedClasses
					}`}>
					<button type='button' onClick={toggleMenu} className='p-3'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-14 h-14'>
							<path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
						</svg>
					</button>

					<ul className='flex justify-self-center h-full flex-col justify-center items-center'>
						<li className='py-3'>Home</li>
						<li className='py-3'>Products</li>
						<li className='py-3'>Service</li>
						<li className='py-3'>Pricing</li>
						<li className='py-3'>Contacts</li>
					</ul>
				</div>
			</div>
		</>
	)
}
