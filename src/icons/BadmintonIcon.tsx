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
const BadmintonIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="M19.5 44c2.49 0 4.5-2.01 4.5-4.5V19h-4l-5 20.5c0 2.49 2.01 4.5 4.5 4.5Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="M20 19h-4L6.68 37.9c-1.11 2.61.48 5.74 3.3 6.07A4.494 4.494 0 0 0 15 39.5M28.5 44c-2.49 0-4.5-2.01-4.5-4.5V19h4l5 20.5c0 2.49-2.01 4.5-4.5 4.5Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="M28 19h4l9.32 18.9c1.11 2.61-.48 5.74-3.3 6.07A4.494 4.494 0 0 1 33 39.5"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="M16.06 13c-.04-.33-.06-.66-.06-1 0-4.42 3.58-8 8-8s8 3.58 8 8c0 .34-.02.67-.06 1H16.06Z"
      />
    </svg>
  );
};

BadmintonIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BadmintonIcon = withWrapper(BadmintonIconComponent);
export default BadmintonIcon;
