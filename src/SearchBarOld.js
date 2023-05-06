// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { API } from "./global.js";


// export const SearchBar = ({setResults}) => {
//     const [input, setInput] = useState("");

//     const fetchData = (value) => {
//         fetch(`${API}/api/products`, {
//             method: "GET",
//             headers: {
//                 "Access-Control-Allow-Origin": "*",
//             },
//         })
//         .then((res) => res.json())
//         .then ((json) => {
//             const results = json.filter ((product) => {
//                 return (
//                     value && 
//                 product && 
//                 product.name && 
//                 product.name.toLowerCase().includes(value)
//                 );
//             });  
//             setResults(results);
// });

//     };

//     const handleChange = (value) => {
//         setInput(value)
//         fetchData(value)

//     }

//     return (
//         <div className="input-wrapper">
//         <FaSearch id="search-icon" />
//         <input placeholder="Type to Search" 
//         value={input}
//         onChange={(e) => handleChange(e.target.value)}
//         />
//     </div>
//     );
// };