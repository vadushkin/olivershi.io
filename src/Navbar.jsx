import React from 'react'
import Image from './components/Image'
import Icon from './components/Icon'
import Link from './components/Link'

const Navbar = () => (
	<div className='navbar'>
		<Link className='navbar-link navbar-link--first' href='/'>
			<Icon type='home'/>
			Home
		</Link>
		<Link className='navbar-link' href='/sheets'>
			<Icon type='library_music'/>
			Sheets
		</Link>
		<Link className='navbar-link' href='/otaku'>
			<Image className='navbar-rem' src='optimized_rem.gif'/>
			オタク
		</Link>
		<a className='link navbar-link navbar-link-dome' href='/dome/index.html' target='_blank'>
			<Icon type='videogame_asset'/>
			Dome
		</a>
	</div>
)

export default Navbar