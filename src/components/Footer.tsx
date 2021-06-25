import Container from './Container'

export default function Footer() {
  return (
    <footer className="mt-auto py-5">
      <Container>
        <div className="flex flex-col items-center">
          <strong className="font-em text-accent-500 tracking-tight">
            Have a nice day!
          </strong>
          <span className="text-xs">&copy; Nayaabkhan Khan</span>
        </div>
      </Container>
    </footer>
  )
}
