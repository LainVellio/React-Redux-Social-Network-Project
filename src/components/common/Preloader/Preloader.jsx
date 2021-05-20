import cl from './Preloader.module.css';

const Preloader = (props) => (
  <div className={cl.lds_roller + ' ' + props.className}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
export default Preloader;
