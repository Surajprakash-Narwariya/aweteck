import React, { useState, useEffect } from 'react';
import Cards from './cards';
const axios = require('axios');

const axio = axios.create({
    baseURL: 'https://newsapi.org/v2/',
    headers: { 'X-Api-Key': '8e314096fa9b4949bd93728397c1dc3c' },
});

function Home() {
    const [news, setNews] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        if (search === '') {
            axio.get('top-headlines?country=in').then((res) => {
                // console.log(res.data.articles);
                setNews(res.data.articles);
            });
        } else {
            axio.get(`everything?q=${search}`).then((res) => {
                setNews(res.data.articles);
            });
        }
    }, [search]);

    const handleSearch = (e) => {
        const value = document.getElementById('searchNews').value;
        setSearch(value);
        document.getElementById('searchNews').value = '';
    };

    return (
        <div className='bg'>
            <h1 className='mx-auto text-center my-4 '>Aweteck News Portal </h1>
            <div className='row my-3'>
                <div className='col-md-4 mx-auto'>
                    <div
                        className='d-flex justify-content-center'
                        role='search'
                    >
                        <input
                            className='form-control me-2'
                            type='search'
                            placeholder='Search News'
                            aria-label='Search'
                            id='searchNews'
                        />
                        <button
                            className='btn btn-outline-success'
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                    <div className='row'>
                        <div className='col-md-8 mx-auto'>
                            {search !== '' ? (
                                <h3 className='my-3'>
                                    Showing result for "{search}"{' '}
                                </h3>
                            ) : (
                                <h3 className='my-3'> Top HeadLines</h3>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {news.length !== 0 ? (
                news.map((item, key) => {
                    return (
                        <div className='row my-2 ' key={key}>
                            <div className='col-md-8 mx-auto '>
                                <div id='click' className='card  bg_card '>
                                    <Cards key={key} data={item} />
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div className='mx-auto text-center fs-2'>
                    Data is loading
                    <div
                        className='spinner-grow text-secondary ml-3'
                        role='status'
                    ></div>
                </div>
            )}

            <div></div>
        </div>
    );
}

export default Home;
