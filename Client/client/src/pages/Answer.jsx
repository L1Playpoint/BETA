import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Answer() {
  return (
    <div className='answer__container'>
        <h1>Answer</h1>
        <form>
            <label className='question'>1. Just a random question here</label>
            <div className='answer-item'>
                <input type="checkbox" name="sdv" id=""  value="ksjdbv" checked/><label> sdvhbshdvb</label>
                <input type="checkbox" name="sdv" id=""  value="ksjdbv"/><label> uajhsbvd</label>
                <input type="checkbox" name="sdv" id=""  value="ksjdbv"/><label> draw</label>
            </div>
            <hr/>
            <label className='question'>2. Randomly picked question?</label>
            <div className='answer-item'>
                <input type="checkbox" name="sdv" id=""  value="ksjdbv"/><label> uajhsbvd</label>
                <input type="checkbox" name="sdv" id=""  value="ksjdbv" checked/><label> sdvhbshdvb</label>
                <input type="checkbox" name="sdv" id=""  value="ksjdbv" /><label> draw</label>
            </div>
            <hr/>
            <label className='question'>3. I guess question must be fun, ain't it?</label>
            <div className='answer-item'>
                <input type="checkbox" name="sdv" id=""  value="ksjdbv"/><label> sdvhbshdvb</label>
                <input type="checkbox" name="sdv" id=""  value="ksjdbv"/><label> uajhsbvd</label>
                <input type="checkbox" name="sdv" id=""  value="ksjdbv" checked/><label> sdvhbshdvb</label>
                <input type="checkbox" name="sdv" id=""  value="ksjdbv" /><label> draw</label>
            </div>
            <hr/>
            <label className='question'>4. Well I like sudoku, do you?</label>
            <div className='answer-item'>
                <input type="checkbox" name="sdv" id=""  value="ksjdbv"/><label> sdvhbshdvb</label>
                <input type="checkbox" name="sdv" id=""  value="ksjdbv" checked/><label> uajhsbvd</label>
                <input type="checkbox" name="sdv" id=""  value="ksjdbv"/><label> draw</label>
            </div>
        </form>
        <Button><Link to="/pool/duo">Go Back</Link></Button>
        <Button><Link to="/pool/duo/compete/true">Compete</Link></Button>
    </div>
  )
}
