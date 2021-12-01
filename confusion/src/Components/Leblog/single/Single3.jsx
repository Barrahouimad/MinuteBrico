import Sidebar from "../sidebar/Sidebar";
import SinglePost1 from "../singlePost/SinglePost3";
import "./single.css";
import Nav from "../../home/nav";
import Footer from "../../home/Footer";
export default function Single3(props) {
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
