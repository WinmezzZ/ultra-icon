/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const DirectionIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <g clipPath="url(#prefix__a)">
        <rect width={36} height={36} x={6} y={6} fill="null" stroke="#000" strokeWidth={4} rx={3} />
        <path
          fill="#fff"
          d="m23.293 10.565-3.243 3.243c-.63.63-.184 1.707.707 1.707h6.485c.891 0 1.337-1.077.707-1.707l-3.242-3.243a1 1 0 0 0-1.415 0ZM10.565 24.707l3.242 3.243c.63.63 1.708.184 1.708-.707v-6.486c0-.89-1.078-1.337-1.708-.707l-3.242 3.243a1 1 0 0 0 0 1.414Zm14.141 12.728 3.243-3.243c.63-.63.184-1.707-.707-1.707h-6.485c-.891 0-1.337 1.077-.707 1.707l3.242 3.243a1 1 0 0 0 1.414 0Zm12.728-14.142-3.242-3.243c-.63-.63-1.708-.184-1.708.707v6.486c0 .89 1.078 1.337 1.707.707l3.243-3.243a1 1 0 0 0 0-1.414Z"
        />
      </g>
      <defs>
        <clipPath id="prefix__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

DirectionIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DirectionIcon = withWrapper(DirectionIconComponent);
export default DirectionIcon;
