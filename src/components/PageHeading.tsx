interface PageHeadingProps {
  title: string
  description: string
}

export default function PageHeading({ title, description }: PageHeadingProps) {
  return (
    <div className="py-5">
      <h1 className="my-0">{title}</h1>
      <p className="my-0 text-gray-500">{description}</p>
    </div>
  )
}
