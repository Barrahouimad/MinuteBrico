import Sidebar from "../sidebar/Sidebar";
import SinglePost from "../singlePost/SinglePost";
import "./single.css";
import Nav from "../../home/nav";
import Footer from "../../home/Footer";

export default function Single(props) {
  return (
    <>
    <Nav data={props.user} />
    <div className="container">
    <div className="single">
      <SinglePost />
       <Sidebar/>
    </div>

    </div>

    <Footer />
    </>
  );
}
