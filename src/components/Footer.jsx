import foot from "../css/footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <>
     <div className="black">
      
      <div className="flex">
        <div>
          Created By SONU KUMAR
        </div>
        <div>
          < LinkedInIcon className="icon"/>
          <GitHubIcon className="icon"/>
        </div>
      </div>
     </div>
    </>
  );
};

export default Footer;
