import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import type { PrismTheme } from 'prism-react-renderer'

var theme: PrismTheme = {
  plain: {
    color: '#403f53',
  },
  styles: [
    {
      types: ['changed'],
      style: {
        color: 'rgb(162, 191, 252)',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgba(239, 83, 80, 0.56)',
      },
    },
    {
      types: ['inserted', 'attr-name'],
      style: {
        color: 'hsl(330, 90%, 50%)',
      },
    },
    {
      types: ['comment'],
      style: {
        color: 'rgb(152, 159, 177)',
      },
    },
    {
      types: ['string', 'builtin', 'char', 'constant', 'url'],
      style: {
        color: 'hsl(330, 90%, 50%)',
      },
    },
    {
      types: ['variable'],
      style: {
        color: 'rgb(201, 103, 101)',
      },
    },
    {
      types: ['number'],
      style: {
        color: 'rgb(170, 9, 130)',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: 'hsl(231, 64%, 50%)',
      },
    },
    {
      types: ['function', 'selector', 'doctype'],
      style: {
        color: 'rgb(153, 76, 195)',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: 'rgb(17, 17, 17)',
      },
    },
    {
      types: ['tag'],
      style: {
        color: 'hsl(231, 64%, 50%)',
        fontWeight: '500',
      },
    },
    {
      types: ['operator', 'property', 'keyword', 'namespace'],
      style: {
        color: 'hsl(231, 64%, 50%)',
      },
    },
    {
      types: ['boolean'],
      style: {
        color: 'rgb(188, 84, 84)',
      },
    },
  ],
}

const RE = /{([\d,-]+)}/

const calculateLinesToHighlight = (meta) => {
  if (!RE.test(meta)) {
    return () => false
  }
  const lineNumbers = RE.exec(meta)[1]
    .split(`,`)
    .map((v) => v.split(`-`).map((x) => parseInt(x, 10)))
  return (index) => {
    const lineNumber = index + 1
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start
    )
    return inRange
  }
}

export default function CodeBlock({
  children,
  className,
  metastring,
  ...props
}) {
  // const language = className?.replace(/language-/, '')
  const match = /language-(\w+)/.exec(className || '')
  const shouldHighlightLine = calculateLinesToHighlight(metastring)

  return match ? (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language={match[1]}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '1rem 0' }}>
          {tokens.map((line, i) => {
            const { style: glpStyle, ...rest } = getLineProps({ line, key: i })

            let style: React.CSSProperties = { ...glpStyle, padding: '0 1rem' }
            if (shouldHighlightLine(i)) {
              style = {
                ...style,
                backgroundColor: 'hsl(251, 20%, 93%)',
              }
            }

            return (
              <div key={i} {...rest} style={style}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            )
          })}
        </pre>
      )}
    </Highlight>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  )
}
