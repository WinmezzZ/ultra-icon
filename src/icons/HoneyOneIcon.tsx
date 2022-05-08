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
const HoneyOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <rect
        width={11}
        height={5}
        x={4.928}
        y={13.224}
        stroke="#000"
        strokeWidth={4}
        rx={2}
        transform="rotate(-46.025 4.928 13.224)"
      />
      <rect
        width={11}
        height={5}
        x={19.321}
        y={27.111}
        stroke="#000"
        strokeWidth={4}
        rx={2}
        transform="rotate(-46.025 19.321 27.11)"
      />
      <rect
        width={17}
        height={5}
        x={6.444}
        y={18.855}
        stroke="#000"
        strokeWidth={4}
        rx={2}
        transform="rotate(-46.025 6.444 18.855)"
      />
      <rect
        width={17}
        height={5}
        x={13.64}
        y={25.798}
        stroke="#000"
        strokeWidth={4}
        rx={2}
        transform="rotate(-46.025 13.64 25.798)"
      />
      <rect
        width={25}
        height={5}
        x={7.264}
        y={25.205}
        stroke="#000"
        strokeWidth={4}
        rx={2}
        transform="rotate(-46.025 7.264 25.205)"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m25.002 28.424 4.167-4.318 14.406 13.9-4.166 4.318-14.407-13.9Z"
      />
      <path
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M21 40.25c0 2.071-1.79 3.75-4 3.75s-4-1.679-4-3.75c0-2.071 4-6.25 4-6.25s4 4.179 4 6.25Z"
      />
    </svg>
  );
};

HoneyOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HoneyOneIcon = withWrapper(HoneyOneIconComponent);
export default HoneyOneIcon;
