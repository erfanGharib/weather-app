import React from 'react';
const dayNames = [
    'saturday',
    'sunday',
    'monday',
    'thursday',
    'wednesday',
    'tuesday',
    'friday'
]
const WeatherProperties =props=> {
    return (
        <div className='w-full h-full flex-col flex justify-between items-center'>
            <div className='flex flex-col justify-center items-center w-full'>
                <span className='bg-center opacity-90 snowy bg-contain block w-40 h-28 bg-no-repeat'></span>
                
                <span id='weather-text' className='capitalize font-medium text-3xl'>{props.weatherText}</span>
                
                <div className='flex items-center justify-between w-44'>
                    <span className='text-3xl font-light'>{props.tempC}<b className='text-xl'>C</b></span>
                    <span className='text-3xl font-light'>{props.tempF}<b className='text-xl'>F</b></span>
                </div>

                <div className='flex items-center justify-between w-44'>
                    <span id='humidity' title='humidity' className='items-center flex'>
                        <i className='ico mr-2 items-center humidity'></i>
                        <p className='font-light'>{props.humidity}</p>
                    </span>
                    <span id='wind-speed' title='wind speed' className='flex items-center'>
                        <i className='ico mr-2 items-center wind-speed'></i>
                        <p className='font-light'>{props.windSpeed}</p>
                    </span>
                </div>
                
                <div className='flex items-center w-44 justify-between'>
                    <p className='font-light'>{props.time}</p>
                    <p className='font-light'>{props.date_}</p>
                </div>
            </div>

            <ul
                id='day-of-week'
                className='relative text-opacity-90 flex flex-col my-auto items-center overflow-hidden'
            >
                <li id='selected-day' className='capitalize text-4xl font-bold'>
                    {dayNames[props.selectedDay]}
                </li>
                <li id='selected-day' className='capitalize text-3xl opacity-50 font-medium'>
                    {dayNames[props.selectedDay+1]}
                </li>
                <li id='selected-day' className='capitalize text-3xl opacity-50 font-medium'>
                    {dayNames[props.selectedDay+2]}
                </li>
            </ul>
        </div>
    );
}

export default WeatherProperties;