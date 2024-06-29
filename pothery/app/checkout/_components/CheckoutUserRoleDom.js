import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

export function CheckoutUserRoleDOM(){
    return (<div className="flex gap-4" >
      <div><h1 className="mb-2">Checkout as a Guest</h1><Input placeholder="Email Address *"/></div>
      <div className="border-l pl-6">
        <h1 className="mb-2">Sign in or sign up</h1>
        <p className="text-xs mb-2">Sign in to checkout faster</p>
        <div className="flex gap-2 ">
          <Button className="bg-[#e3d4cb] text-black px-4 py-2 rounded-lg">Sign In</Button>
          <Button className="bg-[#e3d4cb] text-black px-4 py-2 rounded-lg">Sign Up</Button>
        </div>
      </div>
    </div>)
  }