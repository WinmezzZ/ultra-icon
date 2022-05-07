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

const TwoEllipsesIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M40.579 7.349c3.765 3.764-.622 14.255-9.799 23.431-9.176 9.177-19.667 13.564-23.431 9.8-3.765-3.766.622-14.256 9.798-23.433C26.324 7.971 36.814 3.584 40.58 7.35Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M7.485 7.349c-3.764 3.764.623 14.255 9.799 23.431 9.176 9.177 19.667 13.564 23.432 9.8 3.764-3.766-.623-14.256-9.799-23.433C21.741 7.971 11.25 3.584 7.485 7.35Z"
        />
      </svg>
    </span>
  );
};

TwoEllipsesIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default TwoEllipsesIcon;
