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
      <a className={`text-xs flex ${linkColor} ${className}`} {...deferred} />
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
  return (
    <header className="header">
      <Container className="flex items-center py-4">
        <HeaderSection>
          <NavLink href="/" className="block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.4rem"
              viewBox="0 0 45 45"
              className="block"
            >
              <g fill="currentColor" fill-rule="nonzero">
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
              <NavLink className="py-1 px-4" href="/cv">
                CV
              </NavLink>
            </li>
          </ul>
        </HeaderSection>
      </Container>
    </header>
  )
}
