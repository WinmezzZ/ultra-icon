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
const IcecreamTwoIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M15.34 22.5 21 37l3 6 3-6 5.66-14.5"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M19 32h10" />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 3c-6 0-8 6-8 6s-6 2-6 7 5 7 5 7 3.5-2 9-2 9 2 9 2 5-2 5-7-6-7-6-7-2-6-8-6Z"
      />
    </svg>
  );
};

IcecreamTwoIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const IcecreamTwoIcon = withWrapper(IcecreamTwoIconComponent);
export default IcecreamTwoIcon;
