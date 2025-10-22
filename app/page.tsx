import { BlogPosts } from "app/components/posts";
import { ExternalLink } from "app/components/link";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Michael Hyun Kim's Corner
      </h1>
      <p className="mb-4">
        I'm Michael, and this is my corner of the internet. I typically go by
        Mikey in a more casual setting but figured I'd give you the option to
        choose.
      </p>
      <p className="mb-4">
        I previously worked at{" "}
        <ExternalLink href="https://www.youtube.com/watch?v=4Ort_bdTQlk">
          NVIDIA
        </ExternalLink>{" "}
        on the Autonomous Vehicles Team building out 3D labeling software, and
        was set to work at{" "}
        <ExternalLink href="https://www.meta.com">Meta</ExternalLink> on the
        Instagram team after graduating but decided to drop it all and start{" "}
        <ExternalLink href="https://agentmail.to">AgentMail</ExternalLink>.
      </p>
      <p className="mb-4">
        Graduated University of Michigan May 2025, go blue. Currently based out
        of San Francisco. Always open to chat over coffee.
      </p>
      <p className="mb-4">Reach me at mhykim[at]umich[dot]edu</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
