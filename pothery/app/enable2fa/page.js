import IconLock from "./_components/IconLock";
import Image from 'next/image';

export default function Enable2fa() {

    return (
    <div className="w-4/12 m-auto">
      <h1 className="flex text-zinc-700 text-4xl justify-center items-center mb-10"> <IconLock/> Enable 2-Factor Authentication</h1> 
      <p className="text-center mb-5">
        Scan the following QR code to add your authentication app to the account
      </p>
      <Image src="/qrcode.png" width={500} height={500} className="m-auto"/>

    </div>)
  }
  