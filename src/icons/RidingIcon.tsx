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
const RidingIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="null" stroke="#000" strokeMiterlimit={2} strokeWidth={4} d="M33 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="M40 23h-7.63c-.56 0-1.1-.24-1.48-.65l-5.34-5.78a2.01 2.01 0 0 0-2.53-.36l-7.45 4.58a1 1 0 0 0 0 1.7l7.46 4.57c.59.36.96 1.01.96 1.71L24 38"
      />
      <circle cx={36.5} cy={36.5} r={7.5} fill="null" stroke="#000" strokeWidth={4} />
      <circle cx={11.5} cy={36.5} r={7.5} fill="null" stroke="#000" strokeWidth={4} />
    </svg>
  );
};

RidingIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RidingIcon = withWrapper(RidingIconComponent);
export default RidingIcon;
