import logo from "../media/logo.png";
import logo1 from "../media/logo1.png";
import p1 from "../media/p1.png";
import p2 from "../media/p2.gif";
import p3 from "../media/p3.png";


const Landing = () => {
  return (
    <div className="landing_container">
      <img src={logo} alt="" className="img_1" />
       
      <img src={p1} alt=""  className="img_2"/>
      <img src={p2} alt=""  className="img_3"/>
      <img src={p3} alt=""  className="img_4"/>
    </div>
  );
};

export default Landing;
