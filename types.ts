type Button = {
    text: string,
    href: string,
}

export type Project = {
    heading: string,
    blurb: string,
    links: Button[]
    src: string,
}

export type TimelineProps = {
    name: string,
    blurb: string,
    src: string,
    key: string,
    links: Button[]
}

export type HeaderProps = {
    message: string
}