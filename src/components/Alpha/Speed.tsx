interface Props {
  speed: number;
}

function Speed({ speed }: Props) {
  const speedString = speed.toString();
  const speedArray = speedString.split("");

  return (
    <div className="speed">
      <h1>
        {speedArray.map((num, index) => (
          <div key={index} data-number={num}>
            {num}
          </div>
        ))}
      </h1>
      <h4>KMPH</h4>
    </div>
  );
}

export default Speed;
