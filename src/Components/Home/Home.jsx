import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const GITTEXT = styled.div`
  margin: 2rem auto;
  width: 80%;
  .para-heading {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: #39496a;
  }

  .headerDiv {
    display: flex;
    width: 100%;
    border: 1px solid red;
    justify-content: space-between;

    .right-headerDiv {
      text-align: right;
    }
  }
`;
export default function Home() {

    const [list, setList] = useState({});
  
    useEffect(() => {
      axios
        .get("http://localhost:3033/")
        .then((res) => {
          setList(res.data.forms);
          console.log(res.data)
        })
        .catch((err) => console.log(err));
    });
  return (
    <div>
      <GITTEXT>
        <div>
          <p className="para-heading">
            Remove some wrappers from a previous abstraction
          </p>
        </div>
        <div className="headerDiv">
          <div className="left-headerDiv"></div>
          <div className="right-headerDiv">
            <p>Commit</p>
            <p>Parent</p>
          </div>
        </div>
      </GITTEXT>
    </div>
  );
}
