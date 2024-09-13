import Code from "../code";
export default function Component7() {
  return (
    <section className="component">
      <h2>Enum Types in TypeScript</h2>
      <p>
        Enums, short for "enumerations," are a feature in TypeScript that allow
        you to define a set of named constants. Enums provide a way to create a
        collection of related values that can be used in a more readable and
        manageable way than plain numbers or strings. They are particularly
        useful for representing a fixed set of options or states.
      </p>
      <h3>Key Features of Enums:</h3>
      <ol>
        <li>
          <span className="bold">Basic Enums:</span> Enums can be numeric or
          string-based. By default, TypeScript enums are numeric, with values
          starting at <code>0</code> and incrementing by <code>1</code> unless
          specified otherwise.
          <Code
            code={`enum Direction {
    Up,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Up;
console.log(move);  // Output: 0`}
          />
          In this example, <code>Direction.Up</code> corresponds to the numeric
          value <code>0</code>, <code>Direction.Down</code> to <code>1</code>,
          and so on.
        </li>
        <li>
          <span className="bold">Custom Values:</span> You can specify custom
          values for enum members. For numeric enums, you can set a specific
          starting value:
          <Code
            code={`enum Status {
    Pending = 1,
    InProgress,
    Completed
}

let currentStatus: Status = Status.InProgress;
console.log(currentStatus);  // Output: 2`}
          />
          Here, <code>Status.Pending</code> starts at <code>1</code>, and
          subsequent values are incremented by <code>1</code>.
        </li>
        <li>
          <span className="bold">String Enums:</span> String enums are a way to
          define enums where each member is a string literal. This is useful
          when you want meaningful string values rather than numeric ones.
          <Code
            code={`enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

let favoriteColor: Color = Color.Green;
console.log(favoriteColor);  // Output: GREEN`}
          />
          In this example, each enum member is assigned a specific string value.
        </li>
        <li>
          <span className="bold">Reverse Mapping:</span> Numeric enums provide
          reverse mapping from the numeric value back to the name of the enum
          member.
          <Code
            code={`enum Status {
    Pending = 1,
    InProgress,
    Completed
}

console.log(Status[2]);  // Output: InProgress`}
          />
          This reverse mapping feature is available only for numeric enums.
        </li>
        <li>
          <span className="bold">Const Enums:</span> For performance
          optimization, you can use <code>const</code> enums. These are enums
          where the values are inlined during compilation, which can be useful
          for reducing code size.
          <Code
            code={`const enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

let move = Direction.Up;`}
          />
          With <code>const</code> enums, TypeScript will replace the{" "}
          <code>Direction.Up</code> reference with the actual numeric value{" "}
          <code>1</code> during compilation.
        </li>
      </ol>
      <h3>Benefits of Using Enums:</h3>
      <ol>
        <li>
          <span className="bold">Improved Readability:</span> Enums provide
          meaningful names for numeric or string values, making code easier to
          read and understand.
        </li>
        <li>
          <span className="bold">Type Safety:</span> Enums ensure that only
          valid values are used, reducing errors from invalid or unexpected
          values.
        </li>
        <li>
          <span className="bold">Organized Code:</span> Enums group related
          constants together, improving code organization and maintainability.
        </li>
      </ol>
      <p>
        Enums in TypeScript are a useful tool for defining sets of related
        constants in a way that is both readable and type-safe, making your code
        more robust and easier to manage.
      </p>
    </section>
  );
}
