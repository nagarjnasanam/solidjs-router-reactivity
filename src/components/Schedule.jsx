import { createResource,createSignal } from "solid-js"

export default function Schedule(){
    const [slug,setSlug] = createSignal(true)
    // https://swapi.dev/api/people/1
    const[schedule] = createResource(async()=>{
        return await fetch('https://www.learnwithjason.dev/api/schedule').then(res=>res.json())
    })
    
    const[episode] = createResource(async(slug)=>{
        return await fetch(`https://www.learnwithjason.dev/api/episode/${slug}`).then(res=>res.json())
    })

    function handleSelect(event){
        setSlug(event.target.value)
    }
    console.log('res',schedule())
    // https://www.learnwithjason.dev/api/schedule
    return(
        <div>
            <h1>Learn with Json</h1>
          
            <select onInput={handleSelect}>
            <For each={schedule()}>
                {
                    (item)=>{
                        return <option value={item.slug.current}>{item.title}</option>
                    }
                }
            </For>
            </select>
           
                {
                    episode() && (
                        <section>
                <h1>{episode().title}</h1>

                        </section>
                    )
                }
           
            <For each={schedule()}>
                {
                    (item)=>{
                        return <div>
                        <li>{item.title}</li>

                        </div>
                    }
                }
            </For>
            {/* <div>{JSON.stringify(schedule())}</div> */}

        </div>
    )
}