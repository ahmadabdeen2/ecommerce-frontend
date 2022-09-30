import {useGlobalContext } from './contexts/globalContext.js'
import {logo} from './assets'
import {Routers, Navbar, Footer, SmoothScroll} from './components'


const App = () =>  {
  let {darkTheme, setDarkTheme} = useGlobalContext()
  return (

    <div className={darkTheme ? 'dark' : " "}>
      <div className='bg-gray-200 dark:bg-gray-900'>
      <Navbar/>
        <Routers/>
        <Footer/>
        </div>
    </div>

  );
}

export default App;
