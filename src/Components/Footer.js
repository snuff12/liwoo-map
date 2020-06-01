import React from 'react';
import { Link } from "react-router-dom";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MapIcon from '@material-ui/icons/Map';


export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      style ={{
        position:"fixed",
        width:"100%",
        bottom:"0px"
      }}
    >
      <BottomNavigationAction component={Link} to="/map" label="Map" value ="map" icon={<MapIcon />} />
      <BottomNavigationAction component={Link} to="/liwoo" label="LIWOO" value ="liwoo" icon={<FavoriteIcon />} />
      <BottomNavigationAction component={Link} to="/youtube" label="Youtube" value ="youtube" icon={<YouTubeIcon />} />
    </BottomNavigation>
  );
}
