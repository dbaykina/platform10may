import { useState } from "react";

const Text = ({text}) => {


    //const [text, setText] = useState('');

   // const handleChange = (e) => {

//setText(e.target.value)

  //  }

   // const handleSubmit = () => {
        

   // }


    return (
<h1>{text.text_content}</h1>
          
        
    )
}

export default Text;

 {/* <>
            <textarea
            id="text"
            name="text"
            type="text"
            onChange={handleChange}
            value={text}>
            </textarea>
            <button onClick={handleSubmit}></button>
            </>*/}
