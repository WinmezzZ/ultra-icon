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

const WashingMachineOneIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <rect width={32} height={40} x={8} y={4} stroke="#000" strokeWidth={4} rx={2} />
        <path
          fill="null"
          stroke="#000"
          strokeWidth={4}
          d="M8 12a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v6Z"
        />
        <circle cx={14} cy={9} r={2} fill="#fff" />
        <circle cx={20} cy={9} r={2} fill="#fff" />
        <circle cx={24} cy={29} r={7} fill="null" stroke="#000" strokeWidth={4} />
      </svg>
    </span>
  );
};

WashingMachineOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default WashingMachineOneIcon;
