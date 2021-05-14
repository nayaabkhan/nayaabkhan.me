import Container from './Container'

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 'auto',
      }}
    >
      <hr
        style={{
          marginTop: 'var(--space-l)',
        }}
      />
      <Container blockSpacing="var(--space-l)">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <strong>
            <em>Have a nice day!</em>
          </strong>
          <span style={{ fontSize: 'var(--text-xs)' }}>
            &copy; Nayaabkhan Khan
          </span>
        </div>
      </Container>
    </footer>
  )
}
