import React from 'react';

const Card = ({ anime }) => {
    return (
        <>
            <article>
                <figure>
                    <img src={anime.image_url} alt="Anime image" />
                </figure>
                <a href={anime.url} target="_blank" rel="noreferrer">
                    <h3>{anime.title}</h3>
                </a>
            </article>
        </>
    )
}

export default Card;
