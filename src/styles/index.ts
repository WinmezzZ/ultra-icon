import { css } from '@emotion/react';
import { SVGComponentProps } from '../interface';

export const themeData = {
  outline: {
    fill: '#333',
    background: 'transparent',
  },
  filled: {
    fill: '#333',
    background: '#FFF',
  },
};

const iconStyles = (props: SVGComponentProps) => {
  const { filled } = props;
  return css`
    display: inline-flex;
    align-items: center;
  `;
};

export default iconStyles;
