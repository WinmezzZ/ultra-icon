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

const PopcornIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M33.696 40.868 39 17H7l5.304 23.868c.334 1.501.5 2.252 1.049 2.692.548.44 1.317.44 2.856.44H29.79c1.539 0 2.308 0 2.856-.44.549-.44.715-1.19 1.05-2.692Z"
        />
        <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m27 44 1-27m-9 27-1-27" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M31 44H15m16-27H15m-4 0s-1-3 .5-4.5 4.5-1 4.5-1 0-3 2-4 5 .5 5 .5 2-3.357 5-2.5c3 .857 3 4.5 3 4.5s2.5 0 4 2 0 5 0 5"
        />
      </svg>
    </span>
  );
};

PopcornIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default PopcornIcon;
