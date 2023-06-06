import PostSend from '../components/PostSend';

import Posts from '../components/posts';

export default function Home() {
  return (
      <main className=" flex flex-col justify-center items-center gap-2 mb-10" >
       <PostSend />
 
       <Posts/>
      </main>
  );
}
  