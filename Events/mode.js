const btn = document.querySelector('button')
let currentMode =  'light'

btn.addEventListener('click', ()=>
{
    if(currentMode==='light')
    {
        currentMode='dark'
        document.querySelector('body').classList.remove('light')
        document.querySelector('body').classList.add('dark')
    }   
    else
    {
        currentMode='light' 
        document.querySelector('body').classList.remove('dark')
        document.querySelector('body').classList.add('light')
    }
}

)

