import { BASE_URL } from "../config";


const getPosts = async (token, query) => {
  try {
    const res = await fetch(
      BASE_URL + "api/posts?" + new URLSearchParams(query),
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const getPost = async (postId, token) => {
  try {
    const res = await fetch(BASE_URL + "api/posts/" + postId, {
      headers: {
        "x-access-token": token,
      },
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

// 
const createPost = async (post, user) => {
  try {
    const res = await fetch(BASE_URL + "api/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user.token,
      },
      body: JSON.stringify(post),
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const updatePost = async (postId, user, data) => {
  try {
    const res = await fetch(BASE_URL + "api/posts/" + postId, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user.token,
      },
      body: JSON.stringify(data),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (postId, user) => {
  try {
    const res = await fetch(BASE_URL + "api/posts/" + postId, {
      method: "DELETE",
      headers: {
        "x-access-token": user.token,
      },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const getComments = async (params) => {
  try {
    const { id } = params;
    const res = await fetch(BASE_URL + "api/comments/post/" + id);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const getUserComments = async (params) => {
  try {
    const { id, query } = params;
    const res = await fetch(
      BASE_URL + "api/comments/user/" + id + "?" + new URLSearchParams(query)
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const createComment = async (comment, params, user) => {
  try {
    const { id } = params;
    const res = await fetch(BASE_URL + "api/comments/" + id, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user.token,
      },
      body: JSON.stringify(comment),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const updateComment = async (commentId, user, data) => {
  try {
    const res = await fetch(BASE_URL + "api/comments/" + commentId, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user.token,
      },
      body: JSON.stringify(data),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const deleteComment = async (commentId, user) => {
  try {
    const res = await fetch(BASE_URL + "api/comments/" + commentId, {
      method: "DELETE",
      headers: {
        "x-access-token": user.token,
      },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};


export {
  getPost,
  createPost,
  updatePost,
  deletePost,
  getPosts,
  getUserComments,
  getComments,
  createComment,
  deleteComment,
  updateComment,
};
