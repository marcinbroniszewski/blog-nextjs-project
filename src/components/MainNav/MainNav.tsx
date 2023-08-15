import styles from './MainNav.module.scss'
import BurgerBtn from './BurgerBtn/BurgerBtn'
import Image from 'next/image'
import logo from '../../../public/img/logo.png'

export default function MainNav() {
	return (
		<nav className='bg-main-black w-full h-28 text-gray-400'>
			<div className="container xl mx-auto flex justify-between lg:justify-normal h-full">
				<div className='p-3 lg:pl-5 flex justify-center items-center'>
					<Image src={logo} alt='logo icon' priority />
				</div>
				<div className='lg:hidden'>
					<BurgerBtn />
				</div>
				<ul className='hidden lg:flex justify-center items-center gap-3 w-full self-center text-gray-400'>
					<li className='text-gray-100'>Home</li>
					<li>Products</li>
					<li>Service</li>
					<li>Pricing</li>
					<li>Contacts</li>
				</ul>
			</div>
		</nav>
	)
}
