// Next.js
import { GetStaticProps } from 'next'

// Components
import ArticleCard from '../components/ArticleCard'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import Section from '../components/Section'

import IHomePageArticles from '../interfaces/IHomePageArticles'

import { getHomePageArticles } from '../lib/devto'

interface IProps {
  homePageArticles: IHomePageArticles
}

const title = "Hello, I'm Vladimir 👋"
const subtitle = "A Full-Stack Engineer."

const IndexPage = ({
  homePageArticles: { latestBlog, latestPortfolio, featuredBlog, featuredPortfolio },
}: IProps): JSX.Element => {
  const projects = featuredPortfolio || [latestPortfolio]
  return (
    <Layout title="Home" description={`${title} - ${subtitle}`}>
      <PageTitle title={title} subtitle={subtitle} />

      <Section linebreak>
        <h2 className="text-3xl md:text-4xl mb-4 text-black dark:text-white">About</h2>
        <p className="my-2">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus placeat ratione possimus, maxime temporibus dolores eveniet ea sed voluptates numquam harum in velit culpa tempore corporis. Dolorum nisi iure neque?
				</p>
			</Section>

      <Section>
        <h2 className="text-3xl md:text-4xl mb-4 text-black dark:text-white">Latest article</h2>
        <ArticleCard
          title={latestBlog.title}
          description={latestBlog.description}
          date={latestBlog.publishedAt}
          tags={latestBlog.tags}
          canonical={latestBlog.canonical}
        />

        {featuredBlog && (
          <>
            <h2 className="text-3xl md:text-4xl mb-4 text-black dark:text-white">
              Featured article
            </h2>
            <ArticleCard
              title={featuredBlog.title}
              description={featuredBlog.description}
              date={featuredBlog.publishedAt}
              tags={featuredBlog.tags}
              canonical={featuredBlog.canonical}
            />
          </>
        )}

        <h2 className="text-3xl md:text-4xl mb-4 text-black dark:text-white">Featured projects</h2>
        {projects.map((project) => (
          <ArticleCard
            key={project.id}
            title={project.title}
            description={project.description}
            date={project.publishedAt}
            tags={project.tags}
            canonical={project.canonical}
            portfolio
            coverImage={project.coverImage}
          />
        ))}
      </Section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const homePageArticles = await getHomePageArticles()
  return { props: { homePageArticles } }
}

export default IndexPage
