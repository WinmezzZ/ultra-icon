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
const PlayBasketballIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="null" stroke="#000" strokeMiterlimit={2} strokeWidth={4} d="M32 16a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="m23 40 8.11-2.06c.78-.19 1.02-1.19.42-1.72L23 29l4-8-10.41-3.74c-.5-.18-.9-.54-1.13-1.02L11 8"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="m23 29-6.97 8.79c-.21.25-.47.45-.77.57L5 42m22-21 9.9 2.79c.47.14.88.44 1.14.85L42 31"
      />
      <path fill="#000" d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
  );
};

PlayBasketballIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PlayBasketballIcon = withWrapper(PlayBasketballIconComponent);
export default PlayBasketballIcon;
