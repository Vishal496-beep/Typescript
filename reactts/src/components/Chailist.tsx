import type { Chai } from "../types.ts"
import { ChaiCard } from './ChaiCard.tsx'

interface ChailistProps {
    items: Chai[]
}

export function Chailist({items}:ChailistProps){
    return (
        <>
        <div>
            {items.map((chai) => (
                <ChaiCard 
                key={chai.id}
                name="masala"
                price={chai.price}
                isSpecial={chai.price > 30}
                />
            ))}
        </div>
        </>
    )
}