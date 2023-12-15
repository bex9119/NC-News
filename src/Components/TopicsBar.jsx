import { useEffect, useState } from "react";
import { getAllTopics } from "../api";
import { Link } from "react-router-dom";

const TopicsBar = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getAllTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <section className="flex justify-left space-x-10">
      {topics.map((topic) => {
        return (
          <Link
            to={"/articles/topics/" + topic.slug}
            key={topic.slug}
            className="text-blue-500 hover:text-blue-800 font-bold"
          >
            {topic.slug}
          </Link>
        );
      })}
    </section>
  );
};

export default TopicsBar;
