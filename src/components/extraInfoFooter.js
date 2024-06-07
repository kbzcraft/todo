import "./../styles/extraFooterInfo.css";
import {
  facebookIcon,
  githubIcon,
  instagramIcon,
  xIcon,
  youtubeIcon,
} from "./js/icons";

const extraInfoFooter = (props = { data: "04" }) => {
  return `
    <div class='extraInfo'>
        <div class='totalTaskCreated'>
            <h1>Task Created</h1>
            <strong>${props.data}</strong>
        </div>
        <div class='socialMediaIconsParent'>
            <em>Contact Me</em>
            <div class='socialMediaIcons'>
                <i>${facebookIcon}</i>
                <i>${xIcon}</i>
                <i>${instagramIcon}</i>
                <i>${youtubeIcon}</i>
                <i>${githubIcon}</i>
            </div>
        </div>
    </div>
    `;
};

export default extraInfoFooter;
