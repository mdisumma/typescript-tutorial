import Code from "../code";

export default function Component1() {
  return (
    <section className="component">
      <h2>How to Get Started with TypeScript</h2>
      <ol>
        <li>
          <span className="bold">Install Node.js and npm:</span> ypeScript
          requires Node.js and npm (Node Package Manager). If you don’t have
          them installed, download the latest version of Node.js from
          nodejs.org. npm is bundled with it.
        </li>
        <li>
          <span className="bold">Install TypeScript:</span> Once Node.js is
          installed, open your terminal or command prompt and run:
          <Code code={"npm install -g typescript"} />
          This will globally install TypeScript on your system.
        </li>
        <li>
          <span className="bold">Initialize a Project:</span>To start a new
          TypeScript project, navigate to your project folder in the terminal
          and run:
          <Code code={"tsc --init"} />
          This will create a <code>tsconfig.json file</code>, which allows you
          to configure TypeScript’s behavior.
        </li>
        <li>
          <span className="bold">Write TypeScript Code:</span> Create a{" "}
          <code>.ts</code> file (e.g., <code>index.ts</code>) in your project
          directory. You can now start writing TypeScript code. For example:
          <Code
            code={`let message: string = "Hello, TypeScript!";
console.log(message);`}
          />
        </li>
        <li>
          <span className="bold">Compile TypeScript to JavaScript:</span>{" "}
          TypeScript code needs to be compiled into JavaScript to run in
          browsers or Node.js. Use the command:
          <Code code={`tsc index.ts`} />
          This will compile your <code>.ts</code> file into a <code>.js</code>{" "}
          file.
        </li>
        <li>
          <span className="bold">Run the JavaScript File:</span>After
          compilation, you can execute the resulting JavaScript file using
          Node.js:
          <Code code={`node index.js`} />
        </li>
        <li>
          <span className="bold">Use IDEs: </span>Install an IDE with TypeScript
          support like Visual Studio Code, which provides autocompletion, error
          checking, and debugging tools to improve productivity.
        </li>
      </ol>
      <p>
        Starting with these steps, you’ll have the basics to begin exploring
        TypeScript and integrating it into your development workflow.
      </p>
    </section>
  );
}
