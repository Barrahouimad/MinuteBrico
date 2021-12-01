import Sidebar from "../sidebar/Sidebar";
import SinglePost1 from "../singlePost/SinglePost1";
import "./single.css";
import Nav from "../../home/nav";
import Footer from "../../home/Footer";

export default function Single1(props) {
  return (
    <>
   <Nav data={props.user} />
      <div className="single">
      <SinglePost1 />
      <Sidebar />
    </div>
    <Footer />
    </>
  );
}
