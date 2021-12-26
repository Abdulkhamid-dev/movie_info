import React from 'react'

function Popup({selected, closePop}) {
    return (
        <div className='popup'>
            <div className="content">
                <h2 className='title_movie'>{selected.Title} <span>{selected.Year}</span></h2>
                <p className="rating">Rating: {selected.imdbRating}</p>
                <div className="plot">
                   <div> <img src={selected.Poster} alt={selected.Poster} /></div>
                    <div>
                        <h2><strong>Actors:</strong> <small>{selected.Actors}</small></h2>
                        <h2><strong>Country:</strong> <small>{selected.Country}</small></h2>
                        <h2><strong>Information:</strong> <h5>{selected.Plot}</h5></h2>
                    </div>
                </div>
                <button className="btn_react" onClick={closePop}>Close</button>
            </div>
            
        </div>
    )
}

export default Popup
