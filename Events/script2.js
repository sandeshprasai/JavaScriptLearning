const btn =  document.querySelector('button')

const Handler = ()=> {console.log("Handler 2 ")}

btn.addEventListener('click' ,(event)=>
    
    {
        console.log("Button clicked - Handler 1 ")
        console.log(event)


    } )

    btn.addEventListener('click',Handler)
    btn.removeEventListener('click',Handler)