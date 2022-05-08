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
const SelfieIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <g stroke="#000" strokeLinejoin="round" strokeWidth={4} clipPath="url(#prefix__a)">
        <path
          strokeLinecap="round"
          d="M29.234 6.98c3.714-1.568 11.276-2.47 13.794 5.891 2.518 8.362-8.307 14.612-8.026 8.099.28-6.514 7.995-1.152 7.83 3.562-.165 4.714-5.063 5.232-5.063 5.232"
        />
        <rect width={26} height={12} x={4.241} y={15.778} fill="null" rx={2} transform="rotate(-30 4.241 15.778)" />
        <path strokeLinecap="round" d="M21.5 19.67 29 32.66" />
        <rect width={6} height={10} x={26.401} y={34.16} fill="null" rx={3} transform="rotate(-30 26.401 34.16)" />
        <path strokeLinecap="round" d="m11.401 8.18 5.197-3m5.303 21.186 5.197-3" />
      </g>
      <defs>
        <clipPath id="prefix__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

SelfieIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SelfieIcon = withWrapper(SelfieIconComponent);
export default SelfieIcon;
