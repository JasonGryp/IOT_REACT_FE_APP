import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(25, 118, 210);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h3`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 20pt;
  color: white;
`;
export const Form = styled.form`
  background-color: rgb(25, 118, 210);
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  input {
    min-width: 250px;
    line-height: 24pt;
    font-size: 16pt;
  }
  button {
    min-width: 260px;
    line-height: 24pt;
    font-size: 16pt;
    background-color: rgb(25, 118, 210);
    color: white;
    border: none;
    padding: 5px 0px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const Span = styled.span`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 15pt;
  color: white;
  margin-top: 10px;
`;
export const Anchor = styled.a`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 15pt;
  color: white;
  margin-top: 10px;
  text-decoration: underline;
`;
