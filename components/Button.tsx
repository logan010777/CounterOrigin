interface props {
  color: string;
  text: string;
  onClick?: () => void;
}
const Button = ({ color, text, onClick }: props) => {
  return (
    <>
      <button className={color} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
