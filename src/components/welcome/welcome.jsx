import './welcome.css';
export default function Welcome() {
  return (
    <div className="welcome">
      <h1 className="title">Welcome!</h1>
      <div className="content">
        <img
          src="https://via.placeholder.com/400x300?text=Restaurant+Image"
          alt="placeholder"
        />{' '}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum
        asperiores excepturi dolores reiciendis ex temporibus voluptatem
        voluptas? Distinctio eos dolores illo. Voluptates, cum at? Quae repellat
        aut voluptatum iste.
      </div>
    </div>
  );
}
