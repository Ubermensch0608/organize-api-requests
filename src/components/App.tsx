import { useState } from "react";

import JsonPlaceHolderBaseApi from "../apis/jsonPlaceHolder/JsonPlaceHolderBaseApi";
import "./App.css";

const App = () => {
  const [placeholders, setPlaceholders] = useState([]);

  const fetchPosts = async () => {
    const { data } = await JsonPlaceHolderBaseApi("/posts");
    setPlaceholders(data);
  };
  const fetchComments = async () => {
    const { data } = await JsonPlaceHolderBaseApi("/comments");
    setPlaceholders(data);
  };
  const fetchAlbums = async () => {
    const { data } = await JsonPlaceHolderBaseApi("/albums");
    setPlaceholders(data);
  };
  const fetchTodos = async () => {
    const { data } = await JsonPlaceHolderBaseApi("/todos");
    setPlaceholders(data);
  };
  const fetchUsers = async () => {
    const { data } = await JsonPlaceHolderBaseApi("/users");
    setPlaceholders(data);
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
          <div className="requestButtons">
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
