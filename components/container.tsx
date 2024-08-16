import clsx from "clsx"
interface ContainerProps {
  children: React.ReactNode
  className?: string
}
export const Container: React.FC<ContainerProps> = ({
  className,
  children,
}) => {
  const classes = clsx(
    {
      "max-w-[1170px] mx-auto py-6 my-6 space-y-6": true,
    },
    className
  )
  return <div className={classes}>{children}</div>
}