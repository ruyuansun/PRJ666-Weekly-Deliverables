export default function Sidemenu(){
    return ( 
    <div className="bg-gray-100 px-12 py-10">
        <ol className="leading-10">
            <li><a href="/home">Home</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/message">Messages</a></li>
            <li><a href="/subscription">Subscription</a></li>
            <li><a href="/documents">Documents</a></li>
            <li><a href="/bank">Bank</a></li>
            <li><a href="/marketplace">Marketplace</a></li>
        </ol>
        <div className="flex content-between mt-10 gap-10">
            <a href="/settings">Settings</a>
            <a href="/help">Help</a>
        </div>
    </div>)
}