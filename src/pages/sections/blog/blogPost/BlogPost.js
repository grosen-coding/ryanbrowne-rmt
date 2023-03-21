import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Button from "../../../../components/button";

const Post = styled.article`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 5px;

  transition: all 0.3s ease-in-out;
  position: relative;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

const PostThumbnail = styled.figure`
  position: relative;
  margin: 0;
`;

const Category = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: var(--green-med);
  color: #fff;
  padding: 2px 5px;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 3px;
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

const EntryHeader = styled.header``;

const EntryTitle = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  font-weight: 400;
`;

const EntryMeta = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const PostedOn = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: #777;
`;

const EntryContent = styled.div``;

const EntryFooter = styled.footer`
  margin-top: auto;
`;

const buttonStyles = css`
  border: none;
  outline: none;
  color: #ffffff;
  background-color: var(--green-med);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.2s ease-in-out;
  padding: 0;
`;

const Underline = styled.div`
  background-color: var(--green-med);
  height: 3px;
  right: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 150px;
  opacity: 0;
  transition: all 0.2s ease-in-out;
`;

const ButtonArrow = styled.div`
  ${buttonStyles}
  z-index: 2;
`;
const ButtonFull = styled.div`
  ${buttonStyles}
  opacity: 0;
  transform: scaleX(0.7) translate(-50%, -50%);
  transform-origin: left;
  z-index: 2;
  transition: all 0.3s ease-in-out;
  width: auto;
  height: auto;
  border: none;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  bottom: -25px;
  z-index: 5;

  &:hover ${ButtonArrow}, &:focus ${ButtonArrow} {
    opacity: 0;
    transform: translate(20px, -50%);
  }

  &:hover ${ButtonFull}, &:focus ${ButtonFull} {
    opacity: 0.9;
    transform: scaleX(1) translate(-50%, -50%);
    transform-origin: left;
    z-index: 5;
  }
`;

const Arrow = styled.span`
  &:hover,
  &:focus {
    opacity: 0;
    transform: translate(20px);
  }
`;

const BlogPost = ({ title, date, excerpt, image, categories }) => (
  <Post>
    <PostThumbnail>
      <Category>{categories.join(", ")}</Category>
      <PostImage src={image} alt={title} />
    </PostThumbnail>
    <ContentWrap>
      <EntryHeader>
        <EntryTitle>{title}</EntryTitle>
        <EntryMeta>
          <PostedOn>{date}</PostedOn>
        </EntryMeta>
      </EntryHeader>
      <EntryContent>
        <p>{excerpt}</p>
      </EntryContent>
      <EntryFooter>
        <ButtonWrapper>
          <ButtonArrow>
            <Arrow>&#x2192;</Arrow>
          </ButtonArrow>
          <ButtonFull>
            <Button
              border="none"
              textColor="#fff"
              text="Read More"
              bgColor="var(--green-med)"
              margin="0"
              padding="1rem 2rem"
              width="200px"
            />
          </ButtonFull>
        </ButtonWrapper>
      </EntryFooter>
    </ContentWrap>
    <Underline />
  </Post>
);

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BlogPost;
