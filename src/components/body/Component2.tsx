export default function Component2() {
  return (
    <section className="component">
      <h2>Compatibility with JavaScript</h2>
      <p>
        One of TypeScript’s strongest features is its seamless compatibility
        with JavaScript. Since TypeScript is a superset of JavaScript, any valid
        JavaScript code is also valid TypeScript code. This makes it easy to
        start using TypeScript incrementally in existing JavaScript projects
        without needing to rewrite everything.
      </p>
      <p>Key points of compatibility:</p>
      <ol>
        <li>
          <span className="bold">Gradual Adoption:</span> You can begin by
          renaming your <code>.js</code> files to <code>.ts</code> and
          TypeScript will treat them as valid code. Over time, you can start
          adding types and taking advantage of TypeScript's features without
          breaking your existing JavaScript functionality.
        </li>
        <li>
          <span className="bold">Interop with JavaScript Libraries:</span>{" "}
          TypeScript allows you to use JavaScript libraries and frameworks like
          React, Angular, or Node.js without issues. It supports type
          declaration files (<code>*.d.ts</code>), which provide type
          information for JavaScript libraries, allowing for better integration
          and autocompletion in your IDE.
        </li>
        <li>
          <span className="bold">Incremental Migration:</span> You can migrate a
          project from JavaScript to TypeScript file by file. TypeScript won’t
          force you to type everything right away, allowing a more flexible
          transition while keeping your project running.
        </li>
        <li>
          <span className="bold">Compiled to JavaScript:</span> TypeScript
          compiles down to plain JavaScript, making it compatible with all
          JavaScript environments (browsers, Node.js, etc.). You can target
          specific versions of JavaScript (ES5, ES6, etc.) during the
          compilation process, ensuring your code works in different
          environments.
        </li>
      </ol>
      <p>
        This compatibility makes TypeScript a practical choice for teams already
        using JavaScript, providing the benefits of type safety and improved
        tooling without losing the flexibility of JavaScript.
      </p>
    </section>
  );
}
