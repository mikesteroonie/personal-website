import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Essays",
  description: "Read my essays.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Essays</h1>
      <BlogPosts />
    </section>
  );
}
