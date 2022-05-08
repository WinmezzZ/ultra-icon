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
const ClothesGlovesIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M35 27V17m0 0v-1c0-5.657 0-8.485-1.757-10.243C31.485 4 28.657 4 23 4h-4c-5.657 0-8.485 0-10.243 1.757C7 7.515 7 10.343 7 16v28h28v-7s7 0 7-6v-8c0-6-7-6-7-6Zm-21 6V5m7 18V5m7 18V5"
      />
    </svg>
  );
};

ClothesGlovesIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ClothesGlovesIcon = withWrapper(ClothesGlovesIconComponent);
export default ClothesGlovesIcon;
