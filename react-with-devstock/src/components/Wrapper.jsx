const Wrapper = ({ children, component }) => {
  // const value = React.Children.toArray(children);
  console.log("compo", component);
  return (
    <div>
      <h1>Jestem Wrapper</h1>
      <div>{children}</div>
      {component}
    </div>
  );
};

export default Wrapper;
