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

const BabyFeetIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="null"
          stroke="#000"
          strokeWidth={4}
          d="M15 20.612c-1.424 6.15 6.493 7.715 4.624 12.048-1.87 4.332-6.055 3.466-5.588 7.798.468 4.333 6.006 4.394 11.048 1.784 10.083-5.221 12.187-16.625 7.624-21.63-5.608-6.15-16.284-6.15-17.708 0Z"
        />
        <ellipse cx={34.535} cy={13.535} fill="#000" rx={2} ry={3} transform="rotate(40 34.535 13.535)" />
        <ellipse cx={29.381} cy={10.603} fill="#000" rx={2} ry={3} transform="rotate(25 29.381 10.603)" />
        <ellipse cx={23.381} cy={9.603} fill="#000" rx={2} ry={3} transform="rotate(6 23.381 9.603)" />
        <ellipse cx={14} cy={8} fill="null" stroke="#000" strokeWidth={4} rx={3} ry={4} transform="rotate(-20 14 8)" />
        <ellipse cx={38.535} cy={17.535} fill="#000" rx={2} ry={3} transform="rotate(50 38.535 17.535)" />
      </svg>
    </span>
  );
};

BabyFeetIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default BabyFeetIcon;
