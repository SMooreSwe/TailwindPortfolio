import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

export type Button = {
    text: string,
    href: string,
    icon: IconDefinition,
}

export type Project = {
    heading: string,
    blurb: string,
    deployed?: string,
    github?: string,
    src: string,
}

export type TimelineProps = {
    name: string,
    blurb: string,
    src: string,
    key: string,
    links: (Button | null)[];
}

export type HeaderProps = {
    message: string
}

export type navLinkProps = {
    route: string,
    icon: IconDefinition,
    text: string
}