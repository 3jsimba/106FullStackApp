import { Avatar } from "@mui/material";
import React from "react";

  function UserAvatar ({ username, height, width }) {
    
    return (
      <Avatar
        sx={{
          height: height,
          width: width,
        }}
      />
    );
  }
  
export default UserAvatar;
