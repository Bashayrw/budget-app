type ButtonProp = {
  name: string;
};

export function Button({ name }: ButtonProp) {
  return <button>{name}</button>;
}
