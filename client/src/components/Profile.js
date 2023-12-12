import { useTheme } from "@emotion/react";
import {
  Card,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { isLoggedIn } from "../helpers/authHelper";
import Loading from "./Loading";
import UserAvatar from "./user/UserAvatar";

const Profile = (props) => {
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
