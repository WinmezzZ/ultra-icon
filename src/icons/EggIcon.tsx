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
const EggIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <circle
        cx={24}
        cy={24}
        r={10}
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      />
      <path
        stroke="#000"
        strokeWidth={4}
        d="M44 24c0 2.633-.509 5.146-1.433 7.448-.936 2.331-4.129.071-7.346 3.521-3.216 3.45-.71 6.267-3.204 7.36A19.931 19.931 0 0 1 24 44C12.954 44 4 35.046 4 24S12.954 4 24 4s20 8.954 20 20Z"
      />
      <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M20 25s.21 1.21 1 2 2 1 2 1" />
    </svg>
  );
};

EggIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const EggIcon = withWrapper(EggIconComponent);
export default EggIcon;
