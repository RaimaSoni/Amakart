import { Fragment, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom";

//What is useParams React router?  ReactV6 
//The useParams() hook is a React Router hook that
//allows you to access the parameters of the current URL.
//This can be useful if you want to dynamically render content
//based on the URL parameters. 


const SearchBox = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState("")

    const urlSearch = searchParams.get("search");

    useEffect (() => {
        setSearch(urlSearch || "");
    }, [urlSearch]);

    const handleInput = e => {
        setSearch(e.target.value)
    }
    const handleFormSubmission = e => {
        e.preventDefault();
        setSearchParams({
            search: search
    });
    }
    
    return (
        <Fragment>
            <form onSubmit={handleFormSubmission}>
                    <input name="search" type="text"
                        id="search" 
                        placeholder="Enter product name, category"
                        value={search}
                        onChange={handleInput}
                        /> 
                    <button type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            className="icon icon-tabler icon-tabler-search" 
                            width="20"
                            height="20" viewBox="0 0 24 24" 
                            strokeWidth="1.5" stroke="white" fill="none"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="10" cy="10" r="7" />
                            <line x1="21" y1="21" x2="15" y2="15" />
                        </svg>
                    </button>
                </form>
                <svg xmlns="http://www.w3.org/2000/svg" 
                    className="icon icon-tabler icon-tabler-search" 
                    width="20"
                    height="20" viewBox="0 0 24 24" 
                    strokeWidth="1.5" stroke="white" 
                    fill="none" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
        </Fragment>
    )
}

export default SearchBox