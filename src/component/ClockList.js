import Clock from './Clock';

function ClokList({ quantities = [] }) {
  return (
    <div>
      {quantities.map(() => (
        <Clock key={Math.random()} />
      ))}
    </div>
  );
}

export default ClokList;
