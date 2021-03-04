interface Props {
  variant: string,
  name: string,
  onClick: () => void;
}

function Button(props: Props) {
  return (
    <a 
      className={props.variant} 
      onClick={props.onClick}
    >
      {props.name}
    </a>
  )
}

export default Button