import BookList from './components/BookList'
import { Books } from './utils/mockdata'

function App() {
  return <BookList bookData={Books}/>
    
}

export default App