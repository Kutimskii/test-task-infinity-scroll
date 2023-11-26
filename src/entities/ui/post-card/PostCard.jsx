import { useNavigate } from "react-router-dom";
import './styles.css'

export default function PostCard ({ post })  {
  debugger
  const navigate = useNavigate();
  const buttonHandler = (id) => {
    navigate(`${id}`);
  }
  return (
    <div className = 'container'>
      <h2 className = 'post_id'>№ {post.id}</h2>
      <h3 className = 'title'>{post.title}</h3>
      <p>
        {post.body.length > 50 ? post.body.substring(0, 50) + "..." : post.body}
      </p>
      <button className="btn_view" onClick={()=>buttonHandler(post.id)}>
        Просмотр
      </button>
    </div>
  );
};
