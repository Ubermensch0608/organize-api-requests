import JsonPlaceHolderBaseApi from "./JsonPlaceHolderBaseApi";

interface NewPostBody {
  title: string;
  body: string;
  userId: number;
}

const fetchPlaceholderPosts = async () => {
  return (await JsonPlaceHolderBaseApi.get("/posts")).data;
};

const createNewPost = async (body: NewPostBody) => {
  const response = await JsonPlaceHolderBaseApi.post("/posts", body);
  return response;
};

const modifyPostById = async (postId: number, body: NewPostBody) => {
  const response = await JsonPlaceHolderBaseApi.put(`/posts/${postId}`, body);
  return response;
};

const fetchPlaceholderPostById = async (id: number) => {
  return (await JsonPlaceHolderBaseApi.get(`/posts/${id}`)).data;
};

const fetchPlaceholderPostCommentsById = async (id: number) => {
  return (await JsonPlaceHolderBaseApi.get(`/posts/${id}/comments`)).data;
};

const fetchPlaceholderComments = async () => {
  return (await JsonPlaceHolderBaseApi.get("/comments")).data;
};

const fetchPlaceholderCommentsByPostId = async (postId: number) => {
  return (await JsonPlaceHolderBaseApi.get(`/comments?postId=${postId}`)).data;
};

const fetchPlaceholderAlbums = async () => {
  return (await JsonPlaceHolderBaseApi.get("/albums")).data;
};
const fetchPlaceholderTodos = async () => {
  return (await JsonPlaceHolderBaseApi.get("/todos")).data;
};
const fetchPlaceholderUsers = async () => {
  return (await JsonPlaceHolderBaseApi.get("/users")).data;
};

export {
  fetchPlaceholderPosts,
  fetchPlaceholderPostById,
  fetchPlaceholderPostCommentsById,
  createNewPost,
  modifyPostById,
  fetchPlaceholderComments,
  fetchPlaceholderCommentsByPostId,
  fetchPlaceholderAlbums,
  fetchPlaceholderTodos,
  fetchPlaceholderUsers,
};
