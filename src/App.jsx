
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Componenet/CoffeeCard';
import { useState } from 'react';

function App() {
const loadcoffees = useLoaderData();
const [coffees, setCoffees] = useState(loadcoffees)


  return (
    <div className='gap-5 grid md:grid-cols-2 my-20'>
      
     {
        coffees.map(coffee =><CoffeeCard
           key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
            ></CoffeeCard>)
      }

     
    </div>
  )
}

export default App
