import styled from 'styled-components';

export const HomeContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${"https://www.tastetoronto.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOW5VQkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--0761b83c30f6aa03141263d6330801b515876547/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lJT0RBd0Jqb0dSVlE9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--2a7f989792e78b08bd8691aa5aea894e9d5c2f92/the-best-sushi-takeout-in-toronto.jpeg"});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HomeContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HomeItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HomeH1 = styled.h1`
  font-size: clamp(3.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #fa8072;
  letter-spacing: 3px;
`;

export const HomeP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const HomeBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #fa8072;
  color: #fff;
  transition: 0.2s ease-out;
  &:hover {
    background: #fff;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #fa8072;
  }
`;