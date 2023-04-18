import st from "./Loader.module.css";

const Loader = (props: { visible: boolean }) => {
  const classLoader = [st.loader];

  if (props.visible) {
    classLoader.push(st.loader_active);
  }

  return (
    <div className={classLoader.join(" ")}>
      <p>Wait...</p>
    </div>
  );
};

export default Loader;
