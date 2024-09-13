import Code from "../code";

export default function Component5() {
  return (
    <section className="component">
      <h2>Optional and Default Parameters in TypeScript</h2>
      <p>
        TypeScript enhances the flexibility of functions by allowing you to
        define optional and default parameters. This makes it easier to handle
        different scenarios when calling functions, avoiding the need for
        multiple overloads or complex logic to manage missing arguments.
      </p>
      <ol>
        <li>
          <span className="bold">Optional Parameters:</span> In TypeScript, you
          can mark a parameter as optional by adding a question mark (
          <code>?</code>) after its name. This means the argument is not
          required when calling the function. If not provided, it will have the
          value <code>undefined</code> by default. Example:
          <Code
            code={`function greet(name: string, greeting?: string) {
    return greeting ? \`\${greeting}, \${name}!\` : \`Hello, \${name}!\`;
}

console.log(greet("Alice"));  // Output: Hello, Alice!
console.log(greet("Alice", "Hi"));  // Output: Hi, Alice!`}
          />
          In the above example, greeting is an optional parameter. If it’s not
          provided, TypeScript won’t raise an error, and the function still
          works with the default logic.
        </li>

        <li>
          <span className="bold">Default Parameters:</span> Default parameters
          allow you to assign a default value to a parameter, which will be used
          if no argument is provided. This eliminates the need for additional
          conditional checks or fallback values within the function body.
          Example:
          <Code
            code={`function greet(name: string, greeting: string = "Hello") {
    console.log(\`\${greeting}, \${name}!\`);
}

greet('Bob');              // Output: Hello, Bob!
greet('Bob', 'Good day');   // Output: Good day, Bob!`}
          />
          In this case, if no <code>greeting</code> is passed, the default value{" "}
          <code>"Hello"</code> will be used. When an argument is provided, it
          overrides the default.
        </li>
      </ol>
      <h3>Benefits of Optional and Default Parameters:</h3>
      <ol>
        <li>
          <span className="bold">Simplifies Function Calls:</span> You don’t
          have to pass every argument, especially if the parameter is not always
          necessary or a sensible default value exists.
        </li>
        <li>
          <span className="bold">Reduces Redundant Code:</span> You can avoid
          writing additional logic inside the function to handle missing
          parameters.
        </li>
        <li>
          <span className="bold">Flexible Function Definitions:</span> Functions
          can handle various use cases with fewer parameters, making them more
          reusable.
        </li>
      </ol>
      <p>
        These features improve the readability and maintainability of functions
        in TypeScript, especially when working with flexible inputs.
      </p>
    </section>
  );
}
