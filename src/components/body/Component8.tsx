import Code from "../code";

export default function Component8() {
  return (
    <section className="component">
      <h2>Generics</h2>
      <p>
        Generics in TypeScript provide a way to create reusable and flexible
        components by allowing you to define types that can be specified later.
        They enable you to write functions, classes, and interfaces that work
        with a variety of types while maintaining type safety. Generics are
        particularly useful for building components that can operate on multiple
        data types without losing the benefits of TypeScript’s type system.
      </p>
      <h3>Key Features of Generics:</h3>
      <ol>
        <li>
          <span className="bold">Generic Functions:</span> Generics allow
          functions to accept parameters of any type, which can be specified
          when the function is called. This ensures type safety while
          maintaining flexibility.
          <Code
            code={`function identity<T>(arg: T): T {
    return arg;
}`}
          />
          In this example, <code>T</code> is a placeholder for the type that
          will be determined when the function is called.
        </li>
        <li>
          <span className="bold">Generic Classes:</span> Classes can also be
          generic, allowing you to create instances with different types.
          <Code
            code={`class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

let stringBox = new Box<string>("Hello");
let numberBox = new Box<number>(123);`}
          />
          Here, <code>Box&lt;T&gt;</code> is a class that can store any type of
          value, specified when creating an instance.
        </li>
        <li>
          <span className="bold">Generic Interfaces:</span> Interfaces can be
          defined with generics to ensure that they work with various types.
          <Code
            code={`interface KeyValuePair<K, V> {
    key: K;
    value: V;
}

let pair: KeyValuePair<string, number> = { key: "age", value: 30 };`}
          />
          The <code>KeyValuePair</code> interface takes two generic types,{" "}
          <code>K</code> and <code>V</code>, for the key and value.
        </li>
        <li>
          <span className="bold">Constraints:</span> You can constrain generics
          to only allow types that satisfy a certain condition or have specific
          properties.
          <Code
            code={`function getLength<T extends { length: number }>(arg: T): number {
    return arg.length;
}

let length1 = getLength("Hello");        // OK, string has length property
let length2 = getLength([1, 2, 3]);      // OK, array has length property`}
          />
          In this example, <code>T</code> is constrained to types that have a{" "}
          <code>length</code> property, ensuring that the <code>getLength</code>{" "}
          function only works with valid types.
        </li>
        <li>
          <span className="bold">Default Types:</span> Generics can have default
          types, which are used if no type is provided.
          <Code
            code={`function wrap<T = string>(value: T): T {
    return value;
}

let wrapped1 = wrap("Default");  // T defaults to string
let wrapped2 = wrap<number>(123); // T is explicitly number`}
          />
          If no type argument is provided, <code>T</code> defaults to{" "}
          <code>string</code>.
        </li>
      </ol>
      <h3>Benefits of Using Generics:</h3>
      <ol>
        <li>
          <span className="bold">Type Safety:</span> Generics ensure that
          operations on different types are type-safe, reducing runtime errors
          and improving code reliability.
        </li>
        <li>
          <span className="bold">Reusability:</span> You can write functions,
          classes, and interfaces that work with any data type, promoting code
          reuse and reducing duplication.
        </li>
        <li>
          <span className="bold">Flexibility:</span> Generics allow you to
          create components that are adaptable to various types, making your
          codebase more modular and maintainable.
        </li>
      </ol>
      <p>
        Generics are a powerful feature in TypeScript that enhance the
        flexibility and reusability of your code while maintaining type safety,
        making them essential for creating robust and adaptable applications.
      </p>
    </section>
  );
}
