import { Input } from "../../../components/ui/input";

export function BillingAddressDOM(){
    return (
        <div>
            <h1 className="mb-2 border-b-2 pb-1">Billing Address</h1>
            <div className="flex gap-2 mb-2">
            <Input name="billing_firstName" placeholder="First Name *" required />
            <Input name="billing_lastName" placeholder="Last Name *" required />        
            </div>
            <Input name="billing_streetAddress" placeholder="Street Address *" required className="w-full mb-2"/>
            <Input name="billing_unit" placeholder="Apt/Suit/Unit (Optional)" className="mb-2"/> 
            <div className="flex gap-2 mb-2">
            <Input name="billing_city" placeholder="City *" required />
            <select  name="billing_province">
                <option value="">Province *</option>
                <option value="AB">Alberta</option>
                <option value="BC">British Columbia</option>
                <option value="MB">Manitoba</option>
                <option value="NB">New Brunswick</option>
                <option value="NL">Newfoundland and Labrador</option>
                <option value="NT">Northwest Territories</option>
                <option value="NS">Nova Scotia</option>
                <option value="NU">Nunavut</option>
                <option value="ON">Ontario</option>
                <option value="PE">Prince Edward Island</option>
                <option value="QC">Quebec</option>
                <option value="SK">Saskatchewan</option>
                <option value="YT">Yukon</option>
            </select>
            </div>
            <Input name="billing_postalCode" placeholder="Postal Code *" required />         
        </div>

    )
}