import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            <a href="/" className="selected">
              CryptoHome
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
