const Button = ({ backgroundColor, color, name }) => {
  return (
    <>
      <button
        style={{
          backgroundColor,
          color,
        }}
      >
        {name}
      </button>
    </>
  );
};
export default Button;
