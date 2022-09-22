import * as React from 'react';
import { ReactElement } from 'react';
import { ErrorDiv } from 'src/styles/styles';


export default function Error(): ReactElement {
  return (
    <ErrorDiv>Произошла ошибка!</ErrorDiv>
  );
};
