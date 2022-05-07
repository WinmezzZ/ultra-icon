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

const MapDistanceIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M39.3 6H8.7A2.7 2.7 0 0 0 6 8.7v30.6A2.7 2.7 0 0 0 8.7 42h30.6a2.7 2.7 0 0 0 2.7-2.7V8.7A2.7 2.7 0 0 0 39.3 6Z"
        />
        <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m36 27-7 3m-8 3-7 3" />
        <path
          fill="null"
          stroke="#333"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M16 29c2-2.895 3-4.895 3-6a3 3 0 1 0-6 0c0 1.105 1 3.105 3 6Zm16-7c2-2.895 3-4.895 3-6a3 3 0 1 0-6 0c0 1.105 1 3.105 3 6Z"
        />
      </svg>
    </span>
  );
};

MapDistanceIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default MapDistanceIcon;
