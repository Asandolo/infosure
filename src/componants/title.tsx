import {H1Props} from "react-html-props";

type TitleProps = H1Props & {
    text: string
}

export function Title ({ text, ...props }: TitleProps) {
    return (
        <>
            <h1 {...props}>{text}</h1>
        </>
    )
}
