import React from "react";
import Tweet from "./Tweet";

const Tweetlist = ({ tweet,deleteUsers,editForm }) => (
  <section className="tweet">
    {tweet.map((tweets) => (
      <Tweet key={tweets.id} tweets={tweets} editForm={editForm} deleteUsers={deleteUsers} />
    ))}
  </section>
);

export default Tweetlist;
