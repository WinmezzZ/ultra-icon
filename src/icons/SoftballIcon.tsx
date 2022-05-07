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

const SoftballIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinejoin="round"
          strokeMiterlimit={2}
          strokeWidth={4}
          d="M24 44c11.05 0 20-8.95 20-20S35.05 4 24 4 4 12.95 4 24s8.95 20 20 20Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={2}
          strokeWidth={4}
          d="M10 38c3.7-3.63 6-8.41 6-14 0-5.52-2.38-10.38-6-14m28 28c-3.7-3.63-6-8.41-6-14 0-5.52 2.38-10.38 6-14M28 24h8m-24 0h8m10 10 6-3m0-14-6-3M18 34l-6-3m0-14 6-3"
        />
      </svg>
    </span>
  );
};

SoftballIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default SoftballIcon;
