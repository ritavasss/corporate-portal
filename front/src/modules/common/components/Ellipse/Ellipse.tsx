
const Ellipse = ({color}:{color?: string}) => {
  return (
    <div style={{
      borderRadius: "50%",
      backgroundColor: color,
      width: "80px",
      height: "80px",
    }}>
    </div>
  )
}

export { Ellipse }