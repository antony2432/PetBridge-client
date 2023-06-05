import PostSend from '../components/PostSend';
import Posts from '../components/posts';
import FiltersPost from '../components/FiltersPost/Index';

export default function Home() {
  return (
      <main className="w-full flex flex-col justify-center items-center gap-2 mb-10 order-2 bg-slate-400">
        <FiltersPost/>
       <PostSend/>
       <Posts/>
      </main>
  );
}
  