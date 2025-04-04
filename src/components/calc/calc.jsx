const Calc = ({ setAns, setQuery, query, solve, setPlaceholder }) => {
  return (
    <>
      <div
        onClick={(e) => {
          setAns('');
          setQuery('');
          setPlaceholder('0');
        }}
        className='calc-block dark-btn'
      >
        AC
      </div>
      <div
        onClick={(e) => {
          if (query !== '0') setQuery(query.slice(0, query.length - 1));
        }}
        className='calc-block dark-btn'
      >
        Del
      </div>
      <div
        onClick={(e) => setQuery(query + '(')}
        className='calc-block dark-btn'
      >
        (
      </div>
      <div
        onClick={(e) => setQuery(query + ')')}
        className='calc-block dark-btn'
      >
        )
      </div>
      <div onClick={(e) => setQuery(query + 7)} className='calc-block'>
        7
      </div>
      <div onClick={(e) => setQuery(query + 8)} className='calc-block'>
        8
      </div>

      <div onClick={(e) => setQuery(query + 9)} className='calc-block'>
        9
      </div>
      <div
        onClick={(e) => setQuery(query + '/')}
        className='calc-block dark-btn'
      >
        &#247;
      </div>

      <div onClick={(e) => setQuery(query + 4)} className='calc-block'>
        4
      </div>
      <div onClick={(e) => setQuery(query + 5)} className='calc-block'>
        5
      </div>
      <div onClick={(e) => setQuery(query + 6)} className='calc-block'>
        6
      </div>
      <div
        onClick={(e) => setQuery(query + '*')}
        className='calc-block dark-btn'
      >
        &#215;
      </div>
      <div onClick={(e) => setQuery(query + 3)} className='calc-block'>
        3
      </div>
      <div onClick={(e) => setQuery(query + 2)} className='calc-block'>
        2
      </div>
      <div onClick={(e) => setQuery(query + 1)} className='calc-block'>
        1
      </div>
      <div
        onClick={(e) => setQuery(query + '-')}
        className='calc-block dark-btn'
      >
        &#8722;
      </div>

      <div onClick={(e) => setQuery(query + '0')} className='calc-block'>
        0
      </div>
      <div onClick={(e) => setQuery(query + '.')} className='calc-block'>
        .
      </div>
      <div onClick={solve} className='calc-block'>
        Ans
      </div>
      <div
        onClick={(e) => setQuery(query + '+')}
        className='calc-block dark-btn'
      >
        &#43;
      </div>
    </>
  );
};

export default Calc;
