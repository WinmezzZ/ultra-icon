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

const CoconutTreeIcon = (p: SVGComponentProps) => {
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
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M22 14s-2.7 5.293-4 12c-1.3 6.707-1 16-1 16"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M33.953 23.272c.346.23.893.391 1.428.503.932.194 1.792-.446 1.768-1.397-.045-1.774-.737-4.675-4.258-7.014-3.325-2.207-6.626-2.238-8.708-1.92-1.187.18-1.66 1.478-.978 2.467.608.883 1.316 1.774 1.795 1.945 1 .355 2.203-.582 3.08 0 .876.581.615 1.925 1.492 2.507.876.582 2.013-.18 2.89.402.875.582.615 1.925 1.491 2.507ZM20 17c.858-.286 1.389-1.226 1.686-1.979.246-.621.026-1.308-.55-1.648-1.295-.766-4.06-1.814-8.374-.561-4.265 1.238-5.39 4.056-5.677 5.715a1.33 1.33 0 0 0 1.178 1.566c.56.062 1.176.034 1.544-.278.807-.685 1.025-1.582 1.927-1.824.901-.241 1.679.858 2.58.616.902-.241 1.026-1.582 1.927-1.824.902-.241 2.26.717 3.76.217Zm7-11c-2.5 1-5 6-5 8l13-6c-1.38-2.391-5.5-3-8-2Z"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M20 5c4 1.422 3.38 6.609 2 9L10 5.922C11 4 16 3.578 20 5Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M26 35c8.284 0 13 1.79 13 4s-6.716 4-15 4c-8.284 0-15-1.79-15-4 0-.54.4-1.053 1.125-1.523"
        />
      </svg>
    </span>
  );
};

CoconutTreeIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default CoconutTreeIcon;
