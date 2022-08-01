import "./SidebarOption.css"

const SidebarOption = (props) => {
  const {text, icon, active} = props

  return (
    <div className={`sidebar-option ${active && "sidebar-option_active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption