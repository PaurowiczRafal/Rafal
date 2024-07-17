import React, { useState } from 'react'

import './AboutCards.scss'

import Elipse from '../../../img/elipse/about-elipse.svg'
import CssIcon from '../../../icon/stack-icons/css.svg'
import TypeScriptIcon from '../../../icon/stack-icons/typescript.svg'
import HtmlIcon from '../../../icon/stack-icons/html.svg'
import CshrpIcon from '../../../icon/stack-icons/csharp.svg'
import TailwindIcon from '../../../icon/stack-icons/tailwind.svg'
import ReactIcon from '../../../icon/stack-icons/react.svg'

const About_2 = () => {
	// State to manage which icon is hovered
	const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

	// Event handlers that accept an icon identifier
	const handleMouseEnter = (iconId: string) => setHoveredIcon(iconId)
	const handleMouseLeave = () => setHoveredIcon(null)

	return (
		<div className='aboutCard aboutCard-2'>
			<div className=''>
				<p className='aboutCard-2-heading'>My stack</p>
			</div>
			<div className=''>
				<div className='aboutElipse'>
					<img
						src={Elipse}
						alt=''
					/>
				</div>
				<div className='aboutElipse-border aboutElipse-border-3'>
					<div className=''>
						<div className={`iconHover-css ${hoveredIcon === 'css' ? 'iconHover-css-h' : ''}`}></div>
						<img
							src={CssIcon}
							alt='CssIcon'
							className='icon icon-css'
							onMouseEnter={() => handleMouseEnter('css')}
							onMouseLeave={handleMouseLeave}
						/>
					</div>
					<div className=''>
						<div
							className={`iconHover-typescript ${hoveredIcon === 'typescript' ? 'iconHover-typescript-h' : ''}`}></div>
						<img
							src={TypeScriptIcon}
							alt='TypeScriptIcon'
							className='icon icon-typescript'
							onMouseEnter={() => handleMouseEnter('typescript')}
							onMouseLeave={handleMouseLeave}
						/>
					</div>
					<div className=''>
						<div className={`iconHover-html ${hoveredIcon === 'html' ? 'iconHover-html-h' : ''}`}></div>
						<img
							src={HtmlIcon}
							alt='HtmlIcon'
							className='icon icon-html'
							onMouseEnter={() => handleMouseEnter('html')}
							onMouseLeave={handleMouseLeave}
						/>
					</div>
				</div>
				<div className='aboutElipse-border aboutElipse-border-2'>
					<div className=''>
						<div className={`iconHover-csharp ${hoveredIcon === 'csharp' ? 'iconHover-csharp-h' : ''}`}></div>
						<img
							src={CshrpIcon}
							alt='CshrpIcon'
							className='icon icon-csharp'
							onMouseEnter={() => handleMouseEnter('csharp')}
							onMouseLeave={handleMouseLeave}
						/>
					</div>
				</div>
				<div className='aboutElipse-border aboutElipse-border-1'>
					<div className=''>
						<div className={`iconHover-tailwind ${hoveredIcon === 'tailwind' ? 'iconHover-tailwind-h' : ''}`}></div>
						<img
							src={TailwindIcon}
							alt='TailwindIcon'
							className='icon icon-tailwind'
							onMouseEnter={() => handleMouseEnter('tailwind')}
							onMouseLeave={handleMouseLeave}
						/>
					</div>
					<div className=''>
						<div className={`iconHover-react ${hoveredIcon === 'react' ? 'iconHover-react-h' : ''}`}></div>
						<img
							src={ReactIcon}
							alt='ReactIcon'
							className='icon icon-react'
							onMouseEnter={() => handleMouseEnter('react')}
							onMouseLeave={handleMouseLeave}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About_2
