import React from 'react';
import './title.css';

function Title(props) {
	return (
		<div
			className='title-with-bg'
		>
			{props.title}
		</div>
	);
}
export default Title;