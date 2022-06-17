import React, { useState } from 'react';

function Cards(props) {
    const { title, description, content, url, urlToImage, key } = props.data;
    const [show, setShow] = useState(false);

    const handleClick = (e) => {
        if (show) {
            setShow(false);
        } else {
            setShow(true);
        }
    };

    return (
        <div className={'flex d-flex flex-row '} onClick={handleClick}>
            <img
                src={
                    urlToImage === null
                        ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
                        : urlToImage
                }
                className='card-img image'
                alt='...'
            />
            <div className='card-body'>
                <h5 className='card-title'>{title}</h5>

                {show ? (
                    <div>
                        <p className='card-text '>{description}</p>

                        <a href={url} className='btn btn-primary my-0 py-1 '>
                            See Full Story
                        </a>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}

export default Cards;
