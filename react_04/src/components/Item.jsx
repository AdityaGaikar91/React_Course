function Item(props){
    //** -----------Previous Version------------ */
    // if(props.isPacked){
    // return(
    //     <div>
    //         <li>{props.name} ✓</li>
    //     </div>
        
    // )
    // }else{
    //     return(
    //         <div>
    //             <li>{props.name} ✘</li>
    //         </div>
    //     )
    // }

    /**-----------Improved Version---------------- */
    // return(
    //     <div>
    //         <li>{props.isPacked ? props.name + " ✓" : props.name}</li>
    //     </div>
        
    // )


    /** Using & operater */
    return(
        <div>
            <li>{props.data.name}{props.data.isPacked && " ✓"}</li>
        </div>
    )

}

export default Item