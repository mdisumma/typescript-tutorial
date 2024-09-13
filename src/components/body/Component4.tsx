import Code from "../code";
export default function Component4() {
  return (
    <section className="component">
      <h2>Type Inference in TypeScript</h2>
      <p>
        Type inference is a powerful feature in TypeScript that allows the
        compiler to automatically determine the type of a variable based on the
        value assigned to it. This reduces the need for explicit type
        annotations, making the code cleaner and more concise while still
        benefiting from TypeScript’s static type-checking.
      </p>
      <p>
        In many cases, TypeScript is smart enough to infer the type without
        requiring you to manually declare it.
      </p>
      <p>Key aspects of type inference:</p>
      <ol>
        <li>
          <span className="bold">Automatic Type Assignment:</span> When you
          assign a value to a variable, TypeScript infers its type based on that
          value. For example:
          <Code
            code={`let age = 30;  // inferred as number
let isStudent = true;  // inferred as boolean`}
          />
          <p>
            n this case, you don’t need to explicitly specify the type of{" "}
            <code>age</code> or <code>isStudent</code> because TypeScript infers
            it from the assigned value.
          </p>
        </li>
        <li>
          <span className="bold">Function Return Types:</span> TypeScript can
          also infer the return type of functions based on the return statement:
          <Code
            code={`function add(a: number, b: number) {
    return a + b;  // inferred as number
}`}
          />
          <p>
            Here, TypeScript infers the return type of the <code>add</code>{" "}
            function as <code>number</code> based on the type of the parameters
            and the return value.
          </p>
        </li>
        <li>
          <span className="bold">Improved Productivity:</span> Type inference
          reduces the need to write redundant type declarations, speeding up
          development without sacrificing the benefits of type safety. This
          keeps code concise while still ensuring accuracy through type checks.
        </li>
        <li>
          <span className="bold">Contextual Typing:</span> TypeScript can infer
          types in more complex scenarios, such as when passing values to
          functions, determining what type should be used based on how the value
          is used in a particular context.
        </li>
      </ol>
      <p>
        By leveraging type inference, developers can write less code while still
        maintaining the strict type safety and reliability that TypeScript
        provides. This strikes a balance between flexibility and structure.
      </p>
    </section>
  );
}
