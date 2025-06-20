interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = (props: Props) => <button>按钮</button>;

export default Button;
