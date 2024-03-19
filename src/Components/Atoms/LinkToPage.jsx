import { Link } from "react-router-dom";

const LinkToPage = ({ item }) => {
  const { link } = item;
  //console.log(link);

  return <div>{item.link ? <Link to={link}>Read more</Link> : ""}</div>;
};

export default LinkToPage;
