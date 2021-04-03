import "./App.css";

function App() {
  return (
    <>
      <div id="myDIV" className="header">
        <h2 style={{ margin: "5px" }}>My To Do List</h2>
        <input type="text" id="myInput" placeholder="Title..." />
        <span onClick={() => {}} className="addBtn">
          Add
        </span>
      </div>

      <ul id="myUL">
        <li>Hit the gym</li>
        <li className="checked">
          Pay bills <span className="close">×</span>
        </li>
        <li>Meet George</li>
        <li>Buy eggs</li>
        <li>Read a book</li>
        <li>Organize office</li>
      </ul>
    </>
  );
}

export default App;
