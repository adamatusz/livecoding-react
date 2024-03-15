import Dog from "./components/Dog";

function App() {
  const dogs = [
    { id: 1, name: "Burek", breed: "Pitbull" },
    { id: 2, name: "Kazik", breed: "Labrador" },
    { id: 3, name: "Suzi", breed: "Husky" },
    { id: 4, name: "Marlo", breed: "Husky" },
  ];

  return (
    <ul>
      {dogs.map(({ id, name, breed }) => (
        <Dog id={id} name={name} breed={breed} key={id} />
      ))}
    </ul>
  );
}

export default App;
