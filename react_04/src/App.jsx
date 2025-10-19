import './App.css'
import Header from './components/Header'
import PackageList from './components/PackageList'
import ParentComponent from './components/ParentComponent'
import Profile from './components/Profile'


function App() {

  return (
    <div>
      {/* <Header/>
      <h1>App</h1>
      <ParentComponent/>
      <Profile/> */}
      <PackageList message="Hii Iam Learning React Js"/>
      <PackageList message="Hii Iam Learning React Js"/>
    </div>
  )
}

export default App
