import { Input } from "../../../components/ui/input";

export function ShippingAddressDOM(){
    return (
      <div>
        <h1 className="mb-2 border-b-2 pb-1">Shipping Address</h1>
        <div className="flex gap-2 mb-2">
          <Input name="firstName" placeholder="First Name *" required />
          <Input name="lastName" placeholder="Last Name *" required />        
        </div>
        <Input name="streetAddress" placeholder="Street Address *" required className="w-full mb-2"/>
        <Input name="unit" placeholder="Apt/Suit/Unit (Optional)" className="mb-2"/> 
        <div className="flex gap-2 mb-2">
          <Input name="city" placeholder="City *" required />
          <select  name="province">
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
        <div className="flex gap-2 mb-2">
          <Input name="postalCode" placeholder="Postal Code *" required />
          <Input name="phoneNumber" placeholder="Phone Number *" required />
        </div>
        <div className="flex items-center">
          <Input type="checkbox" name="useAsBillingAddress" className="inline-flex w-auto"/> 
          <span className="ml-2">Use as billing address</span>        
        </div>
  
      </div>
    )
  }