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

const MuseumOneIcon = (p: SVGComponentProps) => {
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
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 44h40" />
        <path fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M8 8.364 24 4l16 4.364V14H8V8.364Z" />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M10 14v24m7-24v24m7-24v24m7-24v24m7-24v24" />
        <path stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M7 38h34v6H7z" />
      </svg>
    </span>
  );
};

MuseumOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default MuseumOneIcon;
