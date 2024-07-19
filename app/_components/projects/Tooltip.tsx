interface TooltipProps {
    title: string
}

const Tooltip = ({title}: TooltipProps) => {
  return (
    <div className="bg-secondary group-hover:visible invisible absolute w-28 h-7 -top-8 left-1/2 -translate-x-1/2 text-txt-primary flex justify-center items-center rounded-xl text-sm">{title}</div>
  )
}

export default Tooltip