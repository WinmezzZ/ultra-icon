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
const HourglassFullIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <g fill="none" fillRule="evenodd" strokeLinejoin="round">
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <g strokeWidth={4}>
          <path stroke="#000" strokeLinecap="round" d="M7 4h34M7 44h34" />
          <path
            fill="null"
            fillRule="nonzero"
            stroke="#000"
            d="M11 44c2.667-13.339 7-20.006 13-20 6 .006 10.333 6.672 13 20H11Z"
          />
          <path
            fill="null"
            fillRule="nonzero"
            stroke="#000"
            d="M37 4c-2.667 13.339-7 20.006-13 20-6-.006-10.333-6.672-13-20h26Z"
          />
          <path stroke="#FFF" strokeLinecap="round" d="M21 15h6m-8 23h10" />
        </g>
      </g>
    </svg>
  );
};

HourglassFullIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HourglassFullIcon = withWrapper(HourglassFullIconComponent);
export default HourglassFullIcon;
