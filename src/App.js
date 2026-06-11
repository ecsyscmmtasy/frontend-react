import Header from "./components/Header"
import About from "./components/About"
import Hobbies from "./components/Hobbies"

export default function App() {

  function handleNavigate() {

    window.open('https://github.com', '_blank');
  }

  return(
    <div>
      <Header/>
      <About/>
      <Hobbies/>

    <button onClick={handleNavigate}>
       Открыть Github
    </button>

    </div>
  )
}