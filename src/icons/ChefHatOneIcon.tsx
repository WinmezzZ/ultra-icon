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
const ChefHatOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M13 24.125a8.64 8.64 0 1 1 3.857-16.837A8.625 8.625 0 0 1 23.64 4a8.627 8.627 0 0 1 6.919 3.464A8.64 8.64 0 1 1 35 24.124V40a2 2 0 0 1-2 2H15a2 2 0 0 1-2-2V24.125Z"
      />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M13 31h22m-15-6v6" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M35 28v6m-22-6v6" />
    </svg>
  );
};

ChefHatOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ChefHatOneIcon = withWrapper(ChefHatOneIconComponent);
export default ChefHatOneIcon;
