import { ExternalLink } from "app/components/link";
import { NowSection } from "app/components/now/NowSection";
import { ReadingEntry } from "app/components/now/ReadingEntry";
import { Quote } from "app/components/now/Quote";
import { Pill } from "app/components/now/Pill";
import { ListItem } from "app/components/now/ListItem";

export const metadata = {
  title: "Now",
  description: "What I'm doing now.",
};

const reading = [
  {
    title: "The Bible",
    author: "God",
    description: "The word of God",
  },
];

const thinkingAbout = [
  "What does work look like in 6 months from now?",
  "If I was able to not sleep, what would I spend the extra time on?",
];

const learning = [
  "Go-to-market strategy",
  "Sales & fundraising",
  "Building in public",
  "Email protocols deep dive",
];

const excitedAbout = [
  "Moving into the new office",
  "Meeting new friends in the city",
  "Hosting the Halloween Hackathon with YC",
];

export default function NowPage() {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
        What I'm doing now
      </h1>
      <p className="mb-8 text-sm text-neutral-600 dark:text-neutral-400">
        Last updated: October 2025
      </p>

      {/* Main Focus - Full Width Banner */}
      <div className="mb-8 rounded-lg bg-neutral-100 p-6 dark:bg-neutral-900">
        <div className="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
          Primary Focus
        </div>
        <h2 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
          Building{" "}
          <ExternalLink href="https://agentmail.to">AgentMail</ExternalLink>
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300">
          Giving email inboxes to AI agents. Just left the YC Summer 2025 batch,
          sponsored a hackathon in Ann Arbor 2 weeks after, back to building and
          getting ready for the Halloween Hackthon we are hosting with YC at the
          YC office 10/31.
        </p>
      </div>

      {/* Two Column Grid for Different Sections */}
      <div className="mb-8 grid gap-8 md:grid-cols-2">
        {/* Reading */}
        <NowSection title="Reading">
          <div className="space-y-3 text-sm">
            {reading.map((book) => (
              <ReadingEntry key={book.title} {...book} />
            ))}
          </div>
        </NowSection>

        {/* Location */}
        <NowSection title="Location">
          <div className="text-sm">
            <div className="mb-2 text-neutral-900 dark:text-neutral-100">
              San Francisco, CA
            </div>
            <p className="text-neutral-600 dark:text-neutral-400">
              Living in Dogpatch, San Francisco. We just got a new office in
              FiDi right across Salesforce Park. It's the old Bacardi office.
              Let's lock in.
            </p>
          </div>
        </NowSection>
      </div>

      {/* Thinking About - Quote Style */}
      <NowSection title="Thinking about">
        <div className="space-y-2 text-sm">
          {thinkingAbout.map((thought) => (
            <Quote key={thought}>{thought}</Quote>
          ))}
        </div>
      </NowSection>

      {/* Learning - Pill Style */}
      {/* <NowSection title="Learning">
        <div className="flex flex-wrap gap-2">
          {learning.map((item) => (
            <Pill key={item}>{item}</Pill>
          ))}
        </div>
      </NowSection> */}

      {/* Excited About - Arrow List */}
      <NowSection title="Excited about">
        <div className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
          {excitedAbout.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </div>
      </NowSection>

      {/* Footer Note */}
      <div className="mt-12 border-t border-neutral-200 pt-6 dark:border-neutral-800">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Inspired by{" "}
          <ExternalLink href="https://nownownow.com/about">
            Derek Sivers' now page movement
          </ExternalLink>
        </p>
      </div>
    </section>
  );
}
