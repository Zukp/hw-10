import { useState } from "react"

function Expenses(){
    const [one,setOne] = useState('')
    const [two,setTwo] = useState('')
    const [sree,setSree] = useState('')

    function oneHand(event) {
        setOne(event.target.value)
    }
    function twoHand(event) {
        setTwo(()=> {
            let obj = {
                two:two,
            }
            return obj = event.target.value
        })
    }

    function sreHand(event) {
        setSree((prev) => {
           prev = event.target.value;
           return prev
        })
    }
    return (
        <form>
            <input value={one} onChange={oneHand} />
            <input value={two} onChange={twoHand} />
            <input value={sree} onChange={sreHand} />
            <p>{one}</p>
            <p>{two}</p>
            <p>{sree}</p>
        </form>
    )
}
export default Expenses