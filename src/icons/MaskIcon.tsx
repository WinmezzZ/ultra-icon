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

const MaskIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="null"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={4}
          d="M14 14h20c5.523 0 10 4.477 10 10v3c0 7.18-5.82 13-13 13H17C9.82 40 4 34.18 4 27v-3c0-5.523 4.477-10 10-10Z"
          clipRule="evenodd"
        />
        <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M18 27h12m-6-6v12" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M4 25.042V12.014A4.168 4.168 0 0 1 11.047 9c1.6 1.527 2.74 3.194 3.424 5M44 25.042V12.766A4.478 4.478 0 0 0 36 10a111.149 111.149 0 0 0-3 4"
        />
      </svg>
    </span>
  );
};

MaskIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default MaskIcon;
