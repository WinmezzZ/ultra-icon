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

const TeapotIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M23.001 13c-7.3 0-13.458 5.07-15.379 12H38.38c-1.92-6.93-8.079-12-15.379-12Z"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M7.001 29.593c0 4.418 1.665 8.433 4.381 11.407H34.62c2.716-2.974 4.381-6.989 4.381-11.407 0-1.594-.217-3.134-.62-4.593H7.62C7.217 26.459 7 28 7 29.593Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M27 13v-2a4 4 0 0 0-4-4v0a4 4 0 0 0-4 4v2M7 28s-1.985-.131-3-2.5C2.5 22 5 20 6 17c.761-2.282-.793-3.986-1.58-4.67-.252-.22-.42-.53-.42-.865v-.618c0-.489.354-.903.843-.92C5.878 9.887 7.663 9.996 9 11c2 1.5 3 6 3 6M9 41h28m2-16a5 5 0 1 0-4.584-7"
        />
      </svg>
    </span>
  );
};

TeapotIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default TeapotIcon;
