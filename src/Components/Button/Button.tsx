interface Props {
  id: string,
  variant: string,
  name: string,
  onClick: (productId: string) => void;
}

function Button(props: Props) {
  return (
    <button 
      className={props.variant}
      onClick={() => props.onClick(props.id)}
    >
      {props.name}
    </button>
  )
}

export default Button