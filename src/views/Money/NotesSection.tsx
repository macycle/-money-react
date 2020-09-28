import styled from 'styled-components';

const NotesSection = styled.section`
  background: white;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display:flex;
    align-items: center;
    > span { margin-right: 2px; white-space: nowrap; }
    > input {
      display:block;
      width: 100%;
      height: 32px;
      background: none;
      border: none;
    }
  }
`;

export {NotesSection}