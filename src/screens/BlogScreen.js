import React from "react";
import entries from "../entries";
import Entry from "../components/Entry";

const BlogScreen = props => {
  return (
    <>
      {entries.map((_, idx) => {
        const invertedEntry = entries[entries.length - idx - 1];
        return <Entry key={invertedEntry.id} item={invertedEntry} />;
      })}
    </>
  );
};

export default BlogScreen;
