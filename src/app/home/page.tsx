import PostSend from './components/PostSend';
import Posts from './components/posts';
export default function Home() {
  return (
      <article className="w-full flex flex-col justify-center items-center gap-2 mb-10 bg-slate-400">
       <PostSend/>
       <Posts/>
      </article>
  );
}
