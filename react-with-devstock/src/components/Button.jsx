export default function Button(...args) {
  console.log("args", args);
  const className = "button";
  return <button className={className}>Kliknij mnie!</button>;
}

export const className = "button";
