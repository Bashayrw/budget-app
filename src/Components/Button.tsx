type ButtonProp = {
  name: string;
  variant: string 
};

export function Button({ name }: ButtonProp) {
  return <button>{name}</button>;
}
