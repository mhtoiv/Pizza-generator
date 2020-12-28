import React, {useState, useEffect} from 'react';
import './App.css';
import Input from './components/Input';

function App() {

    const [balls, setBalls] = useState(4);
    const [weight, setWeight] = useState(250);
    const [water, setWater] = useState(70);
    const [salt, setSalt] = useState(2.5);
    const [oil, setOil] = useState(3);
    const [yeast, setYeast] = useState(1.2);

    const [flour, setFlour] = useState(0);
    const [waterGrams, setWaterGrams] = useState(0);
    const [saltGrams, setSaltGrams] = useState(0);
    const [oilGrams, setOilGrams] = useState(0);
    const [yeastGrams, setYeastGrams] = useState(0);

    useEffect(() => {
       const percentage = 1 + (water + salt + oil + yeast)/100;
       setFlour((balls*weight)/percentage);
       setWaterGrams((flour*(water/100)).toFixed(0));
       setSaltGrams((flour*(salt/100)).toFixed(1));
       setOilGrams((flour*(oil/100)).toFixed(1));
       setYeastGrams((flour*(yeast/100)).toFixed(1));
    }, [flour,balls,weight,water, salt, oil, yeast]);



  return (
      <div className="container">
          <h1>Pizza Generator</h1>
          <div className="flex">
              <div>
                  <Input className={"margin-bot"} name={"Dough balls"} value={balls} setValue={setBalls} step={1} min={0} max={20}/>
                  <Input name={"Weight per ball"} value={weight} setValue={setWeight} step={1} min={0} max={500}/>
                  <Input name={"Water%"} value={water} setValue={setWater} step={1} min={0} max={80}/>
                  <Input name={"Salt%"} value={salt} setValue={setSalt} step={0.1} min={0} max={10}/>
                  <Input name={"Oil%"} value={oil} setValue={setOil} step={0.1} min={0} max={10}/>
                  <Input name={"Yeast%"} value={yeast} setValue={setYeast} step={0.1} min={0} max={3}/>
              </div>
              <div className="ingredients">
                  <h3>Ingredients</h3>
                  <p>{flour.toFixed(0)} grams of flour</p>
                  <p>{waterGrams} grams of water</p>
                  <p>{saltGrams} grams of salt</p>
                  <p>{oilGrams} grams of oil</p>
                  <p>{yeastGrams} grams of yeast</p>
              </div>
          </div>
      </div>
  )
}

export default App;
