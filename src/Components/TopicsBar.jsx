import { useEffect, useState } from "react"
import { getAllTopics } from "../api"
import { Link } from "react-router-dom";

const TopicsBar = () => {
    const [topics, setTopics] = useState([])
    useEffect(() => {
        getAllTopics().then((topics) => {
            setTopics(topics)
        })
    }, [])

    return (
        <>
            {topics.map((topic) => {
        return (
          <Link
            to={"/articles/" + topic.slug}
            className="links"
          >
            {topic.slug}
          </Link>
        );

            })}
      </>
    );
}

export default TopicsBar