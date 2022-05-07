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

const XiguaIcon = (p: SVGComponentProps) => {
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
        <path
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={3.667}
          d="M24 42.333c10.125 0 18.333-8.208 18.333-18.333 0-10.125-8.208-18.333-18.333-18.333C13.875 5.667 5.667 13.875 5.667 24c0 2.486 1.14 3.687 2.947 4.745 1.807 1.057 5.206.882 7.518 2.956 2.313 2.075 2.469 5.45 2.948 7.09.479 1.64 2.434 3.542 4.92 3.542Z"
        />
        <path
          fill="null"
          stroke="#333"
          strokeLinejoin="round"
          strokeWidth={3.667}
          d="M19.526 18.541c-.539 1.308-.808 2.846-.808 4.612 0 1.68.178 3.343.535 4.99a3.056 3.056 0 0 0 3.812 2.294c1.8-.505 3.367-1.166 4.701-1.983 1.248-.764 2.411-1.729 3.489-2.894a3.056 3.056 0 0 0-.277-4.413A32.754 32.754 0 0 0 27 18.276c-1.446-.885-2.862-1.42-4.249-1.602a3.056 3.056 0 0 0-3.225 1.866Z"
        />
      </svg>
    </span>
  );
};

XiguaIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default XiguaIcon;
