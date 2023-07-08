import JsonPlaceHolderBaseApi from "./JsonPlaceHolderBaseApi";

interface NewPostBody {
  title: string;
  body: string;
  userId: number;
}

const JsonPlaceHolderResource = (() => {
  const instance = new JsonPlaceHolderBaseApi().getAxiosInstance();

  const readers = {
    posts: async () => {
      return (await instance.get("/posts")).data;
    },
    postById: async (id: number) => {
      return (await instance.get(`/posts/${id}`)).data;
    },
    postCommentsById: async (id: number) => {
      return (await instance.get(`/posts/${id}/comments`)).data;
    },
    comments: async () => await instance.get("/comments"),
    commentsByPostId: async (postId: number) => {
      return (await instance.get(`/comments?postId=${postId}`)).data;
    },
    albums: async () => {
      return (await instance.get("/albums")).data;
    },
    todos: async () => {
      return (await instance.get("/todos")).data;
    },
    users: async () => {
      return (await instance.get("/users")).data;
    },
  };

  const creators = {
    newPost: async (body: NewPostBody) => {
      const response = await instance.post("/posts", body);
      return response;
    },
  };

  const updaters = {
    postById: async (postId: number, body: NewPostBody) => {
      const response = await instance.put(`/posts/${postId}`, body);
      return response;
    },
  };

  return {
    read: readers,
    create: creators,
    update: updaters,
  };
})();

export default JsonPlaceHolderResource;
