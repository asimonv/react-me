import React from "react";
import { useParams } from "react-router-dom";
import Entry from "../components/Entry";
import entries from "../entries/blog";

const EntryScreen = ({ currentIndex }) => {
  const { postId } = useParams();
  return (
    <div>
      {postId >= entries.length || postId < 0 ? (
        <h3>Please select a valid post.</h3>
      ) : (
        <Entry key={postId} item={entries[postId]} />
      )}
    </div>
  );
};

export default EntryScreen;
