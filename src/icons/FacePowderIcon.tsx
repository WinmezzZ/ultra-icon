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

const FacePowderIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <ellipse cx={24} cy={30} fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} rx={16} ry={6} />
        <ellipse cx={24} cy={14} fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} rx={16} ry={10} />
        <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m23 10-5 3m12 1-5 3" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M40 38c0 3.314-7.163 6-16 6S8 41.314 8 38m32 0v-8M8 38v-8"
        />
        <ellipse cx={24} cy={30} fill="#fff" rx={7} ry={2} />
      </svg>
    </span>
  );
};

FacePowderIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default FacePowderIcon;
