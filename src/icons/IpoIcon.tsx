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

const IpoIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M4 18.313V7h40v11.313a5.5 5.5 0 0 0-3.636 5.187A5.5 5.5 0 0 0 44 28.687V40H4V28.687A5.5 5.5 0 0 0 7.636 23.5 5.5 5.5 0 0 0 4 18.313Z"
        />
        <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M13 18v11m5-11v11" />
        <path fill="null" stroke="#333" strokeLinejoin="round" strokeWidth={4} d="M18 18h3a3 3 0 1 1 0 6h-3v-6Z" />
        <ellipse cx={32} cy={24} fill="null" stroke="#333" strokeLinejoin="round" strokeWidth={4} rx={3} ry={5} />
      </svg>
    </span>
  );
};

IpoIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default IpoIcon;
