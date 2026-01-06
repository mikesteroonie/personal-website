import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import React from "react";
import { Slideshow } from "./Slideshow";

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

// Single photo with frame and caption
function Photo({
  src,
  alt,
  caption,
  frame = true,
  width = 800,
  height = 600,
  maxWidth,
  maxHeight,
}: {
  src: string;
  alt: string;
  caption?: string;
  frame?: boolean;
  width?: number;
  height?: number;
  maxWidth?: string | number;
  maxHeight?: string | number;
}) {
  const maxWidthStyle = maxWidth
    ? typeof maxWidth === "number"
      ? `${maxWidth}px`
      : maxWidth
    : undefined;
  const maxHeightStyle = maxHeight
    ? typeof maxHeight === "number"
      ? `${maxHeight}px`
      : maxHeight
    : undefined;

  return (
    <figure className="my-8 flex flex-col items-center">
      <div
        className={`relative overflow-hidden ${
          frame
            ? "bg-neutral-100 dark:bg-neutral-800 p-2 rounded-lg shadow-md"
            : ""
        }`}
        style={{ maxWidth: maxWidthStyle, maxHeight: maxHeightStyle }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto rounded-md object-cover"
          style={{ maxHeight: maxHeightStyle }}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-neutral-500 dark:text-neutral-400 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// Video player component
function Video({
  src,
  caption,
  poster,
  autoPlay = false,
  loop = false,
  muted = false,
  maxWidth = "100%",
  maxHeight,
}: {
  src: string;
  caption?: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  maxWidth?: string | number;
  maxHeight?: string | number;
}) {
  const maxWidthStyle =
    typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth;
  const maxHeightStyle = maxHeight
    ? typeof maxHeight === "number"
      ? `${maxHeight}px`
      : maxHeight
    : undefined;

  return (
    <figure className="my-8 flex flex-col items-center">
      <div
        className="relative bg-neutral-900 rounded-xl overflow-hidden shadow-lg w-full"
        style={{ maxWidth: maxWidthStyle, maxHeight: maxHeightStyle }}
      >
        <video
          src={src}
          poster={poster}
          controls
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline
          className="w-full h-auto"
          style={{ maxHeight: maxHeightStyle }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-neutral-500 dark:text-neutral-400 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// YouTube/Vimeo embed component
function Embed({
  src,
  caption,
  aspectRatio = "16/9",
}: {
  src: string;
  caption?: string;
  aspectRatio?: string;
}) {
  return (
    <figure className="my-8">
      <div
        className="relative bg-neutral-900 rounded-xl overflow-hidden shadow-lg"
        style={{ aspectRatio }}
      >
        <iframe
          src={src}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-neutral-500 dark:text-neutral-400 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function CustomLink(props) {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Code({ children, ...props }) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
  Photo,
  Slideshow,
  Video,
  Embed,
};

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
