// import reactLogo from './assets/images/react.svg'
// import viteLogo from '/vite.svg'
import './assets/css/App.css'
// import {Title} from "./componants/title.tsx";
import {Form} from "./componants/form.tsx";
import {Title} from "./componants/title.tsx";
import {FormEvent, useState} from "react";


function getRandomInt(): number {
    return Math.floor(Math.random() * 100);
}

function App() {
    const [bg, setBg] = useState('')
    const [info , setInfo] = useState('')
    const [sure , setSure] = useState('')
    const [color , setColor] = useState('')

    const params: URLSearchParams = new URLSearchParams(window.location.search)
    let q: string | null = params.get('q')
    if (!q)
        q = ''

    function submit (e: FormEvent) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const value = (e.target as HTMLFormElement).elements.namedItem('q').value;

        if (getRandomInt() % 2 === 0) {
        // set backgroung color to green
            setBg('bg-green-200')
            setSure('Info sure !')
            setColor('text-green-500')
        } else {
        // set backgroung color to red
            setBg('bg-red-200')
            setSure('Info pas sure !')
            setColor('text-red-500')
        }
        setInfo(value)

        e.preventDefault()
    }

    return (
        <>
            <div className={bg}>

                <div className="flex items-center justify-center h-screen">
                    <Title text='Info sur.RE' className='text-4xl text-center font-bold absolute top-0' />
                    <div>
                        <h1 className='text-4xl text-center font-bold w-full'>{info}</h1>
                        <h2 className={'text-4xl text-center font-bold w-full ' + color}>{sure}</h2>
                        <Form inputDefault={q} className='w-full max-w-md' onSubmit={submit}/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default App
