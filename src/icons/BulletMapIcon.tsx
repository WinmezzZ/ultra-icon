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
const BulletMapIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M6 6v36h36" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M16 40V9c0-1.105 1.053-2 2.353-2h15.294C34.947 7 36 7.895 36 9v31m-19-7.892h17M22 19h8m-4-5v18.108"
      />
    </svg>
  );
};

BulletMapIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BulletMapIcon = withWrapper(BulletMapIconComponent);
export default BulletMapIcon;
