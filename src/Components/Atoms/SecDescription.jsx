import React from "react";
import styled from "styled-components";

const SecDescription = ({ firstPara, secondPara }) => {
  return (
    <div>
      <Para>
        <p className="paragraph">{firstPara}</p>
        {secondPara && <p className="paragraph">{secondPara}</p>}
      </Para>
    </div>
  );
};

export default SecDescription;

const Para = styled.div`
  margin-top: 10px;
  //   width: 500px;
  .paragraph {
    font-size: 14px;
    line-height: 1.5;
    color: #383838;
    margin: 12px 0;
  }
`;
