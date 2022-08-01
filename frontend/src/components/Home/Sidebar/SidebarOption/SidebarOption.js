import "./SidebarOption.css"

const SidebarOption = (props) => {
  const {text, Icon, active} = props;

  return (
    <div className={`sidebar-option ${active && "sidebar-option_active"}`}>
      <Icon className="sidebar-option_icon"/>
      <h2 className="sidebar-option_label">{text}</h2>
    </div>
  )
}

export default SidebarOption