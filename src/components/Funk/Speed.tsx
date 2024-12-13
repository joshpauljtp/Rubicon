interface Props {
  speed: number;
}

function Speed({ speed }: Props) {
  return (
    <h1 className="speed">
      KMPH <span>{speed}</span>
    </h1>
  );
}

export default Speed;
