import React from 'react'


function Grid ({ val, chooseGrid }) {
	

	return (
		<div className="grid" onClick={chooseGrid}>
			{val}
		</div>
	)
}

export default Grid