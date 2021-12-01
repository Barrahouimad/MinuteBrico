import Sidebar from "../sidebar/Sidebar";
import SinglePost1 from "../singlePost/SinglePost4";
import "./single.css";
import Nav from "../../home/nav";
import Footer from "../../home/Footer";

export default function Single4(props) {
  return (
    <>
   <Nav data={props.user} /> <div className="single">
      <SinglePost1 />
      <Sidebar />
    </div>
    <Footer />
    </>
  );
}
