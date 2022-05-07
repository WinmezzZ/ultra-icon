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

const TurkeyIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 36h40l-5 8H9l-5-8Z" />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M11 30v6h26v-5c0-6-3-8-3-8 2-2.5 3-6 0-8s-5.5 0-7 2c0 0-16-2-16 13Z"
        />
        <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M21 24s-1 .5-2 2-1 3-1 3" />
        <path stroke="#000" strokeWidth={4} d="m39 9-5 6" />
        <circle cx={38.356} cy={7.483} r={2.5} fill="#000" transform="rotate(35.072 38.356 7.483)" />
        <circle cx={40.811} cy={9.206} r={2.5} fill="#000" transform="rotate(35.072 40.811 9.206)" />
      </svg>
    </span>
  );
};

TurkeyIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default TurkeyIcon;
