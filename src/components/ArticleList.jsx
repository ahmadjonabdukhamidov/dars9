function ArticleList({ articles }) {
  return (
    <ul className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
      {articles.map((article) => {
        const { id, title, image, author } = article;
        return (
          <li key={id} className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img src={image} alt="#" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>{author}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ArticleList;
