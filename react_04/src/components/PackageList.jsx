import Item from "./Item";
import {items} from "../utils/mockdata"
import { useState } from "react";


function PackageList(){
    // let index =0;
    const [index, setindex] = useState(0);
    const [showMore, setshowMore] = useState(true)
    function handleClick(){
        // index = index + 1;
        index == 4 ? setindex(0) : setindex(index + 1) 
        console.log(index);
        
    }

    function handleMoreData() {
        setshowMore(!showMore)
    }

    const item = items[index];

    return(
        <div>
            <h1>List of Items in Package List</h1>

            <h2>{item.name}</h2>
            <img src={item.url} alt="" width="100px" height="100px" />
            
            {/* {items.map(item => {
                return<Item key={item.id} data={item}/>
            })} */}

            <p>{!showMore && item.description}</p>

            <button onClick={handleClick}>Next</button>
            <button onClick={handleMoreData}>{showMore ? "Show" : "Hide"} Description</button>

            
            {/* <button onClick={() => {
                    alert("Hii")
                }}
                >InLine Button</button> */}
        </div>
    );
}

export default PackageList