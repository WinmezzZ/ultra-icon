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

const ReplayFiveIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M11.272 36.728A17.943 17.943 0 0 0 24 42c9.941 0 18-8.059 18-18S33.941 6 24 6c-4.97 0-9.47 2.015-12.728 5.272C9.614 12.93 6 17 6 17"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M6 9v8h8m14 1h-7v5.71c.985-.647 1.469-.71 3-.71 3 0 4 1.989 4 5s-2 4-4 4c-1.5 0-3-1-3-2"
        />
      </svg>
    </span>
  );
};

ReplayFiveIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ReplayFiveIcon;
