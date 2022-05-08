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
const HeavyRainIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M9.455 30.994A13.95 13.95 0 0 1 4 19.885C4 12.217 10.105 6 17.636 6c6.297 0 11.598 4.346 13.166 10.253a8.921 8.921 0 0 1 4.107-.996c5.02 0 9.091 4.144 9.091 9.257 0 3.795-2.244 7.058-5.455 8.486M16 28v10m8-6v10m8-14v10"
      />
    </svg>
  );
};

HeavyRainIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HeavyRainIcon = withWrapper(HeavyRainIconComponent);
export default HeavyRainIcon;
