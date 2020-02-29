import React from 'react'
import Image from '../components/Image'
import Icon from '../Icons/Icon'

import Link from '../router/Link'
const Navbar = () => (
	<div className='navbar'>
		<Link href='/'>
			<Icon type='home'/>
			Home
		</Link>
		<Link href='/sheets'>
			<Icon type='library_music'/>
			Sheets
		</Link>
		<Link href='/otaku'>
			<Image src='rem.gif'/>
			オタク
		</Link>
		<a className='link' href='/dome/index.html' target='_blank'>
			<Icon type='videogame_asset'/>
			Dome
		</a>
	</div>
)

export default Navbar