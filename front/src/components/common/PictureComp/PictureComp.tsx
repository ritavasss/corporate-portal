import { DottedOutline2 } from "../../../assets/images/DottedOutline/DottedOutline";

type Props = {
  firstItem: any,
  secondItem?: any,
  color?: string,
}; 
const PictureComp = ({firstItem, color }: Props) => {
  return (
    <div style={{ width: "814px", height: "559px", position: "relative", display: "block" }}>
      { color ? (
      <div style={{ width: "744px", height: "495px", position: "relative"}}>
        <div style={{ position: "absolute", background: color, borderRadius: "8px", width: "100%", height: "100%", left: 70 }}></div>
        <div style={{ position: "absolute", width: "90%", height: "90%", top: 43, right: 42 }}>{firstItem}</div>
        <div style={{ position: "absolute", width: "100%", height: "100%", top: 21 }}><DottedOutline2 /></div>
      </div>
      ) : (
        <div>
          <div><DottedOutline2 width={"100%"} height={"100%"}/></div>
          <div style={{ position: "absolute", top: 138, left: 116 }}>{firstItem}</div>
        </div>
      )}
    </div>
  )
}

export { PictureComp }