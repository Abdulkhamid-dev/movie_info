import React from 'react'

function Item({result, openPop}) {
    return (
        <div className='result' key={result.imdbID} onClick={() => openPop(result.imdbID)}>
            <img src={result.Poster} alt={result.Poster}/>
            <h3>{result.Title}</h3>
        </div>
    )
}

export default Item
