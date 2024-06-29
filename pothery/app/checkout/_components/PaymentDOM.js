import { Input } from "../../../components/ui/input";

export function PaymentDOM(){
    let yearOptions = []
    const currentYear = new Date().getFullYear()
    for (let i=currentYear;i<currentYear+11;i++){
        yearOptions.push(<option value={i}>{i}</option>)
    }

    return (
        <div>
            <h1 className="mb-2 border-b-2 pb-1">Payment</h1>
            <div className="grid grid-cols-4">
                <Input name="payment_type" type="radio"  /> <label>Credit/Debit Card</label>
                <Input name="payment_type" type="radio" />  <label>Paypal</label>    
            </div>
            <Input name="cardNumber" placeholder="Card Number *" required className="w-full mb-2"/>
            <div className="flex gap-2 mb-2">
                <select name="expireMonth">
                    <option value="">Expire Month</option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                <select id="expYear" name="expYear">
                    <option value="">Select a year</option>
                    {yearOptions}
                </select>
            </div>
            <Input name="securityCode" placeholder="Security Code *" required className="w-full mb-2"/>
        </div>

    )
}