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

const AntiCorrosionIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="null"
          fillRule="evenodd"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 41.996c13.333.103 20-.989 20-3.275 0-3.428-15.586-20.718-20-20.718S4 35.65 4 38.72c0 2.047 6.667 3.139 20 3.275Z"
          clipRule="evenodd"
        />
        <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="m21.06 29.661-3.62 4.34" />
        <path
          fill="#000"
          d="M24.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm9.5 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-22 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm5.5-6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        />
      </svg>
    </span>
  );
};

AntiCorrosionIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default AntiCorrosionIcon;
