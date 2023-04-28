import {Helmet} from "react-helmet";

type MyHelmetProps = {
    title: string
    description: string
}

export function MyHelmet ({ title , description }: MyHelmetProps) {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content='article' />
                <meta property="og:url" content={window.location.href} />
            </Helmet>
        </>
    )
}