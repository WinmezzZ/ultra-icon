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
const WaterRateIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <g fill="none" fillRule="evenodd">
        <path fill="#FFF" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="null"
          fillRule="nonzero"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 44c8.837 0 16-6.512 16-14.545C40 21.575 34.667 13.09 24 4 13.333 13.09 8 21.576 8 29.455 8 37.488 15.163 44 24 44Z"
        />
        <path
          stroke="#FFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M18.857 19 24 24.368 29.143 19M18 26.158h12m-12 5.368h12m-6-5.368V36"
        />
      </g>
    </svg>
  );
};

WaterRateIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const WaterRateIcon = withWrapper(WaterRateIconComponent);
export default WaterRateIcon;
