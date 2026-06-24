import { ChaiCard } from './components/ChaiCard.tsx'
import './App.css'
import { Counter } from './components/Counter.tsx'
import type { Chai } from './types.ts'
import { Chailist } from './components/Chailist.tsx'
import { OrderForm } from './components/OrderForm.tsx'
import { Card } from './components/Card.tsx'

const menu: Chai[] = [
  {id:1, name:"ginger", price:30},
  {id:2, name:"masala", price:50},
  {id:3, name:"elaichi", price:20},
  {id:4, name:"brew", price:70}
]

function App() {
 

  return (
    <>
     <div>
      <h1>  Vite + React</h1>
      <ChaiCard
      name="headphones"
      price={5000}
      isSpecial={true}
      />
      <ChaiCard
      name="Iphone"
      price={90000}
      isSpecial={true}
      />
      <ChaiCard
      name="laptop"
      price={50000}
      isSpecial={true}
      />
     </div>
     <div>
      <Counter />
     </div>
     <div>
      <Chailist items={menu}/>
     </div>
     <div>
      <OrderForm onSubmit={(order) => {
        console.log("Placed", order.name, order.cups)
      }}/>
      </div>
      <div>
        <Card 
        title='chai aur typescript'
        footer={<button>Order Now</button>}
        />
      </div>
    </>
  )
}

export default App
