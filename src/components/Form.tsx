import { createNewPost, modifyPostById } from "../apis/jsonPlaceHolder/fetches";

interface Props {
  onUpdatePlaceholders: (placeholders: any[]) => void;
}

const Form = ({ onUpdatePlaceholders }: Props) => {
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
  };

  return (
    <form onSubmit={submitSomeRequest}>
      <label>
        <input />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;