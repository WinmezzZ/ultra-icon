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
const MakeupsIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4"
      />
      <path
        stroke="#000"
        strokeWidth={4}
        d="m37.61 9.472.255.786h.827l-.669.486.255.786-.668-.486-.669.486.255-.786-.668-.486h.826l.256-.786Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M16 31s2 4 8 4 8-4 8-4" />
      <circle cx={17} cy={22} r={3} fill="null" stroke="#000" strokeWidth={4} />
      <circle cx={31} cy={22} r={3} fill="null" stroke="#000" strokeWidth={4} />
    </svg>
  );
};

MakeupsIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MakeupsIcon = withWrapper(MakeupsIconComponent);
export default MakeupsIcon;
