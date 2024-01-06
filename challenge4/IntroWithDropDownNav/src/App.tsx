import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import './App.css'

function App () {

  return (
    <div >
      <Nav style="flex justify-between mb-7" />
      <div className="">
        <Hero style="mb-12 sm:mb-0 sm:flex sm:justify-center sm:items-center sm:mx-64 " />
        <Footer style="flex justify-between gap-5 sm:justify-start sm:hidden" />
      </div>
      <div className="text-[#3e52a3] text-center text-[11px]  mt-32">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href="#" className="">
          famo
        </a>
        .
      </div>
    </div>

  )
}

export default App
