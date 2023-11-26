import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import PostCard from "../post-card/PostCard";
import { useGetPostsQuery } from "../../model/postsApi";
import './styles.css'

export default function PostsList() {
  const [postStart, setPostStart] = useState(0);
  const { data = [] } = useGetPostsQuery({start: postStart});

  const { ref: lastCard, inView: inViewLastCard } = useInView({
    threshold: 0.6,
  });

  useEffect(() => {
    if (inViewLastCard) {
      debugger
      setPostStart((prev) => prev + 1);
    }
  }, [inViewLastCard]);

  return (
    <div>
      <ul className="lists_wrap">
        {data.map((post, index, arr) => {
  
            if (index === arr.length - 1 ) {
              return <li key={post.id} ref={lastCard}>
                <PostCard post={post} />
              </li>
            }else{
              return <li key={post.id}>
              <PostCard post={post} />
            </li>
            }
        })}
      </ul>
    </div>
  );
}
