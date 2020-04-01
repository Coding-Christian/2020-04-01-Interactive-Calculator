import React, { useState } from 'react';

function timeCalculator(props) {
  const [readingSpeed, setReadingSpeed] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [wordsPerPage, setWordsPerPage] = useState(250);
  const [time, setTime] = useState(0);
  function handleChange(e) {
    if (e.target.name === 'readingSpeed') {
      setReadingSpeed(e.target.value);
    } else if (e.target.name === 'pageCount') {
      setPageCount(e.target.value);
    } else {
      setWordsPerPage(e.target.value);
    }
  }
  function calculate() {
    setTime(((pageCount * wordsPerPage) / (readingSpeed * 60)).toFixed(2));
  }
  return (<>
      <div className="col-12">
        <h3 className="text-center my-4">Calculate Appoximate Reading Time for a Book</h3>
        <p>
          Based on your reading speed in Words per Minute (WPM), the length of the book and the rough size of its pages,
          this app will give you an estimate in hours for how long it will take to complete the book.
          If you have already started your book, you can simply enter the number of pages remaining.
          If you do not know your reading speed, read the short Wikipedia excerpt below and use the provided timer to determine your reading speed.
        </p>
        <hr/>
      </div>
      <div className="col-12 col-md-6">
        <div className="form-group">
          <label htmlFor="readingSpeed" className='mr-2'>Reading Speed (WPM):</label>
          <input className='form-control' onChange={handleChange} type="number" value={readingSpeed} name="readingSpeed" />
        </div>
        <div className="form-group">
          <label htmlFor="pageCount" className='mr-2'>Number of Pages:</label>
          <input className='form-control' onChange={handleChange} type="number" value={pageCount} name="pageCount" />
        </div>
        <div className="form-group">
          <label htmlFor="bookSize" className="mr-2">Size of Pages: </label>
          <select className='form-control' onChange={handleChange} value={wordsPerPage} name="bookSize">
            <option value={250}>Small</option>
            <option value={275}>Medium</option>
            <option value={300}>Large</option>
          </select>
        </div>
        <button className='btn btn-primary' onClick={calculate}>Calculate</button>
      </div>
      <div className="col-12 col-md-6 text-center d-flex flex-column justify-content-center">
        <h1>Finish Book in about:</h1>
        <h3>{time} hours</h3>
      </div>
  </>);
}

export default timeCalculator;
