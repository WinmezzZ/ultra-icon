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

const OneIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="null"
          stroke="#000"
          strokeWidth={4}
          d="m11 40-4.06-8.798a5 5 0 0 1 2.1-6.46l11.257-6.29a3 3 0 0 1 3.264.218l1.026.77a1 1 0 0 0 1.595-.697L27.37 7.25a3 3 0 0 1 1.11-2.034l.215-.172a1.865 1.865 0 0 1 2.484.138c.525.524.82 1.236.82 1.978v22.26a1 1 0 0 0 1.624.782L37 27.5c1.653-1.322 3.875-.459 5.255.445.439.287.504.881.192 1.303L34.5 40S31 44 23 44s-11.333-2.667-12-4Z"
        />
      </svg>
    </span>
  );
};

OneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default OneIcon;
