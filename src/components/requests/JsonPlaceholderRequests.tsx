import { useSetAtom } from "jotai";

import JsonPlaceHolderResource from "src/apis/jsonPlaceHolder/requestJsonPlaceHolder";
import {
  requestHeadersState,
  responseBodyState,
  responseConfigsAndHeadersState,
} from "src/atom";
import Form from "../Form";

const JsonPlaceholderRequests = () => {
  const setRequestHeaders = useSetAtom(requestHeadersState);
  const setResponseBody = useSetAtom(responseBodyState);
  const setResponseConfigsAndHeaders = useSetAtom(
    responseConfigsAndHeadersState
  );

  const JsonPlaceHolder = JsonPlaceHolderResource;

  JsonPlaceHolder.interceptors.request.use((configs) => {
    setRequestHeaders(configs);
    return configs;
  });

  JsonPlaceHolder.interceptors.response.use((response) => {
    setResponseConfigsAndHeaders([response.headers, response.config]);
    return response;
  });

  const fetchPosts = async () => {
    const posts = await JsonPlaceHolder.read.posts();
    setResponseBody(posts);
  };
  const fetchComments = async () => {
    const comments = await JsonPlaceHolder.read.comments();
    setResponseBody(comments);
  };
  const fetchAlbums = async () => {
    const albums = await JsonPlaceHolder.read.albums();
    setResponseBody(albums);
  };
  const fetchTodos = async () => {
    const todos = await JsonPlaceHolder.read.todos();
    setResponseBody(todos);
  };
  const fetchUsers = async () => {
    const users = await JsonPlaceHolder.read.users();
    setResponseBody(users);
  };

  return (
    <article>
      <div>
        <h4>JsonPlaceholder APIs</h4>
        <h5 className="eventTypeHeading">onClick</h5>
        <div className="actions requestButtons">
          <button type="button" onClick={fetchPosts}>
            fetch posts
          </button>
          <button type="button" onClick={fetchComments}>
            fetch comments
          </button>
          <button type="button" onClick={fetchAlbums}>
            fetch albums
          </button>
          <button type="button" onClick={fetchTodos}>
            fetch todos
          </button>
          <button type="button" onClick={fetchUsers}>
            fetch auth users
          </button>
        </div>
      </div>

      <div>
        <h5 className="eventTypeHeading">onSubmit</h5>
        <Form onUpdateData={(d) => console.log(d)} />
      </div>
    </article>
  );
};
export default JsonPlaceholderRequests;
