import ClickCounter from './component/ClickCounter';
import Counter from './component/Counter';
import HoverCounter from './component/HoverCounter';

function App() {
  return (
    <div className="App">
      {/* <User islove={(islove) => (islove ? 'santo' : 'borsha')} />
      
       */}
      <Counter
        render={(counter, incrementcounter) => (
          <ClickCounter counter={counter} incrementcount={incrementcounter} />
        )}
      />
      <Counter
        render={(counter, incrementcounter) => (
          <HoverCounter counter={counter} incrementcount={incrementcounter} />
        )}
      />
    </div>
  );
}

export default App;
