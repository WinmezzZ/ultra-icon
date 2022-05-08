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
const ProportionalScalingIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <g stroke="#000" strokeWidth={4} clipPath="url(#prefix__a)">
        <path d="M22.268 7c.77-1.333 2.694-1.333 3.464 0l17.32 30c.77 1.333-.192 3-1.731 3H6.678c-1.54 0-2.501-1.667-1.732-3l17.32-30Z" />
        <path strokeLinecap="round" d="m19 40 13-22m0 22 6-11" />
      </g>
      <defs>
        <clipPath id="prefix__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

ProportionalScalingIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ProportionalScalingIcon = withWrapper(ProportionalScalingIconComponent);
export default ProportionalScalingIcon;
