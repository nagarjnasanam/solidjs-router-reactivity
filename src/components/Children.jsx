import { createEffect, children } from "solid-js";
export default function Children(props){
    const c = children((()=>props.children))
    createEffect(() => c().forEach(item => item.style.color = props.color));

    return(
        <>
        <p>Children</p>
        {c}
        </>
    )
}