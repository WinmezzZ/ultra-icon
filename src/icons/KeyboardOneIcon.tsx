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
const KeyboardOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <rect width={40} height={24} x={4} y={18} stroke="#000" strokeLinejoin="round" strokeWidth={4} rx={2} />
      <circle cx={14} cy={24} r={2} fill="#000" />
      <circle cx={16} cy={30} r={2} fill="#000" />
      <circle cx={10} cy={30} r={2} fill="#000" />
      <circle cx={20} cy={24} r={2} fill="#000" />
      <circle cx={22} cy={30} r={2} fill="#000" />
      <circle cx={26} cy={24} r={2} fill="#000" />
      <circle cx={28} cy={30} r={2} fill="#000" />
      <circle cx={32} cy={24} r={2} fill="#000" />
      <circle cx={34} cy={30} r={2} fill="#000" />
      <circle cx={38} cy={24} r={2} fill="#000" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M17 36h14m2-18v-4.875a1 1 0 0 1 1-1h5a1 1 0 0 0 1-1V6"
      />
    </svg>
  );
};

KeyboardOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const KeyboardOneIcon = withWrapper(KeyboardOneIconComponent);
export default KeyboardOneIcon;
