import React from 'react'
import './Sidebar.css'
// import CottageIcon from '@mui/icons-material/Cottage';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
// import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from "./SidebarOption.js";
import MessageIcon from '@mui/icons-material/Message';
import ListIcon from '@mui/icons-material/List';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AnchorIcon from '@mui/icons-material/Anchor';// import Button from 'material-ui/Button';

function Sidebar() {
  return (
    <div className="sidebar">
      {/* TYDL Icon*/}
      {/* <TwitterIcon /> */}
      <AnchorIcon className="sidebar__icon"/>
      <SidebarOption active Icon = {HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon}  text="Navigation" />
      <SidebarOption Icon={NotificationsIcon} text="Notifications" />
      <SidebarOption Icon={MessageIcon}  text="Messages" />
      <SidebarOption Icon={BookmarkIcon}  text="Bookmarks" />
      <SidebarOption Icon={ListIcon}  text="lists" />
      <SidebarOption Icon={PersonOutlineIcon}  text="Profile" />
      <SidebarOption Icon={MoreHorizIcon}  text="More" />
      {/* <Button>Tweet</Button> */}
      <button className="button-53" >Blog</button>

    </div>
  )
}

export default Sidebar
