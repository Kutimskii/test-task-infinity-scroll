import '../entities/ui/post-card/styles.css'
import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../entities/model/postsApi";
import { useNavigate } from "react-router-dom";

export default function PostPage() {
  const { id } = useParams();
  const { data, isSuccess } = useGetPostByIdQuery(id);
  const navigate = useNavigate();
  const buttonHandler = () => {
    navigate(-1);
  };
  if (!isSuccess) return <h1>Page is not found</h1>;
  return (<>
    <main className ='container'>
      <h1 className = 'post_id'>№ {data.id}</h1>
      <h2 className = 'title'>{data.title}</h2>
      <p>{data.body}</p>
      <button onClick={buttonHandler}>Назад</button>
    </main>
  </>
  );
}
