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

const BasketballOneIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        {...props}
      >
        <path fill="null" d="M18 24c0-6.624 5.376-12 12-12s12 5.376 12 12" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={2}
          strokeWidth={4}
          d="M18 24c0-6.624 5.376-12 12-12s12 5.376 12 12M12 4H4v32h8V4Zm0 20h32m-26 0 2 4.5c2 5 1.9 10.4 0 15.5m21-20-2 4.5c-2 5-1.91 10.4 0 15.5M21.22 32h16.56m-16.09 8h15.63m-7.82 0V24"
        />
      </svg>
    </span>
  );
};

BasketballOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default BasketballOneIcon;
