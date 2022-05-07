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

const NasalIcon = (p: SVGComponentProps) => {
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
          strokeWidth={4}
          d="M16.988 4c.12 6.25-.203 10.587-.97 13.01-1.152 3.633-9.936 13.753-9.936 19.092 0 5.34 6.304 8.287 9.709 6.277M32.002 4c-.225 6.25.047 10.587.814 13.01 1.15 3.633 10.143 12.44 10.143 18.283 0 5.842-6.512 9.096-9.917 7.086"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M13.006 34.834c1.71-.972 3.196-.972 4.46 0C19.36 36.292 19.956 40 24.008 40c4.053 0 6.04-4.157 7.992-5.166 1.302-.673 2.635-.673 4 0M20.285 22.146c-.794.854-1.634 1.807-2.247 3.468-.465 1.259-.558 1.989-.622 2.81"
        />
      </svg>
    </span>
  );
};

NasalIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default NasalIcon;
