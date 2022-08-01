import "./Post.css"
import { Avatar } from "@mui/material"
import { 
  MoreHoriz, 
  ChatBubbleOutline, 
  Repeat, 
  FavoriteBorderOutlined, 
  PublishOutlined 
} from "@mui/icons-material"

const Post = () => {
  return (
    <div className="post">
      <Avatar 
        src="https://guardian.ng/wp-content/uploads/2016/04/Mad-Black-Woman.jpg" 
        className="post_avatar"
      />
      <div className="post_content">
        <div className="post__header">
          <div className="post_titles">
            <h3>John Doe</h3>
            <h4>@johndoe</h4>
          </div>
          <MoreHoriz className="post_options"/>
        </div>
        <div className="post_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          ipsam sed fugit non blanditiis quam earum doloremque quibusdam totam
          maxime!
        </div>
        <div className="post_media">
        <img 
          className="nice-img"
          src="https://cdn.vanguardngr.com/wp-content/uploads/2022/03/Obasanjo-1-scaled.jpg" 
          alt=""/>
        </div>
        <div className="post_footer">
          <ChatBubbleOutline fontSize="small"/>
          <Repeat fontSize="small"/>
          <FavoriteBorderOutlined fontSize="small"/>
          <PublishOutlined fontSize="small"/>
        </div>
      </div>
    </div>
  )
}

export default Post