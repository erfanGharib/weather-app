import React, { Component } from 'react';
import cities from 'cities.json';
import ReactDOM from 'react-dom';

class Location extends Component {
    constructor() {
        super();
        this.inputRef = React.createRef();
    }
    render() {
        return (
            <div className='w-full flex-col-reverse h-24 flex mb-6 justify-between items-center'>
                <div className='flex items-center mx-auto mt-4'>
                    <i className='ico location'></i>
                    <span className='text-xl ml-1 font-medium capitalize'>shahrud</span>
                </div>

                <form className='relative flex flex-col h-full w-full'>
                    <input
                        type="search"
                        name="city-search"
                        id="city-search"
                        className='h-12 rounded-lg w-full px-3 bg-white bg-opacity-80 outline-none text-base text-gray-900 placeholder:text-gray-900 placeholder:opacity-30'
                        placeholder='Search Citys...'
                        ref={this.inputRef}
                        onInput={this.citySearch}
                    />
                    <i className='bg-cover w-6 h-6 search absolute top-3 opacity-50 right-3'></i>

                    <ul id='search-result' className='z-10 w-full absolute top-14 rounded-lg shadow-2xl max-h-56 overflow-hidden flex flex-col'>
                    </ul>
                </form>
            </div>
        );
    }

    citySearch = () => {
        this.props.updateWeather();
        cities.forEach((n, index, arr) => {
            if (n.name.toLowerCase().startsWith(this.inputRef.current.n))
                ReactDOM.render(
                    <li
                        className='search-result-child'
                        onClick={this.setState({ currentCity: n.name })}
                        key={index}
                    >
                        {n.name}
                    </li>,
                    document.querySelector('#search-result')
                )
            if (index === 100)
                return;
        })
    }
    // showSearchResult(n,index) {
    //     [1,2,3,4].map(()=>{
    //         return (
    //             <li
    //                 className='search-result-child' 
    //                 onClick={this.setState({currentCity: n.name})} 
    //                 key={index}
    //             >
    //                 {n.name}
    //             </li>
    //         )
    //     })
    // }
}

export default Location;