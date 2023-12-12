import { Container, Stack} from "@mui/material";
import GridLayout from "../helperComponents/GridLayout";
import Navbar from "../nav/Navbar";
import PostBrowser from "../post/PostBrowser";
import Sidebar from "../Sidebar";

const SearchView = () => {
  return (
    <Container>
      <Navbar />
      <GridLayout
        left={
          <Stack spacing={2}>
            <PostBrowser createPost contentType="posts" />
          </Stack>
        }
        right={<Sidebar />}
      />
    </Container>
  );
};

export default SearchView;
