// Next.js
import { GetStaticProps } from 'next'

// Components
//import ArticleCard from '../components/ArticleCard'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
//import Section from '../components/Section'

//import IHomePageArticles from '../interfaces/IHomePageArticles'

//import { getHomePageArticles } from '../lib/devto'

/* interface IProps {
    homePageArticles: IHomePageArticles
} */

const title = "Hello, I'm Vladimir 👋"
const subtitle = "I'm a software developer."

const IndexPage =
  (/*{homePageArticles: { latestBlog, latestPortfolio, featuredBlog, featuredPortfolio }}: IProps*/): JSX.Element => {
    //const projects = featuredPortfolio || [latestPortfolio]
    return (
      <Layout title="Home" description={`${title} - ${subtitle}`}>
        <PageTitle title={title} subtitle={subtitle} />

        {/* <Section linebreak>
                <h2 className="text-3xl md:text-4xl mb-4 text-black dark:text-white">About</h2>
                <p className="my-2">
                    I spend most of my time as a frontend developer on Ostmodern&apos;s Skylark CMS
                    using React.js. Sometimes I use Node.js, Docker, Kubernetes and Golang and
                    I&apos;m currently experimenting with Serverless technologies on AWS and Azure.
                </p>
                <p className="my-2">
                    Outside of work I spend my time creating content for my blog where I discuss
                    other projects I&apos;m working on, interesting problems I&apos;ve had to solve
                    and create tutorials to educate and help others use various technologies for the
                    first time or in a more efficient manner.
								</p>
            </Section> */}
      </Layout>
    )
  }

export const getStaticProps: GetStaticProps = async () => {
    const homePageArticles = await getHomePageArticles()
		console.log(homePageArticles)
    return { props: { homePageArticles } }
} 

export default IndexPage
