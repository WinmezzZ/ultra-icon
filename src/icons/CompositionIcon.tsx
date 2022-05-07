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

const CompositionIcon = (p: SVGComponentProps) => {
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
          fillRule="evenodd"
          d="m39.828 21.786-17.86 17.86c-3.414 3.414-9.03 3.332-12.545-.182-3.515-3.515-3.597-9.132-.182-12.546L27.1 9.058"
          clipRule="evenodd"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="m39.828 21.786-17.86 17.86c-3.414 3.414-9.03 3.332-12.545-.182-3.515-3.515-3.597-9.132-.182-12.546L27.1 9.058M8.734 27.424l26.144-.688"
        />
        <path
          fill="#fff"
          d="M29.393 20.907a2 2 0 1 0-2.828-2.828 2 2 0 0 0 2.828 2.828Zm-5.657 2.829a2 2 0 1 0-2.828-2.829 2 2 0 0 0 2.828 2.829Z"
        />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="m23.564 5.523 19.8 19.799" />
      </svg>
    </span>
  );
};

CompositionIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default CompositionIcon;
