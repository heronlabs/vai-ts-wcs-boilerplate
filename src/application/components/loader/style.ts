import styled from 'styled-components';

export const Loader = styled.div`
  animation: 0.5s ease-in-out fadein;

  @keyframes fadein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
