import PostSend from '../components/PostSend';

import Posts from '../components/posts';

export default function Page() {
  return (
    <main className="flex-grow w-full h-full flex flex-col justify-center items-center gap-2">
      <PostSend />
      <Posts />
    </main>
  );
}
