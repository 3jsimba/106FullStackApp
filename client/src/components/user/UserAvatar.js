import { Avatar } from "@mui/material";
import React from "react";

const UserAvatar = ({ username, height, width }) => {
  return (
    <Avatar
      sx={{
        height: height,
        width: width,
      }}
      src={"https://robohash.org/set_set4/" + username}
    />
  );
};

export default UserAvatar;
