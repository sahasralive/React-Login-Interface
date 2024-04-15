import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";

function IconButton() {
  return (
    <div>
      <Button className="filled" startIcon={<FacebookIcon />} />
      <Button className="filled" startIcon={<GoogleIcon />} />
      <Button className="filled" startIcon={<XIcon />} />
      <Button className="filled" startIcon={<GitHubIcon />} />
    </div>
  );
}

export default IconButton;
