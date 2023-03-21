import React from "react";
import styled from "styled-components";
import BlogPost from "./blogPost/BlogPost";
import PropTypes from "prop-types";

const BlogSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0 6rem;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;

const SectionDescription = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  width: 60%;
`;

const Blog = () => {
  const posts = [
    {
      title: "The standard massage offered in most clinics.",
      date: "July 22, 2021",
      excerpt:
        "The fashioning of hair can be considered an aspect of personal grooming, fashion, and cosmetics.",
      image: "/images/landscape/blog-1.jpeg",
      categories: ["Massage"],
    },
    {
      title: "Shiatsu may help increase energy.",
      date: "APril 1, 2021",
      excerpt:
        "The fashioning of hair can be considered an aspect of personal grooming, fashion, and cosmetics.",
      image: "/images/landscape/blog-2.jpeg",
      categories: ["Massage"],
    },
    {
      title: "With roots in traditional Chinese medicine.",
      date: "October 11, 2021",
      excerpt:
        "The fashioning of hair can be considered an aspect of personal grooming, fashion, and cosmetics.",
      image: "/images/landscape/blog-3.jpeg",
      categories: ["Massage"],
    },
  ];

  return (
    <BlogSection>
      <SectionTitle>Blog</SectionTitle>
      <SectionDescription>
        Welcome to our blog! Here you'll find our latest news, updates, and
        interesting articles.
      </SectionDescription>
      <Grid>
        {posts.map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            date={post.date}
            excerpt={post.excerpt}
            image={post.image}
            categories={post.categories}
          />
        ))}
      </Grid>
    </BlogSection>
  );
};

Blog.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default Blog;
