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

const CirclesSevenIcon = (p: SVGComponentProps) => {
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
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm10.393-10a4 4 0 1 0 6.928-4 4 4 0 0 0-6.928 4Zm0 12a4 4 0 1 0 6.928 4 4 4 0 0 0-6.928-4ZM24 36a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-10.392-6a4 4 0 1 0-6.928 4 4 4 0 0 0 6.928-4Zm0-12a4 4 0 1 0-6.928-4 4 4 0 0 0 6.928 4Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

CirclesSevenIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default CirclesSevenIcon;
