import Book from './Book'
import "./style.css"

function BookList(props) {
  console.log(props);

  return(
    <div className='bookList'>
      {props.bookData.map(data => <Book bookDetails={data}/>)}
    </div>
  
    // <Book bookDetails={props.bookData[0]}/>
  ) 
}

export default BookList