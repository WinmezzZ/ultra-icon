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

const UngroupIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M11.273 4H4v7.273h7.273V4ZM44 36.727h-7.273V44H44v-7.273ZM11.273 24H4v7.273h7.273V24ZM24 36.727h-7.273V44H24v-7.273ZM31.273 4H24v7.273h7.273V4ZM44 16.727h-7.273V24H44v-7.273Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M11.273 7.636H24m0 32.728h12.727M11.273 27.636h16.364V11.273m1.191 9.091h7.9M20.363 36.727V27.63v9.098ZM7.636 11.273V24m32.728 0v12.727"
        />
      </svg>
    </span>
  );
};

UngroupIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default UngroupIcon;
