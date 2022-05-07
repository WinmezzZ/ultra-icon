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

const PyramidOneIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="null"
          fillRule="evenodd"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m19 14 14 28H5l14-28Z"
          clipRule="evenodd"
        />
        <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m24 25-9 17" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M33 42h10.5L35 28l-4.5 8" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M25.984 26.396c6.228-1.582 9.994-7.914 8.412-14.142-1.582-6.228-7.914-9.995-14.142-8.412-6.229 1.582-9.995 7.913-8.413 14.142a11.603 11.603 0 0 0 1.937 4.078"
        />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M20 42H10m12.5-21 5 10" />
      </svg>
    </span>
  );
};

PyramidOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default PyramidOneIcon;
