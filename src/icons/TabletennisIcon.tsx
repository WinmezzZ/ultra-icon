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
const TabletennisIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="M31.45 16.96a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="m36 34-2-11-11 5-13-3M4 41.03h40"
      />
      <circle cx={9} cy={25} r={5} fill="#000" />
      <circle cx={6} cy={17} r={2} fill="#000" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="m34 23 10 6-15 5"
      />
    </svg>
  );
};

TabletennisIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TabletennisIcon = withWrapper(TabletennisIconComponent);
export default TabletennisIcon;
