import { useEffect, useState } from 'react'
import CarHeader from './components/CarHeader'
import Cars from './components/Cars'
import Form from './components/Form'
import CarsPurchased from './components/CarsPurchased'
import './App.css'

const cars = [{
  id:1,
  year:1994,
  make:"Mazda",
  model:"Rx-7",
},
{
  id:2,
  year:2000,
  make:"Toyota",
  model:"Celica",
},
{
  id:3,
  year:1996,
  make:"Ford",
  model:"Probe",
},
]
function App() {

  const [carsPurchased, setCarsPurchased] = useState(0);

  // // added during class
  // useEffect(() => {
  //   document.title = `Cars Purchased: ${carsPurchased}`
  // }, [carsPurchased, firstName, lastName])
  // // end added during class

  // added during class
  // this could be used to run API calls during page loads or access a database that may take a while,
  // it is done this way so that the page will load without waiting for the API call to finish.
  useEffect(() => {
    document.title = `Bob's Cars`
  }, [])
  // end added during class

  const increasePurchase = () => {
    console.log("increasePurchase")
    setCarsPurchased(carsPurchased+1)
  }
  
  return (
    <>
    <CarHeader name="Bob's" location="Minneapolis"/>
    <Cars carsArray={cars} increasePurchase={increasePurchase} />
    {carsPurchased > 0 ? ( 
      <CarsPurchased carsPurchased={carsPurchased} />
    )
    :
    (
      <div>No Cars Purchased</div>
    )
    }
    <Form/>
    </>
  )
}

export default App
