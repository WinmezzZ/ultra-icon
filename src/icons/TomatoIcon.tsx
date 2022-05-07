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

const TomatoIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 44c11.046 0 20-7.387 20-16.5 0-6.442-4.475-11.799-11-14.516L29.5 14.5 30 20l-6.5-2-6.5 2v-5.5l-3-1.516C8.022 15.837 4 21.393 4 27.5 4 36.613 12.954 44 24 44Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m23.5 4 3.809 5.117L36 9.91l-6.337 4.573L31.5 21l-8-3-8 3 1.837-6.517L11 9.91l8.691-.793L23.5 4Z"
        />
      </svg>
    </span>
  );
};

TomatoIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default TomatoIcon;
