declare module 'react-scroll' {
  import * as React from 'react'

  export interface ElementProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string
    children: React.ReactNode
    id?: string | undefined
  }

  export class Element extends React.Component<ElementProps> {}

  export interface LinkProps extends React.HTMLAttributes<HTMLButtonElement> {
    to: string
    containerId?: string | undefined
    activeClass?: string | undefined
    activeStyle?: React.CSSProperties | undefined
    spy?: boolean | undefined
    hashSpy?: boolean | undefined
    horizontal?: boolean | undefined
    smooth?: boolean | string | undefined
    offset?: number | undefined
    delay?: number | undefined
    isDynamic?: boolean | undefined
    onClick?(): void
    duration?: number | string | ((distance: number) => number) | undefined
    absolute?: boolean | undefined
    onSetActive?(to: string, element: HTMLElement): void
    onSetInactive?(to: string, element: HTMLElement): void
    ignoreCancelEvents?: boolean | undefined
    saveHashHistory?: boolean | undefined
    spyThrottle?: number | undefined
  }

  export class Link extends React.Component<LinkProps> {}

  export function unmount(): void
  export function register(name: string, element: any): void
  export function unregister(name: string): void
  export function get(name: string): any
  export function setActiveLink(link: string): void
  export function getActiveLink(): string
  export function scrollTo(to: string, props: any): void

  export interface Scroller {
    unmount: typeof unmount
    register: typeof register
    unregister: typeof unregister
    get: typeof get
    setActiveLink: typeof setActiveLink
    getActiveLink: typeof getActiveLink
    scrollTo: typeof scrollTo
  }

  export const scroller: Scroller
}
