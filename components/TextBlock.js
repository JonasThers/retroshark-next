export default function TextBlock(props) {
  return (
    <div className="text-block">
      <p className="text-block__text">{props.content}</p>
      <img className="text-block__img" src={props.img} />
    </div>
  );
}
