import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <div>
          <a className={classes.item} href="#s">
            Profile
          </a>
        </div>
        <div>
          <a className={classes.item} href="#s">
            Messages
          </a>
        </div>
        <div>
          <a className={classes.item} href="#s">
            News
          </a>
        </div>
        <div>
          <a className={classes.item} href="#s">
            Music
          </a>
        </div>
        <div>
          <a className={classes.item} href="#s">
            Settings
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
