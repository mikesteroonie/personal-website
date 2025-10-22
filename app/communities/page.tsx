import { ExternalLink } from "app/components/link";

export const metadata = {
  title: "Communities",
  description: "Communities I identify with and am part of.",
};

const communities = [
  {
    name: "Korea",
    description:
      "Born in Korea, spent half of my life in this beautiful country",
  },
  {
    name: "Toronto",
    description:
      "Grew up in Toronto, Canada, Richmond Hill. Currently live in North York. Biggest 6ix ride or die.",
  },
  {
    name: "University of Michigan",
    description: "Class of 2025. Go Blue!",
    href: "https://umich.edu",
  },
  {
    name: "Innovation Community",
    description:
      "Learning community that placed me in East Quad freshman year that has changed the trajectory of my life.",
  },
  {
    name: "AKPsi",
    description:
      "A community of brothers that I call family and influenced all aspects of my life.",
  },
  {
    name: "Y Combinator",
    description:
      "A group of people that I can deeply relate to and gave me and AgentMail all we have today.",
    href: "https://ycombinator.com",
  },

  {
    name: "AgentMail",
    description: "Building the future of email for AI agents",
    href: "https://agentmail.to",
  },
  {
    name: "NVIDIA",
    description:
      "Once an NVIDIAN, always an NVIDIAN. Thats what my manager told me lmao. First taste of real engineering and what it means to be a developer.",
    href: "https://nvidia.com",
  },
];

export default function CommunitiesPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Communities
      </h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        Groups and communities that have shaped who I am and what I believe in.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {communities.map((community) => (
          <div
            key={community.name}
            className="group rounded-lg border border-neutral-200 p-4 transition-all hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
          >
            <h3 className="mb-2 font-semibold text-neutral-900 dark:text-neutral-100">
              {community.href ? (
                <ExternalLink href={community.href}>
                  {community.name}
                </ExternalLink>
              ) : (
                community.name
              )}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {community.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
