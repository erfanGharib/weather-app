import React, { Component } from 'react';
class Location extends Component {
    state = {
        currentCity:'london'
    }
    render() {
        return(
            <div className='w-full h-12 flex mb-6 justify-between items-center'>
                <div className='flex items-center w-1/5 ml-1'>
                    <i className='ico location'></i>
                    <span className='text-xl ml-1 font-medium capitalize'>{this.state.currentCity}</span>
                </div>

                <form className='relative flex flex-col rounded-lg h-full w-9/12 overflow-hidden'>
                    <input 
                        type="search" 
                        name="city-search" 
                        id="city-search" 
                        className='h-full w-full px-3 bg-white bg-opacity-80 outline-none text-opacity-60 text-sm text-black placeholder:text-black placeholder:opacity-40'
                        placeholder='Search Citys...'
                    />

                    <ul className='w-full absolute max-h-56 overflow-hidden flex flex-col'>
                        {}
                    </ul>
                </form>
            </div>
        );
    }
}

export default Location;