import Bracket from './component/composition/Bracket';
import Emoji from './component/composition/Emoji';
import Text from './component/composition/Text';

function App() {
  return (
    <div className="App">
      <Emoji>
        {({ addEmoji }) => (
          <Bracket>
            {({ addBracket }) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
          </Bracket>
        )}
      </Emoji>
    </div>
  );
}

export default App;
