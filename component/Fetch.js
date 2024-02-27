import react, {useState} from 'react'
import axios from "axios";

export function Fetch(){
    const [message, setMessage] = useState("not working")

    axios.get("http://localhost:8000/home")
        .then(res=> setMessage(res.data))

    return(
        <h1>
            {message}
        </h1>
    )
}
