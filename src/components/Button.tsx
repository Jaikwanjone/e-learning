interface Prop {
  lable: string;
  className?: string;
  onClick?: (evt?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const Button = ({ lable, className, onClick }: Prop) => {
  return (
    <button
      className={`text-sm tablet:text-lg laptop:text-xl py-2  laptop:px-5 px-3 rounded-lg border-none${className}`}
    >
      {/* <Link to={lable.toLocaleLowerCase()}>{lable}</Link> */}
      {lable}
    </button>
  );
};

export default Button;
