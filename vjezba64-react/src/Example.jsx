const Example = () => {
  const naslov = "React vježba";
  const sadrzaj = "Ovo je tekst";
  const loading = false;
  const postovi = [
    { id: 1, post: "Lorem 1" },
    { id: 2, post: "Lorem 2" },
    { id: 3, post: "Lorem 3" },
  ];

  const ispisPostova = (
    <div>
      <p>Broj postova: {postovi.length}</p>
      <ul>
        {postovi.map((postItem) => (
          <li key={postItem.id}>{postItem.post}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <h1>{naslov}</h1>
      <p>{sadrzaj}</p>
      {loading ? "Loading" : ispisPostova}
    </>
  );
};

export default Example;
