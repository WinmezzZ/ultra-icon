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

const HoneyIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="null"
          stroke="#000"
          strokeWidth={4.421}
          d="m14.613 4.843-4.69 4.689a3.316 3.316 0 0 0 4.69 4.69l4.69-4.69a3.316 3.316 0 0 0-4.69-4.69Zm10.16 8.597-6.252 6.252a3.316 3.316 0 1 0 4.689 4.69l6.252-6.253a3.316 3.316 0 1 0-4.689-4.69Z"
        />
        <path
          stroke="#000"
          strokeWidth={4.421}
          d="m28.68 18.91 13.77 13.77c1.028 1.028.812 2.91-.483 4.206-1.295 1.295-3.178 1.511-4.206.484L23.991 23.6"
        />
        <path
          fill="null"
          stroke="#000"
          strokeWidth={4.421}
          d="M22.428 6.406 11.487 17.347a3.316 3.316 0 1 0 4.69 4.69l10.94-10.942a3.316 3.316 0 1 0-4.689-4.69Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4.421}
          d="M13.854 23.142c1.424 4.437 1.187 7.715-.71 9.834-2.847 3.179-2.404 11.166 4.027 11.166 6.43 0 8.32-7.987 2.872-10.79"
        />
      </svg>
    </span>
  );
};

HoneyIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default HoneyIcon;
