import React, { useState } from 'react';

function timeCalculator(props) {
  const [readingSpeed, setReadingSpeed] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [wordsPerPage, setWordsPerPage] = useState(0);
  function handleChange(e) {
    if (e.target.name === 'readingSpeed') {
      setReadingSpeed(e.target.value);
    } else if (e.target.name === 'pageCount') {
      setPageCount(e.target.value);
    } else {
      setWordsPerPage(e.target.value);
    }
  }
  return (
    <div className="col-12 border p-2 m-2">
      <div className="col-6">
        <div className="form-group">
          <label htmlFor="readingSpeed" className='mr-2'>Reading Speed (WPM):</label>
          <input onChange={handleChange} type="number" value={readingSpeed} name="readingSpeed" />
        </div>
        <div className="form-group">
          <label htmlFor="pageCount" className='mr-2'>Number of Pages:</label>
          <input onChange={handleChange} type="number" value={pageCount} name="pageCount" />
        </div>
        <div className="form-group">
          <label htmlFor="bookSize" className="mr-2">Size of Pages: </label>
          <select onChange={handleChange} value={wordsPerPage} name="bookSize">
            <option value={250}>Small</option>
            <option value={275}>Medium</option>
            <option value={300}>Large</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default timeCalculator;
