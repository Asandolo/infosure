// import reactLogo from './assets/images/react.svg'
// import viteLogo from '/vite.svg'
import './assets/css/App.css'
// import {Title} from "./componants/title.tsx";
import {Form} from "./componants/form.tsx";
import {Title} from "./componants/title.tsx";
import {FormEvent, useCallback, useState} from "react";
import {MyHelmet} from "./componants/helmet.tsx";
import {Footer} from "./componants/footer.tsx";
import {HelpBox} from "./componants/helpbox.tsx";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

function getRandomInt(): number {
    return Math.floor(Math.random() * 100);
}

function App() {
    const [bg, setBg] = useState('')
    const [info , setInfo] = useState('')
    const [sure , setSure] = useState('')
    const [color , setColor] = useState('')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    const params: URLSearchParams = new URLSearchParams(window.location.search)
    let q: string | null = params.get('q')
    if (!q)
        q = ''

    function submit (e: FormEvent) {
        e.preventDefault();

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const value = (e.target as HTMLFormElement).elements.namedItem('q').value;

        const isEven = getRandomInt() % 2 === 0;
        const bgColor = isEven ? 'bg-green-200' : 'bg-red-200';
        const textColor = isEven ? 'text-green-500' : 'text-red-500';
        const infoMessage = isEven ? 'Info sure !' : 'Info pas sure !';


        setBg(bgColor);
        setSure(infoMessage);
        setColor(textColor);
        setInfo(value);
    }


    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <>
            <MyHelmet title={sure} description={info} />
            <Particles id="tsparticles" url="particlesjs-config.json" init={particlesInit} loaded={particlesLoaded} />
            <div className={bg}>
                <div className="flex items-center justify-center h-screen">
                    <HelpBox />
                    <Title text='Info sur.RE' className='text-4xl text-center font-bold absolute top-0' />
                    <div>
                        <h1 className='text-4xl text-center font-bold w-full'>{info}</h1>
                        <h2 className={'text-4xl text-center font-bold w-full ' + color}>{sure}</h2>
                        <Form inputDefault={q} className='w-full max-w-md' onSubmit={submit}/>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default App
