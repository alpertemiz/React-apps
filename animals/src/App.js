import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import AnimalShow from "./AnimalShow"
import "./App.css"

function getRandomAnimal() {
    const animals = ['bird', 'gator', 'dog', 'cat', 'horse', 'cow']
    return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
    const [animals, setAnimals] = useState([])

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    })

    return (
        <div className="app">
            <button onClick={handleClick}>Add Animal</button>
            <div className="animal-list">{renderedAnimals}</div>
        </div>
    )
}

export default App 