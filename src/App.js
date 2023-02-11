import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <img src="https://uploads.codesandbox.io/uploads/user/322cdf43-d43b-45f3-95d4-c192fe3b2d93/h2DN-3-card-grid.png" />
      <CardList />
    </div>
  );
}

function CardList() {
  return (
    <div className="grid cols-3">
      <Card
        title="This is a card title"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        btnText="button link text"
      />
      <Card
        title="Duneuk Rutrunm Justo"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        btnText="button link text"
      />
      <Card
        title="Duneuk Rutrunm Justo"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        btnText="button link text"
      />
    </div>
  );
}

function Card(probs) {
  return (
    <div className="card">
      <h2>{probs.title}</h2>
      <p>{probs.desc}</p>
      <button className="btn">{probs.btnText}</button>
    </div>
  );
}
