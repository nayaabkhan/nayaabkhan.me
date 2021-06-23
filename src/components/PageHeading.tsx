interface PageHeadingProps {
  title: string
  description: string
}

export default function PageHeading({ title, description }: PageHeadingProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p className="mb-5 text-gray-500">{description}</p>
    </div>
  )
}
