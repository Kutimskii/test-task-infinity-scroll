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
  const { ref: firstCard, inView: inViewFirstCard } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inViewLastCard) {
      setPostStart((prev) => prev + 1);
    }
  }, [inViewLastCard]);

  useEffect(() => {
    if (inViewFirstCard) {
      setPostStart((prev) => prev > 0 ? prev - 1 : prev);
    }
  }, [inViewFirstCard]);

  return (
    <div>
      <ul className="lists_wrap">
        {data.map((post, index, arr) => {
          if (index === 0 ) {
            return <li key={post.id} ref={firstCard}>
                <PostCard post={post} />
              </li>
            }
          if (index === arr.length -1) {
            return <li key={post.id} ref={lastCard}>
              <PostCard post={post} />
            </li>
            }
            return <li key={post.id}>
              <PostCard post={post} />
            </li>
        })}
      </ul>
    </div>
  );
}
