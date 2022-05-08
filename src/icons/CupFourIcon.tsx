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
const CupFourIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M14 25c0 2 1.071 7 15 7s15-5 15-7V10H14v15Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M29 16h-6v5l3 3 3-3v-5Zm-3 0v-6M15 40h28"
      />
      <path stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M14 14H4s1 5 2 8c.998 3 8 2 8 2" />
    </svg>
  );
};

CupFourIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CupFourIcon = withWrapper(CupFourIconComponent);
export default CupFourIcon;
