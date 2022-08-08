import "./App.css";
import { useEffect, useState } from "react";
import { CardLi, Search, Header } from "./components";
import { Country, CardUl, About } from "./pages"
import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"

function App() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [select, setSelect] = useState('')

  useEffect(() => {
    if (search.length) {
      fetch(`https://restcountries.com/v3.1/name/${search}`)
        .then((res) => res.json(res))
        .then((data) => setData(data))
        .catch(error => console.log("error"))
    } else if (select.length && select !== "All") {
      fetch(`https://restcountries.com/v3.1/region/${select}`)
        .then((res) => res.json(res))
        .then((data) => setData(data))
        .catch(error => console.log("error"))
    } else {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json(res))
        .then((data) => setData(data))
        .catch(error => console.log("error"))
    }
  }, [search, select])

  return (
    <div className="App">
      <Header />
      <Search setSearch={setSearch} setSelect={setSelect} />


      <Routes>
        <Route path="/" element={
          data.length && <CardUl>
            {
              data.map(elm => (
                <CardLi key={elm.name.official} data={elm} />
              ))
            }
          </CardUl>
        } />
        <Route path="/country/:link" element={<Country />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
