
import { useTheme } from "@emotion/react";

import { isLoggedIn } from "../helpers/authHelper";
import {
  Card,
  Divider, Stack, Typography,
} from "@mui/material";
import { Box } from "@mui/system";


import React, { useEffect, useState } from "react";
import UserAvatar from "./user/UserAvatar";

import HorizontalStack from "./util/HorizontalStack";

// function isLoggedIn() {
//   throw new Error("Function not implemented.");
// }

function MobileProfile(props) {

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (props.profile) {
      setUser(props.profile.user);
    }
  }, [props.profile]);

  return (
    <Card sx={{ display: { sm: "block", md: "none" }, mb: 2 }}>
      {user ? (
        <Stack spacing={2}>
          <HorizontalStack spacing={2} justifyContent="space-between">
            <HorizontalStack>
              <UserAvatar width={50} height={50} username={user.username} />
              <Typography variant="h6" textOverflow="ellipses">
                {user.username}
              </Typography>
            </HorizontalStack>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <HorizontalStack spacing={3}>
                <Stack alignItems="center">
                </Stack>
                <Stack alignItems="center">
                  <Typography color="text.secondary">Posts</Typography>
                  <Typography color="text.secondary">
                    <b>{props.profile.posts.count}</b>
                  </Typography>
                </Stack>
              </HorizontalStack>
            </Box>
          </HorizontalStack>
          <Divider />2
        </Stack>
      ) : (
        <>Loading...</>
      )}
    </Card>
  );
};
   
export default MobileProfile;
