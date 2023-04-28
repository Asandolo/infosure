

function display_box() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    document.getElementById('helpbox').classList.remove('hidden')
}

function hide_box() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    document.getElementById('helpbox').classList.add('hidden')
}

function HelpButton () {
    return (
        <div onMouseEnter={display_box} onMouseLeave={hide_box} className="absolute top-0 left-1">
           ❓
        </div>
    )
}


export function HelpBox () {
    return (
        <>
            <HelpButton />
            <div id='helpbox' className="absolute top-4 left-2 hidden">
                <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Fonctionnement:</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Le site infosu.re donne 50% du temps</p>
                    <ul>
                        <li className="font-normal text-gray-700 dark:text-gray-400"> - "Info sure !"</li>
                        <li className="font-normal text-gray-700 dark:text-gray-400"> - "Info pas sure !"</li>
                    </ul>
                </a>
            </div>
        </>
    )
}