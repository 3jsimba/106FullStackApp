import { Container } from "@mui/material";
import React from "react";
import GoBack from "../helperComponents/GoBack";
import GridLayout from "../helperComponents/GridLayout";
import Navbar from "../nav/Navbar";
import PostEditor from "../PostEditor";
import Sidebar from "../Sidebar";

const CreatePostView = () => {
  return (
    <Container>
      <Navbar />
      <GoBack />
      <GridLayout left={<PostEditor />} right={<Sidebar />} />
    </Container>
  );
};

export default CreatePostView;
