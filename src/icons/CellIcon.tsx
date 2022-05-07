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

const CellIcon = (p: SVGComponentProps) => {
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
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4.421}
          d="M28.416 21.847c-.116 2.586.542 4.399 1.974 5.438 2.148 1.56 7.447 1.742 11.644-5.438 4.197-7.181.126-11.082-1.42-11.732-1.032-.434-2.068-.596-3.11-.488m-6.49 18.379c-1.22 1.414-1.355 3.112-.402 5.094 1.428 2.974 5.087 2.439 6.916 4.916 1.219 1.651 1.68 3.313 1.385 4.984"
        />
        <path
          fill="null"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={4.421}
          d="M8.504 23.64c2.26 3.021 7.662 3.415 13.996.99 2.564-.981 5.282-2.425 8.005-4.343 2.053-1.447 3.54-2.923 4.587-4.367 3.771-5.204 1.824-9.998 0-11.514-1.976-1.642-5.77-2.317-12.592.628a48.607 48.607 0 0 0-3.965 1.946c-2.798 1.523-5.101 3.243-6.873 5.02-4.162 4.175-5.385 8.662-3.158 11.64Z"
          clipRule="evenodd"
        />
        <path
          stroke="#333"
          strokeLinecap="round"
          strokeWidth={4.421}
          d="M16.245 8.84c.44 2.949 1.671 5.528 3.697 7.736 2.025 2.209 4.446 3.62 8.058 4.924"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4.421}
          d="M9.981 25c-5.825 5.65-7.395 9.929-4.71 12.835 4.028 4.359 7.817-1.208 12.896-1.208 3.385 0 5.997 2.124 7.833 6.373m9.092-27.08c-1.047 1.444-2.534 2.92-4.587 4.367-2.723 1.918-5.44 3.362-8.005 4.344m0-19.597a48.61 48.61 0 0 0-3.966 1.946c-2.797 1.523-5.1 3.243-6.872 5.02"
        />
      </svg>
    </span>
  );
};

CellIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default CellIcon;
