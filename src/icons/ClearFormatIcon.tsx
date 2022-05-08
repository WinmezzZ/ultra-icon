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
const ClearFormatIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <g clipPath="url(#prefix__a)">
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4.302}
          d="M44.782 24.17 31.918 7.1 14.135 20.5 27.5 37l3.356-2.336L44.782 24.17Z"
        />
        <path
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4.302}
          d="m27.5 37-3.839 3.075-10.563-.001-2.6-3.45-6.433-8.536L14.5 20.225"
        />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4.5} d="M13.206 40.072h31.36" />
      </g>
      <defs>
        <clipPath id="prefix__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

ClearFormatIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ClearFormatIcon = withWrapper(ClearFormatIconComponent);
export default ClearFormatIcon;
