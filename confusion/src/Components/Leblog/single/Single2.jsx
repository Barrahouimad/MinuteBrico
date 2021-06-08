import Sidebar from "../sidebar/Sidebar";
import SinglePost1 from "../singlePost/SinglePost2";
import "./single.css";
import Nav from "../shared/nav";
import Footer from "../shared/footer";

export default function Single2() {
  return (
    <>
    <Nav isAuth={document.location.href.includes("true")?true:false} data={document.location.href} />
    <div className="single">
      <SinglePost1 />
      <Sidebar />
    </div>
    <Footer />
    </>
  );
}
