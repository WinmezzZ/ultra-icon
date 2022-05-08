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
const FerrisWheelIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="m9 44 15-22m15 22L24 22" />
      <path
        stroke="#000"
        strokeWidth={4}
        d="M9.132 24A15.14 15.14 0 0 1 9 22a14.95 14.95 0 0 1 1.5-6.546m.657 14.299A15.018 15.018 0 0 0 21 36.7m6 0a15.019 15.019 0 0 0 9.911-7.06M38.868 24c.087-.654.132-1.322.132-2a14.94 14.94 0 0 0-1.5-6.546M27 7.3a14.954 14.954 0 0 1 7 3.52M21 7.3a14.954 14.954 0 0 0-7.614 4.101"
      />
      <circle cx={10} cy={27} r={3} fill="null" stroke="#000" strokeWidth={4} />
      <circle cx={24} cy={37} r={3} fill="null" stroke="#000" strokeWidth={4} />
      <circle cx={24} cy={7} r={3} fill="null" stroke="#000" strokeWidth={4} />
      <circle cx={12} cy={13} r={3} fill="null" stroke="#000" strokeWidth={4} />
      <circle cx={36} cy={13} r={3} fill="null" stroke="#000" strokeWidth={4} />
      <circle cx={38} cy={27} r={3} fill="null" stroke="#000" strokeWidth={4} />
      <circle cx={24} cy={22} r={4} fill="#000" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M6 44h8m20 0h8" />
    </svg>
  );
};

FerrisWheelIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FerrisWheelIcon = withWrapper(FerrisWheelIconComponent);
export default FerrisWheelIcon;
