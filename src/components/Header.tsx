import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Container from './Container'

function NavLink(props: React.HTMLProps<HTMLAnchorElement>) {
  const router = useRouter()
  const { className = '', href, ...deferred } = props

  const isActive =
    href === '/' ? router.pathname === href : router.pathname.startsWith(href)

  const linkColor = isActive ? 'text-primary-500' : 'text-gray-500'

  return (
    <Link href={href}>
      <a className={`text-sm flex ${linkColor} ${className}`} {...deferred} />
    </Link>
  )
}

function HeaderSection(props: React.HTMLProps<HTMLDivElement>) {
  const { className = '', ...deferred } = props

  return (
    <div className={`flex flex-1 items-center ${className}`} {...deferred} />
  )
}

export default function Header(props: React.HTMLProps<HTMLElement>) {
  const headerRef = React.useRef(null)

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      const scroll = window.scrollY
      const headerElement = headerRef.current as HTMLElement

      if (scroll >= 20) {
        headerElement.classList.add('shadow')
      } else {
        headerElement.classList.remove('shadow')
      }
    })
  }, [])

  return (
    <header ref={headerRef} className="header">
      <Container className="flex items-center py-4">
        <HeaderSection>
          <NavLink href="/" className="block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.4rem"
              viewBox="0 0 45 45"
              className="block"
            >
              <g fill="currentColor" fillRule="nonzero">
                <path d="M2.5 8.998v27.004A6.501 6.501 0 008.998 42.5h27.004a6.501 6.501 0 006.498-6.498V8.998A6.501 6.501 0 0036.002 2.5H8.998A6.501 6.501 0 002.5 8.998zm-2.5 0C0 4.028 4.033 0 8.998 0h27.004C40.972 0 45 4.033 45 8.998v27.004C45 40.972 40.967 45 36.002 45H8.998C4.028 45 0 40.967 0 36.002V8.998z" />
                <path d="M28.844 17.587H16.102l3.69 16.078-.98 1.507-6.05 1.176-1.454-.937-4.524-18.973.253-1.087 3.186-3.854 1.875-2.378.982-.477h18.868l.984.48 1.532 1.954 3.472 4.285.047.203v.001l.198.873-4.524 18.973-1.454.937-6.05-1.176-.98-1.505 3.671-16.08zm2.564 0l-3.51 15.377 3.606.701 3.833-16.078h-3.929zm-1.093-6.445H14.623l.906 3.945h13.886l.9-3.945zm2.217 1.522l-.553 2.423h2.453l-1.9-2.423zm-18.995 4.923H9.628l3.834 16.078 3.604-.7-3.529-15.378zm-1.369-4.52l-1.59 2.02h2.386l-.536-2.334-.26.315z" />
              </g>
            </svg>
          </NavLink>
        </HeaderSection>
        <HeaderSection>
          <nav role="nav">
            <ul className="-mx-4 my-0 flex">
              <li>
                <NavLink className="py-1 px-4" href="/blog">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink className="py-1 px-4" href="/portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink className="py-1 px-4" href="/meditations">
                  Meditations
                </NavLink>
              </li>
            </ul>
          </nav>
        </HeaderSection>
        <HeaderSection>
          <ul className="-mx-4 my-0 flex ml-auto">
            <li>
              <NavLink
                className="py-1 px-4 flex items-center gap-2"
                target="_blank"
                href="https://www.notion.so/nayaabkhan/Nayaab-Khan-99cf558285fc497fa6ba3bfb457999e5?pvs=4"
              >
                <span>CV</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 700 700"
                >
                  <g fill="currentColor">
                    <path d="M559.65 52.328c-.652.02-1.3.078-1.945.172h-137.71A17.5 17.5 0 0 0 407.46 82.46a17.503 17.503 0 0 0 12.535 5.04h97.754l-215.13 215.13v-.005a17.534 17.534 0 0 0-5.364 12.445 17.496 17.496 0 0 0 5.13 12.54 17.476 17.476 0 0 0 12.538 5.124 17.497 17.497 0 0 0 12.441-5.36l215.13-215.13V210a17.503 17.503 0 1 0 35 0V72.22a17.503 17.503 0 0 0-17.839-19.895z" />
                    <path d="M315 122.5c-43.676 0-76.684-.063-102.98 2.906s-47.352 9.223-62.41 24.301c-15.059 15.078-21.25 36.09-24.199 62.38-2.953 26.284-2.906 59.288-2.906 102.91 0 43.636-.035 76.647 2.972 102.95 3.012 26.3 9.344 47.323 24.438 62.378s36.11 21.301 62.38 24.266c26.27 2.969 59.202 2.906 102.71 2.906 43.511 0 76.437.02 102.71-2.972 26.272-2.992 47.327-9.27 62.41-24.336 15.085-15.066 21.358-36.094 24.37-62.38 3.012-26.284 3.008-59.25 3.008-102.81v.005a17.49 17.49 0 0 0-5.039-12.535 17.5 17.5 0 0 0-29.961 12.535c0 43.527-.152 75.992-2.77 98.848-2.617 22.855-7.437 34.688-14.355 41.598-6.918 6.91-18.746 11.719-41.598 14.32-22.852 2.605-55.297 2.734-98.777 2.734-43.488 0-75.922-.117-98.777-2.7-22.855-2.581-34.69-7.366-41.598-14.253s-11.738-18.727-14.355-41.598c-2.617-22.871-2.769-55.348-2.769-98.95 0-43.612.098-76.101 2.664-98.983 2.57-22.883 7.363-34.7 14.22-41.562 6.855-6.863 18.675-11.672 41.561-14.254 22.887-2.582 55.395-2.7 99.055-2.7a17.503 17.503 0 1 0 0-35z" />
                  </g>
                </svg>
              </NavLink>
            </li>
          </ul>
        </HeaderSection>
      </Container>
    </header>
  )
}
