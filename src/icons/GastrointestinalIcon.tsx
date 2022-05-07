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

const GastrointestinalIcon = (p: SVGComponentProps) => {
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
          d="M23 5c-1.146 4.46-1.146 7.773 0 9.937 1.719 3.248 5.7 5.043.574 9.374-5.126 4.332-10.323.697-13.532.697-3.208 0-6.02 3.613-6.02 8.992 0 3.586.66 6.586 1.978 9"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M29.984 5c-1.441 5.329-1.113 8.709.985 10.14 3.148 2.145 3.389-2.337 9.172.33 5.783 2.666 4.28 11.961.953 16.745C37.768 37 30.667 41.835 24.008 41c-6.659-.835-9.135-8.98-9.992-8.98-.857 0-2.668.025-3.022 3.397-.236 2.248.435 4.775 2.01 7.583"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M35.645 28.29c-.578 1.726-1.555 3.048-2.93 4.01-1.375.961-3.12 1.528-5.237 1.7"
        />
      </svg>
    </span>
  );
};

GastrointestinalIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default GastrointestinalIcon;
