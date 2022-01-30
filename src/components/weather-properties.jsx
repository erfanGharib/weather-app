import React, { Component } from 'react';
class WeatherProperties extends Component {
    render() {
        return(
            <div className='w-full h-full flex justify-between items-center'>
                <div className='flex flex-col justify-center h-3/4 w-1/2'>
                    <ul 
                        id='day-of-week' 
                        className='relative mb-5 text-opacity-90 flex flex-col overflow-hidden'
                    >
                        <li id='selected-day' className='capitalize text-6xl font-bold'>friday</li>
                    </ul>
                    <div className='flex items-center'>
                        <span id='humidity' className='mr-10 flex'>
                            <i className='ico mr-2 items-center humidity'></i>
                            <p className='font-bold'>30%</p>
                        </span>
                        <span id='wind-speed' className='flex'>
                            <i className='ico mr-2 items-center wind-speed'></i>
                            <p className='font-bold'>22kph</p>
                        </span>
                    </div>
                </div>

                <div className='flex justify-center items-center w-1/2'>
                    <span className='rainy bg-full block w-72 mt-15 h-40 bg-no-repeat'></span>
                </div>
            </div>
        );
    }
}

export default WeatherProperties;