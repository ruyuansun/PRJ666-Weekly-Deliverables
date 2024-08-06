"use client";

import { useEffect, useState } from "react";
import Sidemenu from "../../components/SideMenu";
import Event from "./_components/Event"
import { BACKEND_URL } from '../constants';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog"
import { Input } from "../../components/ui/input";
import {Textarea } from "../../components/ui/textarea"
import { Button } from "../../components/ui/button";

export default function EventPage() {
  const [events,setEvents] = useState([])
  const [open, setOpen] = useState(false);

  // Get post
  async function getEvents() {
    const token = localStorage.getItem("token");

    const response = await fetch(BACKEND_URL + "/api/getEvents", {
      method: "GET",
      headers: {
        Authorization: "Poth " + token,
      },
    });

    if (response.status == 403) {
      window.location.href = "/login";
    }

    if (response.status == 200) {
      let eventData = await response.json();
      setEvents(eventData)
    } else {
      const data = await response.json();
      
      setError(data.message);
    }
  }

  useEffect(() => {
    getEvents();
  }, []);
  

  //For new event
  const [newEventImg,setNewEventImg] = useState("")
  const [newEventName,setNewEventName] = useState("")
  const [newEventDescription,setNewEventDescription] = useState("")
  const [newEventTime,setNewEventTime] = useState(getCurrentDateTime())

  // add an event
  async function addPostHandle() {
 
    const token = localStorage.getItem("token");

    const response = await fetch(BACKEND_URL + "/api/addEvent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Poth " + token,
      },
      body: JSON.stringify({
        img_url: newEventImg,
        name:newEventName,
        description:newEventDescription,
        time: newEventTime
      }),
    });

    if (response.status == 200) {
      console.log("Event has been added");
      setNewEventImg("")
      setNewEventDescription("")
      setNewEventName("")
      setNewEventTime(getCurrentDateTime())
      setOpen(false)
    } else {
      console.log("Something is happening...");
    }
  }
  

  return (
    <div className="w-11/12 mx-auto min-h-screen">
      <div className="flex relative">
        <Sidemenu />

        <div className="w-full ">
        <h1 className="text-2xl mb-5 ml-5">Upcoming Events</h1>

        <Dialog open={open} onOpenChange={setOpen}> 
        <DialogTrigger className="px-6 py-2 bg-orange-300/30 rounded-lg top-0 right-0 absolute">Add Event</DialogTrigger>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>New Event</DialogTitle>
            <DialogDescription>
              <Input required type="text" value={newEventImg} placeholder="(Insert url of your image url)" onChange={(e)=>{setNewEventImg(e.target.value)}} className="mb-5"/>
              <Input required type="text" value={newEventName} placeholder="(Insert name of your event)" onChange={(e)=>{setNewEventName(e.target.value)}} className="mb-5"/>
              
              <Textarea required value={newEventDescription} placeholder="(Insert description of your event)" onChange={(e)=>{setNewEventDescription(e.target.value)}} className="mb-5"/>
              <Input required type="datetime-local" value={newEventTime} placeholder="(Insert time of your event)" onChange={(e)=>{setNewEventTime(e.target.value)}} className="mb-5"/>
                <div>
                  <Button  className="px-6 py-2 bg-orange-300/30 rounded-lg" onClick={addPostHandle}>Submit</Button>
                  <Button className="ml-5 px-6 py-2 bg-red-300 rounded-lg" onClick={()=>setOpen(false)}>Cancel</Button>
                </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
       
      <div className="px-10 grid grid-cols-4 gap-10">
            {events.map(event=>{
              return <Event event={event}></Event>
            })}        
      </div>

        </div>
      </div>
    </div>
  );



  function getCurrentDateTime(){

    const now = new Date();


    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); 
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

 
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
}

/*
 


*/