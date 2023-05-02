import PageLayout from '@/components/PageLayout'

export default function Two ({articles}) {

    return (
        <PageLayout title='Articles'>
            <div>
                {articles.length === 0 && <p> Loading... </p>}
                {articles.length > 0 && articles.map((article, index) => (
                <div key={index}>
                    <img
                    alt={'Image for the article ${article.title}'}
                    src={article.urlToImage}
                    />
                    <h2>{article.title}</h2>
                    <p>
                    {article.description}
                    </p>
                </div>
                ))}
            </div>
        </PageLayout>
    ) 
}

export async function getServerSideProps() {
    const response = await fetch('https://newsapi.org/v2/everything?q=apple&from=2023-04-24&to=2023-04-24&sortBy=popularity&apiKey=d75511a90fb744f39baf9eced5396aca')
    const { articles } = await response.json()
    return {
      props: {
        articles
    }
   }
  }