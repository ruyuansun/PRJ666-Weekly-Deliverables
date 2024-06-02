'use client'

import Sidemenu from "@/components/SideMenu";
import { Button } from "@/components/ui/button";
import DocumentDOM from "./_components/DocumentDOM";


export default function uploadDocument(){
   


    return (
        <div className="w-11/12 mx-auto min-h-screen">
        <div className="flex">
            <Sidemenu/>
            <div className="w-8/12 px-10">
                <h1 className="text-2xl mb-5">Documents</h1>
                <div>
                    <DocumentDOM type="Word Document" docName="Resume" size="112kb" docId="123"/>
                    <DocumentDOM type="Word Document" docName="CV" size="291kb" docId="456"/>
                </div>
                <div className="flex content-between mt-10 gap-10">
                    <Button className="bg-gray-300">Add new document</Button>
                    <Button className="bg-gray-300">Back</Button>
                </div>
            </div>
        </div>
    </div>
    )
}