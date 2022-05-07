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

const SoundIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <rect
          width={32}
          height={40}
          x={8}
          y={4}
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={2}
        />
        <circle cx={24} cy={15} r={5} fill="null" stroke="#000" strokeWidth={4} />
        <circle cx={14} cy={10} r={2} fill="#000" />
        <circle cx={14} cy={38} r={2} fill="#000" />
        <circle cx={34} cy={10} r={2} fill="#000" />
        <circle cx={34} cy={38} r={2} fill="#000" />
        <circle cx={24} cy={32} r={6} fill="null" stroke="#000" strokeWidth={4} />
      </svg>
    </span>
  );
};

SoundIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default SoundIcon;
