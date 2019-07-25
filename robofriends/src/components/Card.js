import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 robocard'>
            <img alt='robots' src={`https://robohash.org/${id}?size=150x150`} />
            <div>
                <h3>{name}</h3>
                <p><a href={`mailto:${email}`}>{email}</a></p>
            </div>

        </div>
    );
}

export default Card;