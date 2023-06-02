export function NextArrow(props: { className: any;  onClick: any }) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} flex rounded-3xl absolute bottom-0`}
      onClick={onClick}
    />
  );
}

export function PrevArrow(props: { className: any; onClick: any }) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} flex rounded-3xl absolute bottom-0`}
      onClick={onClick}
    />
  );
}
