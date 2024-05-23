import { useState } from "react";
const Text = () => {
    const [text, setText] = useState("")

    const handleText = (e)=>{
        setText(e.target.value);

    }
    return (
        <div>
            <input type="text" name="" id="" onChange={handleText}/>
            <h2>{text}</h2>
        </div>
    )

}
export default Text;