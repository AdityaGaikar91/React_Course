

function Avatar(props) {
    return(
        <div>
            <img src={props.image} alt="" width={props.size} height={props.size}/>
        </div>
    )
}

export default Avatar;