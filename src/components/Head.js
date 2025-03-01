import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/Constants';
import { cacheResults } from '../utils/SearchSlice';


const Head = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector((store) => store.search);

    useEffect(() => {
        const timer = setTimeout(() => {
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery]);
            }
            else{
                getSearchSuggestions();
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery]);

    const disPatch = useDispatch();

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);

        disPatch(cacheResults({
            [searchQuery]: json[1]
        }))
    }

    const toggleMenuHandler = () => {
        disPatch(toggleMenu());
    }

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img onClick={() => toggleMenuHandler()}
             className='h-8 cursor-pointer' alt="ham-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"/>
            <img className='h-8 mx-2' alt="youtube-logo" src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo.png"/>
        </div>

        <div className='col-span-10 px-10'>
            <div>
                <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type="text" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
                onFocus={() => setShowSuggestions(true)} 
                onBlur={() => setShowSuggestions(false)}/>

                <button className='border border-gray-400 px-5 py-2 bg-gray-200 rounded-r-full'>🔍</button>
            </div>

            {showSuggestions && <div className='fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100'>
                <ul>
                    {suggestions.map((s) => (
                        <li className='py-2 px-3 shadow-sm hover:bg-gray-200'>🔍 {s} </li>
                    ))}
                </ul>
            </div>}
        </div>

        <div className='col-span-1'>
            <img className='h-8' alt="user-icon" src="https://cdn-icons-png.flaticon.com/512/149/149071.png"/>
        </div>
    </div>
  )
}

export default Head