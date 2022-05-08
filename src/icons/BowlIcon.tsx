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
const BowlIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M32 44s0-3.864.002-3.872a17.964 17.964 0 0 0 4.726-3.4A17.943 17.943 0 0 0 42 24H6c0 4.97 2.015 9.47 5.272 12.728a18.085 18.085 0 0 0 4.741 3.407L16 44h16Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 18.008V8m12 10.008V12m-24 6.008V12m28-4a4 4 0 0 0-4 4m-8-8a4 4 0 0 0-4 4m-8 0a4 4 0 0 0-4 4"
      />
    </svg>
  );
};

BowlIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BowlIcon = withWrapper(BowlIconComponent);
export default BowlIcon;
