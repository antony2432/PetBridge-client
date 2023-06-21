import PostSend from './components/PostSend';
import Posts from './components/posts';
export default function Home() {
  return (
    <main
      className="w-full h-full flex-grow flex flex-col items-center gap-2"
      style={{ backgroundImage: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)' }}
    >
      <PostSend />
      <Posts />
    </main>
  );
}
