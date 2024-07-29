import Image from "next/image";

export default function Post(props){
    props = props.post
   
    return (
        <div className="flex gap-4">
            <div className="w-2/8 min-w-14">
            <Image
              className="w-14 h-14 rounded-full"
              src={"/placeholders/profile.jpg"}
              width={500}
              height={500}
            />
            </div>
            <div className="w-6/8">
                <p className="text-lg">
                    John
                </p>
                <p>5 Minutes ago</p>
                <Image
                src={props.img_url}
                width={500}
                height={500}
                />
            <p className="text-justify max-w-[500px] my-4" >{props.content}</p>
            <p><span>❤️ {props.likes} Likes</span> <span className="ml-2">💬 {props.comments} Comments</span></p>
            </div>
        </div>
    )
}