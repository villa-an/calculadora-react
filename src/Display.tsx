type DisplayProps = {
  value: string;
};

const Display = ({ value }: DisplayProps) => {
  return (
    <div className="calc-display" role="status" aria-live="polite">
      <output className="calc-display__value">{value}</output>
    </div>
  );
};

export default Display;
