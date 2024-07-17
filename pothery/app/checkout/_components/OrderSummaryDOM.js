import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { useRouter } from 'next/navigation'

export function OrderSummaryDOM(){
    const [subtotal,setSubtotal] = useState(0)
    const [tax,setTax] = useState(0)
    const router = useRouter()

    return(
        <div className="pl-4">
            <h1 className="mb-2 border-b-2 pb-1">Order Summary</h1>
            <div className="grid grid-cols-2 gap-y-6">
                <div className="font-bold">Subtotal</div>
                <div>$ {subtotal}</div>
                <div className="font-bold">Shipping</div>
                <select name="delivery">
                    <option value="standard">Standard Delivery $7.99</option>
                    <option value="express">Express Delivery $14.99</option>
                </select>
                <div className="font-bold">Taxes</div>
                <div>$ {tax}</div>

                <div className="font-bold">Promotion Code</div>
                <Input name="promotion" />
            </div>
            <div className="flex gap-2 mt-4">
                <Button className="bg-gray-100 text-black px-4 py-2 rounded-lg w-1/2" onClick={()=>{router.push("/shoppingCart")}}>Back</Button>
                <Button className="bg-[#e3d4cb] text-black px-4 py-2 rounded-lg w-1/2">Place Order</Button>
            </div>
            
        </div>
    )
}