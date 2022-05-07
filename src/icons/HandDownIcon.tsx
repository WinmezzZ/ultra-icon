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

const HandDownIcon = (p: SVGComponentProps) => {
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
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M7.053 10h22V4h-22v6Z" />
        <path
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M29.053 10c6.52 7.123 10.26 11.251 11.222 12.384 1.443 1.7.837 3.62-2.775 3.62s-5.695-5.285-8.447-5.285c-.016-.004-.017 6.756-.003 20.277A3 3 0 0 1 26.052 44h-.003a3.004 3.004 0 0 1-3.004-3.004v-8.01c-7.973-1.208-12.308-1.875-13.004-2-1.044-.188-2.988-1.185-2.988-4.054V10h22Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

HandDownIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default HandDownIcon;
