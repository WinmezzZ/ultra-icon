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
const PhotographIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <g stroke="#000" strokeLinecap="round" strokeWidth={4} clipPath="url(#prefix__a)">
        <path strokeLinejoin="bevel" d="M34 13V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h15" />
        <path
          strokeLinejoin="round"
          d="M28 42c-7-4-3.668-9.774-5.023-11-1.652-1.495-2.59-2.888-2.977-5-.388-2.112 1.07-4.526 2.977-3C24.885 24.526 28 31 28 31l2-2 1-11s-1-4-1-6 4 1 6 4c0 10.442 1.5 20 6 28"
        />
        <path strokeLinejoin="round" d="M25 17.4 21 11l-8 16h7M6 22l6-11 5 7" />
      </g>
      <defs>
        <clipPath id="prefix__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

PhotographIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PhotographIcon = withWrapper(PhotographIconComponent);
export default PhotographIcon;
