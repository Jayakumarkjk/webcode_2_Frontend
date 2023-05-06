import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"


const SearchBar = ( { products, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(products)

        const resultsArray = products.filter(product => product.name && product.name.toLowerCase().includes(e.target.value) || product.price.includes(e.target.value))

            setSearchResults(resultsArray)
    }

    return (
        <header>
            <form className="search" onSubmit={handleSubmit} >
                <input className="search_input"
                type="text"
                id="search"
                placeholder="type your mobile brand"
                onChange={handleSearchChange} />
                <button className="search_button" >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </header>
    )



}

export default SearchBar