import ArticleItem from './ArticleItem/ArticleItem';

import styles from "./Article.module.css";

const ArticleList = ({ articles }) => {
  return (
    <div className={styles.grid}>
      {articles.map((article) => (
          <ArticleItem key={ article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
