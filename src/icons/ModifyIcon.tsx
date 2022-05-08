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
const ModifyIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m20.07 9.586-4.242-4.243a2 2 0 0 0-2.828 0L7.343 11a2 2 0 0 0 0 2.828l4.243 4.243m17.343 19.343 4.242 4.243a2 2 0 0 0 2.829 0L41.657 36a2 2 0 0 0 0-2.828l-4.243-4.243"
      />
      <rect
        width={12}
        height={42}
        x={34.606}
        y={4.908}
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        rx={2}
        transform="rotate(45 34.606 4.908)"
      />
      <circle cx={24} cy={24} r={2} fill="#fff" />
      <circle cx={20} cy={28} r={2} fill="#fff" />
      <circle cx={28} cy={20} r={2} fill="#fff" />
    </svg>
  );
};

ModifyIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ModifyIcon = withWrapper(ModifyIconComponent);
export default ModifyIcon;
