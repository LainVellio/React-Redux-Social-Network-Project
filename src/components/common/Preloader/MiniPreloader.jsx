import st from './MiniPreloader.module.css';

const MiniPreloader = (props) => (
  <div className={st.lds_ring}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default MiniPreloader;
