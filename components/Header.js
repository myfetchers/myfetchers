import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      mobileOpen: false,
    };
  }

  handleDrawerToggle() {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  }

  render() {
    const { mobileOpen } = this.state;
    return (
      <div style={{ flexGrow: 1 }}>

        { /* Mobile Menu */ }
        <Hidden mdUp>
          <AppBar position="static" color="default" elevation={0}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={() => this.handleDrawerToggle()}
                style={{ marginRight: 20 }}
              >
                <MenuIcon />
              </IconButton>
              <h2 style={{ textAlign: 'center', color: '#0059bf' }}>
                My Fetchers
              </h2>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={() => this.handleDrawerToggle()}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <List>
              <ListItem button>
                <Link href="/">
                  <a className="logo">My Fetchers</a>
                </Link>
              </ListItem>
              <ListItem button>
                <Link href="/how-it-works">
                  <a>How It Works</a>
                </Link>
              </ListItem>
              <ListItem button>
                <Link href="/about">
                  <a>About Us</a>
                </Link>
              </ListItem>
            </List>
            <hr />
              <a href="https://my-fetchers.herokuapp.com/signup" rel="noopener noreferrer" target="_blank"><Button size="medium" style={{ width: '100%' }} variant="outlined" color="primary">Sign Up</Button></a>
              <a href="https://my-fetchers.herokuapp.com/" rel="noopener noreferrer" target="_blank"><Button size="medium" style={{ width: '100%' }} variant="outlined" color="primary">Login</Button></a> 
          </Drawer>
        </Hidden>

        { /* Menu */ }
        <Hidden smDown>
          <AppBar position="static" color="default" elevation={0}>
            <Toolbar style={{ padding: '0px 100px' }}>
              <Link href="/">
                <a className="logo">My Fetchers</a>
              </Link>
              <div style={{ flexGrow: 1 }}>
                <Link href="/how-it-works">
                  <a>How It Works</a>
                </Link>
                <Link href="/about">
                  <a>About Us</a>
                </Link>
              </div>
              <a href="https://my-fetchers.herokuapp.com/signup" rel="noopener noreferrer" target="_blank"><Button size="medium" style={{ marginRight: 30 }} variant="outlined" color="primary">Sign Up</Button></a>
              <a href="https://my-fetchers.herokuapp.com/" rel="noopener noreferrer" target="_blank"><Button size="medium" avariant="contained" variant="outlined" color="primary">Login</Button></a>
            </Toolbar>
          </AppBar>
        </Hidden>

        <style jsx>
          {`
            a {
              float: left;
              color: black;
              padding: 15px;
              text-decoration: none;
              line-height: 25px;
              border-radius: 4px;
              font-size: 120%;
              transition: 0.4s;
            }
            .navbar a {
              text-align: center;
              margin-right: 15px;
            }
            a:hover {
              color: #0059bf;
            }
            .logo {
              color: #0059bf;
              font-size: 140% !important;
              margin-left: -12px;
              margin-right: 30px;
              font-size: 130%;
              font-weight: bold;
              transition: 0.4s;
              text-decoration: none;
            }
          `}
        </style>
      </div>
    );
  }
}
export default Header;
