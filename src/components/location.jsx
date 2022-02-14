import React from 'react';

const Location = props => {
    return (
        <div className='w-full flex-col-reverse h-24 flex mb-6 justify-between items-center'>
            <div className='flex items-center mx-auto mt-4'>
                <i className='ico location'></i>
                <span className='text-xl ml-1 font-medium capitalize'>{props.currentCity}</span>
            </div>

            <form className='relative flex flex-col z-10 h-full opacity-95 w-full'>
                <input
                    type="text"
                    id="city-search"
                    className='h-12 bg-trimmedWhite rounded-lg rounded-t-lg w-full px-4 outline-none text-base text-gray-600 placeholder:text-gray-600 placeholder:opacity-30'
                    placeholder='Search Citys...'
                    ref={props.inputRef}
                    spellCheck='false'
                    autoComplete="off"
                    onInput={props.onSearch}
                />
                <i className='bg-cover w-6 h-6 search absolute top-3 opacity-50 right-3'></i>

                <ul id='search-result' className='z-10 rounded-b-lg w-full absolute top-12 max-h-56 overflow-hidden flex flex-col'>
                </ul>
            </form>
        </div>
    );
}

export default Location;