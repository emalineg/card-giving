function GiftedCard (props) {
  return (
    <div>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.message}</p>
    </div>
  );
}
export default GiftedCard;