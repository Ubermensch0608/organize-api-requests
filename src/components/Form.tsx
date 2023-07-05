import { createNewPost, modifyPostById } from "../apis/jsonPlaceHolder/fetches";

import "./App.css";
import { RequestsProps } from "./requests";

const Form = ({ onUpdateData }: RequestsProps) => {
  const submitSomeRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await createNewPost({
      title: "hihi",
      body: "body",
      userId: 1001,
    });
    const res2 = await modifyPostById(1, {
      title: "change",
      body: "11",
      userId: 1001,
    });

    console.log(res);
    console.log(res2);
    onUpdateData(res.data);
  };

  return (
    <form className="actions form" onSubmit={submitSomeRequest}>
      <label>
        <input placeholder="This is Dummy Input" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
