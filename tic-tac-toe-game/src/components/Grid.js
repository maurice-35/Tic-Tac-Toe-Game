import React from 'react'


const Grid = ({ val, chooseGrid }) => {
	

	return (
		<div className="grid" onClick={chooseGrid}>
			{val}
		</div>
	)
}

export default Grid