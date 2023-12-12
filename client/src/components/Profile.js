

import { useTheme } from "@emotion/react";

import UserAvatar from "./user/UserAvatar";
import {
  Avatar,
  Button,
  Card,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { isLoggedIn } from "../helpers/authHelper";
import { Box } from "@mui/system";
import ContentUpdateEditor from "../components/content/ContentUpdateEditor";
import Loading from "./Loading";
import { AiFillEdit } from "react-icons/ai";
import HorizontalStack from "./util/HorizontalStack";

  function Profile (props){
  const [user, setUser] = useState(null);
  const currentUser = isLoggedIn();
  const theme = useTheme();
  const iconColor = theme.palette.primary.main;

  useEffect(() => {
    if (props.profile) {
      setUser(props.profile.user);
    }
  }, [props.profile]);

  return (
    <Card>
      {user ? (
        <Stack alignItems="center" spacing={2}>
          <Box my={1}>
            <UserAvatar width={150} height={150} username={user.username} />
          </Box>

          <Typography variant="h5">{user.username}</Typography>
          
        </Stack>
      ) : (
        <Loading label="Loading profile" />
      )}
    </Card>
  );
};

export default Profile;
