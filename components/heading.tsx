import clsx from "clsx"
interface HeadingProps {
  title: string
  description?: string
  className?: string
}
export const Heading: React.FC<HeadingProps> = ({
  title,
  description,
  className,
}) => {
  const classes = clsx(
    {
      "space-y-2": true,
    },
    className
  )
  return (
    <div className={className}>
      <h1 className=" text-3xl md:text-5xl font-bold tracking-tight">
        {title}
      </h1>
      <p>{description}</p>
    </div>
  )
}