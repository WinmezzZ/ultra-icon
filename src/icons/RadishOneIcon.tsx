/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const RadishOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M39 15c2.183.555 4 1.5 4 4s-3 3-5 3M26 10c0-3 1.749-5 4-5 2 0 3.048.62 4 3m-3 4s.951-2.132 2.123-2.91c1.87-1.243 4.377-1.372 5.748 0a4.057 4.057 0 0 1 0 5.748C37.28 16.43 35.997 17 35.997 17"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M10 14c-5.084 5.085-6.417 12.914-3.41 19.103C6.59 33.103 5 41 6 42s8.862-.592 8.862-.592A15.958 15.958 0 0 0 21.802 43c4.334 0 8.97-1.853 12.199-5 3.184-3.184 4.607-7.298 4.607-11.764 0-4.507-1.607-8.236-4.953-11.711-3.346-3.476-7.254-5.212-11.766-5.212-4.507 0-8.704 1.503-11.888 4.687Z"
      />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 28s5-1 7 3m6 11s1-4-1-6" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M21.803 43a15.95 15.95 0 0 1-6.94-1.592M6.59 33.103C3.582 26.913 4.915 19.085 10 14"
      />
    </svg>
  );
};

RadishOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RadishOneIcon = withWrapper(RadishOneIconComponent);
export default RadishOneIcon;
