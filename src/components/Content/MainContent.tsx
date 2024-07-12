import React from 'react'

import './MainContent.scss'

const MainContent = (props: React.PropsWithChildren<{}>) => {
	return <div className='mainContent'>{props.children}</div>
}

export default MainContent
