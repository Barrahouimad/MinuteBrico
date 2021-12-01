import Sidebar from "../sidebar/Sidebar";
import SinglePost1 from "../singlePost/SinglePost5";
import "./single.css";
import Nav from "../../home/nav";
import Footer from "../../home/Footer";

export default function Single5(props) {
  return (
    <div>
   <Nav data={props.user} /> 
    <div className="single" >
      <SinglePost1 />
      <Sidebar />
    </div>
    <Footer />
    </div>
  );
}
