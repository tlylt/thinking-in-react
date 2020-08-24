import React, { useState, useEffect } from "react";

function StepNumberBar({ total, current }) {
  console.log(current);
  return (
    <div className="stepNumberBar">
      {Array(total)
        .fill(null)
        .map((value, index) => (
          <span
            id={index}
            key={index}
            className={current === index ? "active" : "inactive"}
          >
            {index}
          </span>
        ))}
    </div>
  );
}

function KeyList({ content }) {
  var itemsArr = content.split(".");
  return (
    <ul>
      {itemsArr.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function Explanation({ heading, content }) {
  return (
    <div className="explanation">
      <h2>{heading}</h2>
      <KeyList content={content} />
    </div>
  );
}
function NavigationRow({ updatePage }) {
  return (
    <div className="buttons">
      <MoveStepButton updatePage={updatePage} direction="prev" />
      <MoveStepButton updatePage={updatePage} direction="next" />
    </div>
  );
}

function MoveStepButton({ updatePage, direction }) {
  return direction === "prev" ? (
    <button onClick={() => updatePage((curr) => (curr === 0 ? 5 : curr - 1))}>
      PREV
    </button>
  ) : (
    <button onClick={() => updatePage((curr) => (curr === 5 ? 0 : curr + 1))}>
      NEXT
    </button>
  );
}

function ReferenceTable({ detail }) {
  const [currPage, updatePage] = useState(0);
  return (
    <>
      <StepNumberBar total={detail.length} current={currPage} />
      <Explanation
        heading={detail[currPage].heading}
        content={detail[currPage].content}
      />
      <NavigationRow updatePage={updatePage} />
    </>
  );
}

function App(props) {
  return <ReferenceTable detail={props.detail} />;
}

export default App;
