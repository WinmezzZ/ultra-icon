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
const EiffelTowerIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M21 8c0 11-3.5 25-10 36M27 8c0 11 3.5 25 10 36M4 44h40"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M14 30h20m-17-9h14M20 8h8m-4-4v4" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M18 44s.813-2.813 2-4c1-1 2-2 4-2s3 1 4 2c1.344 1.344 2 4 2 4"
      />
    </svg>
  );
};

EiffelTowerIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const EiffelTowerIcon = withWrapper(EiffelTowerIconComponent);
export default EiffelTowerIcon;
