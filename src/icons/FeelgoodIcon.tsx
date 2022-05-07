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

const FeelgoodIcon = (p: SVGComponentProps) => {
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
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M22.142 15.858 10.828 27.172a4 4 0 0 0 0 5.656l9.9 9.9a4 4 0 0 0 5.657 0l9.9-9.9a4 4 0 0 0 0-5.656L24.97 15.858a2 2 0 0 0-2.829 0Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M23 14.91s6.058-6.76 7.41-8.17c1.353-1.409 5.158-2.84 7.411-.491 2.254 2.348.82 6.07-.532 7.478C35.937 15.137 30.62 21 30.62 21M23 14.91s-6.058-6.76-7.41-8.17c-1.353-1.409-5.158-2.84-7.411-.491-2.254 2.348-.82 6.07.532 7.478C10.063 15.137 15.38 21 15.38 21"
        />
      </svg>
    </span>
  );
};

FeelgoodIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default FeelgoodIcon;
