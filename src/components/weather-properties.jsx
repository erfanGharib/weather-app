import React, { Component } from 'react';
const dayNames = [
    'saturday',
    'sunday',
    'monday',
    'thursday',
    'wednesday',
    'tuesday',
    'friday'
];

class WeatherProperties extends Component {
    constructor(props) {
        super(props);
        this.days = [
            React.createRef(),
            React.createRef(),
            React.createRef(),
        ];
    }
    
    componentDidMount() {
        this.selectDay(0);
    }

    selectDay =(li_index)=> {
        this.days.forEach(value=>value.current.id='');
        this.days[li_index].current.id='selected-day';
    }

    render() {
        const {
            tempF, tempC, weatherText, 
            humidity, windSpeed, time, date_, 
            onDayChange
        } = this.props;
        const weatherIconCssClass = `bg-center opacity-90 ${weatherText.bg_icoText} bg-contain block w-40 h-28 bg-no-repeat`
        
        return (
            <div className='w-full h-full flex-col flex justify-between items-center'>
                <div className='flex flex-col justify-center items-center w-full'>
                    <span className={weatherIconCssClass}></span>
                    
                    <span 
                        id='weather-text' 
                        className='capitalize font-medium text-3xl'
                    >
                        {weatherText.apiText}
                    </span>
                    
                    <div className='flex items-center justify-between w-44'>
                        <span className='text-3xl font-light'>{tempC}<b className='text-xl'>C</b></span>
                        <span className='text-3xl font-light'>{tempF}<b className='text-xl'>F</b></span>
                    </div>
    
                    <div className='flex items-center justify-between w-44'>
                        <span id='humidity' title='humidity' className='items-center flex'>
                            <i className='ico mr-2 items-center humidity'></i>
                            <p className='font-light'>{humidity}</p>
                        </span>
                        <span id='wind-speed' title='wind speed' className='flex items-center'>
                            <i className='ico mr-2 items-center wind-speed'></i>
                            <p className='font-light'>{windSpeed}</p>
                        </span>
                    </div>
                    
                    <div className='flex items-center w-44 justify-between'>
                        <p className='font-light'>{time}</p>
                        <p className='font-light'>{date_}</p>
                    </div>
                </div>
    
                <div
                    id='day-of-week'
                    className='relative text-opacity-90 flex flex-col my-auto items-center'
                >
                    {this.days.map((value,li)=>
                        <button 
                            key={li}
                            ref={value}
                            onClick={()=>{
                                onDayChange(li);
                                this.selectDay(li);
                            }}
                            className='cursor-pointer transition duration-150 transform hover:scale-110 capitalize font-bold text-3xl opacity-50'
                        >
                            {dayNames[this.props.currentDay+li]}
                            <small className='text-lg font-light'>{li===0 ? '(today)' : ''}</small>
                        </button>
                    )}
                </div>
            </div>
        );
    }
}

export default WeatherProperties;