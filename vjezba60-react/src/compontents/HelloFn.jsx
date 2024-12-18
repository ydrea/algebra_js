const HelloFn = (props) => {
  return (
    <div>
      <p>Hello {props.ime}</p>
      <p>{props.children}</p>
    </div>
  );
};

export default HelloFn;

/* 
// destruktirirani import propsa

const HelloFn = ({ ime }) => {
  return <div>Hello {ime}</div>;
};

export default HelloFn; */
