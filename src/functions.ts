export type sayHelloProps = {
  firstName: string;
  lastName: string;
  age: number;
};

export function helloWorld({ firstName, lastName, age }: sayHelloProps) {
  return `Hello, ${firstName} ${lastName}! You are ${age} years old.`;
}
