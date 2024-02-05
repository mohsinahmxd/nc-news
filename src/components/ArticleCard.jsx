const ArticleCard = ({ article }) => {
  return (
    <div>
      <h2>{article.title}</h2>
      <img
        src={article.article_img_url}
        alt={`Article ${article.title} image`}
      />
      <p>Article author: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <p>Created at: {article.created_at}</p>
      <p>Votes: {article.votes}</p>
      <p>Comment count: {article.comment_count || 0}</p>
    </div>
  );
};

export default ArticleCard;
