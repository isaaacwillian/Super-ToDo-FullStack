import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 50%;
  span {
    position: absolute;
    visibility: hidden;
    background: #fc5454;
    color: white;
    font-size: 12px;
    bottom: 140%;
    transform: translateX(-50%);
    left: 50%;
    padding: 2px 10px 2px 10px;
    border-radius: 5px;
    white-space: nowrap;
    opacity: 0;
    transition: all 0.4s;

    &::before {
      content: "";
      border-style: solid;
      border-color: #fc5454 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;
