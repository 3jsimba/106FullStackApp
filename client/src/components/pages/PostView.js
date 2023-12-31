import { Container, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import GoBack from "../helperComponents/GoBack";
import GridLayout from "../helperComponents/GridLayout";
import Loading from "../Loading";
import Navbar from "../nav/Navbar";
import PostCard from "../post/PostCard";
import Sidebar from "../Sidebar";
import { useParams } from "react-router-dom";
import { getPost } from "../../api/posts";
import Comments from "../comments/Comments";
import ErrorAlert from "../helperComponents/ErrorAlert";
import { isLoggedIn } from "../../helpers/authHelper";

const PostView = () => {
  const params = useParams();

  const [post, setPost] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const user = isLoggedIn();

  const fetchPost = async () => {
    setLoading(true);
    const data = await getPost(params.id, user && user.token);
    if (data.error) {
      setError(data.error);
    } else {
      setPost(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPost();
  }, [params.id]);
// dont know why this needs ot be here but it does so try to fix it glhf
  return (
    <Container>
      <Navbar />
      <GoBack />
      <GridLayout
        left={
          loading ? (
            <Loading />
          ) : post ? (
            <Stack spacing={2}>
              <PostCard post={post} key={post._id} />

              <Comments />
            </Stack>
          ) : (
            error && <ErrorAlert error={error} />
          )
        }
        right={<Sidebar />}
      />
    </Container>
  );
};

export default PostView;
