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

const BeerIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M25.5 19H33a2 2 0 0 1 2 2v23H13V21a2 2 0 0 1 2-2h2.5"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M17 8h-2.5a5.5 5.5 0 1 0 0 11H19v10.5a2.5 2.5 0 0 0 5 0V19h9.5a5.5 5.5 0 1 0 0-11H29s-1-4-6-4-6 4-6 4Z"
        />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M35 21h5a2 2 0 0 1 2 2v5a4 4 0 0 1-4 4h-3" />
      </svg>
    </span>
  );
};

BeerIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default BeerIcon;
