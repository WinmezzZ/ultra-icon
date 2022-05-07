/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import iconStyle from '../styles';
import merge from '../utils/merge';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const defaultProps = {
  size: 24,
};

const PaintIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m16.99 23.61 9.899 9.9m-9.899-9.9-8.486 8.486a7 7 0 0 0 0 9.9v0a7 7 0 0 0 9.9 0l8.485-8.486m-9.899 0-4.243 4.243"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m26.889 33.51 14.907-6.432c2.687-1.16 3.809-4.379 2.086-6.745-4.164-5.717-9.778-10.73-13.919-13.797-2.29-1.696-5.33-.64-6.459 1.975l-6.515 15.1 9.9 9.9Z"
        />
      </svg>
    </span>
  );
};

PaintIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default PaintIcon;
