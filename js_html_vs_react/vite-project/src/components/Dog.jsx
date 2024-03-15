// eslint-disable-next-line react/prop-types
const Dog = ({ id, name, breed }) => {
  console.log("breed", breed);
  return <li key={id}>{name} </li>;
};

export default Dog;
