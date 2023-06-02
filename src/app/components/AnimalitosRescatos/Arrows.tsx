export function NextArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, onClick } = props;
  return (
      <div
        className={className}
        style={{ display: 'flex', borderRadius: '25px', position:'absolute', bottom:'0px' }}

        onClick={onClick}
      />
  );
}
  
export function PrevArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, onClick } = props;
  return (
      <div
        className={className}
        style={{ display: 'flex', borderRadius: '25px', position:'absolute', bottom:'0px' }}
        onClick={onClick}
      />
  );
}
