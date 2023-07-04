import { useState } from "react";

import Form from "./Form";
import {
  fetchPlaceholderAlbums,
  fetchPlaceholderComments,
  fetchPlaceholderPosts,
  fetchPlaceholderTodos,
  fetchPlaceholderUsers,
} from "../apis/jsonPlaceHolder/fetches";
import "./App.css";

const App = () => {
  const [placeholders, setPlaceholders] = useState<any[]>([]);

  const fetchPosts = async () => {
    const posts = await fetchPlaceholderPosts();
    setPlaceholders(posts);
  };
  const fetchComments = async () => {
    const comments = await fetchPlaceholderComments();
    setPlaceholders(comments);
  };
  const fetchAlbums = async () => {
    const albums = await fetchPlaceholderAlbums();
    setPlaceholders(albums);
  };
  const fetchTodos = async () => {
    const todos = await fetchPlaceholderTodos();
    setPlaceholders(todos);
  };
  const fetchUsers = async () => {
    const users = await fetchPlaceholderUsers();
    setPlaceholders(users);
  };

  const updatePlaceholder = (fetchedPlaceholdersFromForm: any[]) => {
    setPlaceholders(fetchedPlaceholdersFromForm);
  };

  return (
    <main className="wrapper">
      <article>
        <header>
          <h1>
            How to organize{" "}
            <span className="highlightPurple">API Requests</span> on{" "}
            <span className="highlightOrange">Frontend</span>
          </h1>
        </header>
        <div>
          <h3>Requests</h3>

          <div>
            <h4 className="eventTypeHeading">onClick</h4>
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
            <h4 className="eventTypeHeading">onSubmit</h4>
            <Form onUpdatePlaceholders={updatePlaceholder} />
          </div>
        </div>
        <ul>
          <h3>Fetched Data</h3>
          {placeholders.map((placeholder) => (
            <li key={placeholder.id}>{JSON.stringify(placeholder)}</li>
          ))}
        </ul>
      </article>
    </main>
  );
};

export default App;
