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

const DrumstickIcon = (p: SVGComponentProps) => {
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
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m14.15 33.82-1.413 9.9-8.486-8.486 9.9-1.414Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m24.05 6.95-9.9 9.9c-4.686 4.685-4.686 12.284 0 16.97v0c4.687 4.686 12.285 4.686 16.97 0l9.9-9.9"
        />
        <ellipse
          cx={32.535}
          cy={15.435}
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={12}
          ry={7}
          transform="rotate(45 32.535 15.435)"
        />
        <circle cx={30.061} cy={11.398} r={2} fill="#fff" transform="rotate(45 30.06 11.398)" />
        <circle cx={37.132} cy={18.469} r={2} fill="#fff" transform="rotate(45 37.132 18.469)" />
        <circle cx={31.475} cy={17.055} r={2} fill="#fff" transform="rotate(45 31.475 17.055)" />
      </svg>
    </span>
  );
};

DrumstickIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default DrumstickIcon;
