// eslint-disable-next-line react/prop-types
export default function CartButton({ cartHandler, text }) {
  return <button onClick={cartHandler}>{text}</button>;
}
