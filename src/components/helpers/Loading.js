import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import styled, { keyframes } from 'styled-components';

const UnStyledLoading = ({ className, visible, message }) => {
  return ReactDOM.createPortal(
    <div className={`${className} ${visible ? 'visible' : 'hidden'}`}>
      <div>
        <p>{message}</p>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>,
    document.getElementById('loading')
  );
};

const bounce = keyframes`
  from {
    width: 0.1rem;
    height: 0.1rem;
    opacity: 1;
    transform: translate3d(0);
  }
  to {
    width: 1.5rem;
    height: 1.5rem;
    opacity: 0.1;
    transform: translate3d(0, -1rem, 0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1;
  }
`;

const StyledLoading = styled(UnStyledLoading)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  color: var(--color-white);
  opacity: 0;

  &.visible {
    display: block;
    animation: ${fadeIn} 500ms forwards;
  }

  &.hidden {
    display: none;
  }

  > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;

      > span {
        background: var(--color-white);
        border-radius: 50%;
        margin: 5rem 0.5rem;
        animation: ${bounce} 0.6s infinite alternate;

        :nth-child(2) {
          animation-delay: 0.2s;
        }

        :nth-child(3) {
          animation-delay: 0.4s;
        }
      }
    }

    > p {
      font-size: 40px;
      font-weight: 600;
      margin-top: 1rem;
    }
  }
`;

const Loading = (props) => <StyledLoading {...props} />;

Loading.propTypes = {
  message: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Loading;
