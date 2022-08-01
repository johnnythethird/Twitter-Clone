import "./Widgets.css"
import { TwitterTimelineEmbed } from "react-twitter-embed"

const Widgets = () => {
  return (
    <div className="widgets">
      <TwitterTimelineEmbed
        className="widgets_container"
        sourceType="profile"
        screenName="Normmacdonald"
        options={{ height: 600 }}
      />
    </div>
  )
}

export default Widgets