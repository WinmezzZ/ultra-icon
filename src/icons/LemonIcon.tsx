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

const LemonIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M36 26c0-6.408-4.383-12.811-9-14.473L24 8l-3 3.527c-4.617 1.662-9 8.065-9 14.473 0 6.408 4.383 12.811 9 14.473.954.343 1.96 3.527 3 3.527s2.046-3.184 3-3.527c4.617-1.662 9-8.065 9-14.473Z"
        />
        <path
          stroke="#000"
          strokeWidth={4}
          d="M35.142 4.232c1.011.13 1.586 1.124 1.192 2.065-.534 1.275-1.505 2.957-3.138 3.9-1.632.942-3.575.942-4.946.767-1.011-.13-1.586-1.124-1.192-2.065.534-1.274 1.506-2.956 3.138-3.899 1.633-.943 3.575-.943 4.946-.768Z"
        />
      </svg>
    </span>
  );
};

LemonIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default LemonIcon;
