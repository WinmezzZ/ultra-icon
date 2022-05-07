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

const UploadIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <mask id="prefix__a" width={48} height={48} x={0} y={0} mask-type="alpha" maskUnits="userSpaceOnUse">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </mask>
        <g stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} mask="url(#prefix__a)">
          <path d="M6 24.008V42h36V24m-9-9-9-9-9 9m8.992 17V6" />
        </g>
      </svg>
    </span>
  );
};

UploadIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default UploadIcon;
