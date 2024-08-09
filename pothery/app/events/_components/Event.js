import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
  } from "../../../components/ui/dialog"
  import {  useState } from "react";
export default function Event(props){
    const [open, setOpen] = useState(false);
    props = props.event
  
    return (

        <Dialog open={open} onOpenChange={setOpen}> 
        <DialogTrigger className={`w-full h-[200px] relative content-center text-center`}>
        <Image
              className="w-full h-full absolute top-0 left-0 z-1"
              src={props.img_url}
              width={500}
              height={500}
            />
            <p className="relative z-50">{props.name}</p>

        </DialogTrigger>
        <DialogContent className="bg-white">

            <DialogTitle>{props.name}</DialogTitle>
            <p>Date: {props.time.split("T")[0]}</p>
            <Image

              src={props.img_url}
              width={500}
              height={500}
            />
            <DialogDescription>
              {props.description}
            </DialogDescription>
      
        </DialogContent>
      </Dialog>


       
      
    )
}