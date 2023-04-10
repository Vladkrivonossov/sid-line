import logo from '../../assets/logo.svg'
import img from '../../assets/main.jpg'
import './Header.css'

export const Header = () => {
	return (
		<header className='header' id='header'>
			<img className='header__img' src={`${img}`} alt='main' />
			<nav className='header__navigation'>
				<ul className='navigation__links'>
					<li
						className='links__item'
						onClick={() => {
							const header = document.getElementById('header')

							console.log(header)
							if (!header) {
								return
							}

							header.scrollIntoView({ behavior: 'smooth', block: 'start' })
						}}
					>
						<a>B начало</a>
					</li>
					<li
						className='links__item'
						onClick={() => {
							const products = document.getElementById('products')

							console.log(products)
							if (!products) {
								return
							}

							products.scrollIntoView({ behavior: 'smooth', block: 'start' })
						}}
					>
						<a>O компании</a>
					</li>
					<li
						className='links__item'
						onClick={() => {
							const products = document.getElementById('products')

							console.log(products)
							if (!products) {
								return
							}

							products.scrollIntoView({ behavior: 'smooth', block: 'start' })
						}}
					>
						<a>Поставляемая продукция</a>
					</li>
					<li
						className='links__item'
						onClick={() => {
							const products = document.getElementById('products')

							console.log(products)
							if (!products) {
								return
							}

							products.scrollIntoView({ behavior: 'smooth', block: 'start' })
						}}
					>
						<a>Отрасли сотрудничество</a>
					</li>
					<li
						className='links__item'
						onClick={() => {
							const products = document.getElementById('products')

							console.log(products)
							if (!products) {
								return
							}

							products.scrollIntoView({ behavior: 'smooth', block: 'start' })
						}}
					>
						<a>Контакты</a>
					</li>
				</ul>
			</nav>
			<div className='header__logo'>
				<div className='logo__img'>
					<img src={`${logo}`} alt='logo' />
				</div>
				<div className='logo__title'>
					<div>комплексные поставки</div>
					<div>импортного промышленного оборудования</div>
				</div>
				<div className='logo__underline'></div>
				<p>Профессиональные услуги по закупке и доставке импортного оборудования и комплектующих.</p>
				<p>+7 (812) 679-66-69 // info@tk-euroline.ru</p>
			</div>
		</header>
	)
}