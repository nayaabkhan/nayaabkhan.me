import Container from './Container'
import HR from './HR'

export default function Footer() {
  return (
    <footer className="mt-auto">
      <HR className="mt-5" />
      <Container className="my-5">
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
