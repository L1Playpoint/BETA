import { Button } from "antd";
import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Compete() {
  const { compete } = useParams();

  return (
    <div className="compete__container">
      <h1>Compete</h1>
      <div>
        {compete == "true" && (
          <form>
            <h3>Player #235433's Answer</h3>
            <label className="question">1. Just a random question here</label>
            <div className="answer-item">
              <input type="checkbox" name="sdv" id="" value="ksjdbv" checked />
              <label> sdvhbshdvb</label>
              <input type="checkbox" name="sdv" id="" value="ksjdbv" />
              <label> uajhsbvd</label>
              <input type="checkbox" name="sdv" id="" value="ksjdbv" />
              <label> draw</label>
            </div>
            <hr />
            <label className="question">2. Randomly picked question?</label>
            <div className="answer-item">
              <input type="checkbox" name="sdv" id="" value="ksjdbv" />
              <label> uajhsbvd</label>
              <input type="checkbox" name="sdv" id="" value="ksjdbv" checked />
              <label> sdvhbshdvb</label>
              <input type="checkbox" name="sdv" id="" value="ksjdbv" />
              <label> draw</label>
            </div>
            <hr />
            <label className="question">
              3. I guess question must be fun, ain't it?
            </label>
            <div className="answer-item">
              <input type="checkbox" name="sdv" id="" value="ksjdbv" />
              <label> sdvhbshdvb</label>
              <input type="checkbox" name="sdv" id="" value="ksjdbv" />
              <label> uajhsbvd</label>
              <input type="checkbox" name="sdv" id="" value="ksjdbv" checked />
              <label> sdvhbshdvb</label>
              <input type="checkbox" name="sdv" id="" value="ksjdbv" />
              <label> draw</label>
            </div>
            <hr />
            <label className="question">4. Well I like sudoku, do you?</label>
            <div className="answer-item">
              <input type="checkbox" name="sdv" id="" value="ksjdbv" />
              <label> sdvhbshdvb</label>
              <input type="checkbox" name="sdv" id="" value="ksjdbv" checked />
              <label> uajhsbvd</label>
              <input type="checkbox" name="sdv" id="" value="ksjdbv" />
              <label> draw</label>
            </div>
          </form>
        )}
        <form>
          <h3>Your Answer</h3>
          <label className="question">1. Just a random question here</label>
          <div className="answer-item">
            <input type="checkbox" name="sdv" id="" value="ksjdbv" />
            <label> sdvhbshdvb</label>
            <input type="checkbox" name="sdv" id="" value="ksjdbv" />
            <label> uajhsbvd</label>
            <input type="checkbox" name="sdv" id="" value="ksjdbv" />
            <label> draw</label>
          </div>
          <hr />
          <label className="question">2. Randomly picked question?</label>
          <div className="answer-item">
            <input type="checkbox" name="sdv" id="" value="ksjdbv" />
            <label> uajhsbvd</label>
            <input type="checkbox" name="sdv" id="" value="ksjdbv" />
            <label> sdvhbshdvb</label>
            <input type="checkbox" name="sdv" id="" value="ksjdbv" />
            <label> draw</label>
          </div>
          <hr />
          <label className="question">
            3. I guess question must be fun, ain't it?
          </label>
          <div className="answer-item">
            <input type="checkbox" name="sdv" id="" value="ksjdbv" />
            <label> sdvhbshdvb</label>
            <input type="checkbox" name="sdv" id="" value="ksjdbv" />
            <label> uajhsbvd</label>
            <input type="checkbox" name="sdv" id="" value="ksjdbv" />
            <label> sdvhbshdvb</label>
            <input type="checkbox" name="sdv" id="" value="ksjdbv" />
            <label> draw</label>
          </div>
          <hr />
          <label className="question">4. Well I like sudoku, do you?</label>
          <div className="answer-item">
            <input type="checkbox" name="sdv" id="" value="ksjdbv" />
            <label> sdvhbshdvb</label>
            <input type="checkbox" name="sdv" id="" value="ksjdbv" />
            <label> uajhsbvd</label>
            <input type="checkbox" name="sdv" id="" value="ksjdbv" />
            <label> draw</label>
          </div>
        </form>
      </div>
      <Button style={{ marginTop: 50 }} type="primary">
        <Link to="/">Submit</Link>
      </Button>
    </div>
  );
}
