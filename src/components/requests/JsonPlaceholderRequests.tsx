import {
  fetchPlaceholderAlbums,
  fetchPlaceholderComments,
  fetchPlaceholderPosts,
  fetchPlaceholderTodos,
  fetchPlaceholderUsers,
} from "src/apis/jsonPlaceHolder/fetches";
import { RequestsProps } from ".";
import Form from "../Form";

const JsonPlaceholderRequests = ({ onUpdateData }: RequestsProps) => {
  const fetchPosts = async () => {
    const posts = await fetchPlaceholderPosts();
    onUpdateData(posts);
  };
  const fetchComments = async () => {
    const comments = await fetchPlaceholderComments();
    onUpdateData(comments);
  };
  const fetchAlbums = async () => {
    const albums = await fetchPlaceholderAlbums();
    onUpdateData(albums);
  };
  const fetchTodos = async () => {
    const todos = await fetchPlaceholderTodos();
    onUpdateData(todos);
  };
  const fetchUsers = async () => {
    const users = await fetchPlaceholderUsers();
    onUpdateData(users);
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
            fetch users
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
