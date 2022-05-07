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

const DropboxIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <g stroke="#000" strokeLinejoin="round" strokeWidth={4} clipPath="url(#prefix__a)">
          <path fill="null" d="m24 10-12 8 12 8 12-8-12-8Z" />
          <path d="m24 10 12 8 5-7-11-7-6 6Zm0 0-12 8-5-7 11-7 6 6Zm19 12-7-4-12 8 7 5 12-9ZM5 22l7-4 12 8-7 5-12-9Z" />
          <path strokeLinecap="round" d="M36 28v9l-12 7-12-7v-9" />
        </g>
        <defs>
          <clipPath id="prefix__a">
            <path fill="#fff" d="M0 0h48v48H0z" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

DropboxIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default DropboxIcon;
