import Children from "../components/Children"
import { createSignal } from "solid-js"
export default function Parent(){
    const [numbers,setNumbers] = createSignal([1,2,3,4,4])
    const [color,setColor] = createSignal("red")
    console.log(numbers())
    return(
        <>
        <p>Parent</p>
        <Children color={color()}>
            <p>Inside Children</p>
            <For each={numbers()}>
                {
                    (num)=>{
                        return <li>{num}</li>
                    }
                }

            </For>
        </Children>
        <button onClick={() => setColor("teal")}>Set Color</button>
        </>
    )
}