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

const SixCircularConnectionIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M48 0H0v48h48V0Z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M37.856 20v8M27.464 38l3.464-2 3.464-2m-13.856 4-3.465-2-3.464-2m-3.463-14v8m3.463-14 3.465-2 3.464-2m6.928 0 3.464 2 3.464 2"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 44a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-32a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm14-8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM10 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        />
      </svg>
    </span>
  );
};

SixCircularConnectionIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default SixCircularConnectionIcon;
