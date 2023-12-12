import {Container} from "@mui/material";
import GridLayout from "../GridLayout";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import PostBrowser from "../post/PostBrowser";

const ExploreView = () => {
  return (
    <Container>
      <Navbar />
      <GridLayout
        left={<PostBrowser createPost contentType="posts" />}
        right={<Sidebar />}
      />
    </Container>
  );
};

export default ExploreView;
