import Code from "../code";

export default function Component3() {
  return (
    <section className="component">
      <h2>Static Typing in TypeScript</h2>
      <p>
        Static typing is one of the core features that sets TypeScript apart
        from JavaScript. In JavaScript, types are dynamically assigned, meaning
        you can change the type of a variable at runtime. In contrast,
        TypeScript introduces static typing, allowing developers to define
        variable types at compile time. This results in more predictable code
        and helps catch errors early in the development process.
      </p>
      <p>Key benefits of static typing:</p>
      <ol>
        <li>
          <span className="bold">Error Prevention:</span> By explicitly defining
          types, TypeScript helps prevent common runtime errors such as
          assigning the wrong type to a variable or passing incorrect arguments
          to functions. The TypeScript compiler checks the types during
          compilation, catching issues before the code is run.
        </li>
        <li>
          <span className="bold">Improved Code Quality:</span> Static typing
          ensures consistency in your code. When types are predefined, it
          becomes easier to understand how data is structured, which improves
          the readability and maintainability of the code.
        </li>
        <li>
          <span className="bold">Better IDE Support:</span> Static typing
          enhances features like autocompletion, type checking, and refactoring
          in modern Integrated Development Environments (IDEs). This makes
          coding faster and reduces the chances of introducing bugs.
        </li>
        <li>
          <span className="bold">Type Inference:</span> Even though TypeScript
          allows static typing, it also features type inference. This means
          TypeScript can automatically deduce the type based on the assigned
          value, reducing the need to explicitly define types in every case.
        </li>
      </ol>
      <p>Example of static typing in TypeScript:</p>
      <Code
        code={`let count: number = 5;
let name: string = "John";`}
      />
      <p>
        In this example, the types (<code>number</code> and <code>string</code>)
        are explicitly assigned, ensuring that <code>count</code> will always
        hold a number and <code>name</code> a string, catching any mismatches at
        compile time.
      </p>
      <p>
        Static typing improves the safety and reliability of code, especially in
        large and complex applications.
      </p>
    </section>
  );
}
