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
const MascaraIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M28 16h12v28H28z" />
      <path fill="null" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M8 28h12v16H8z" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M14 4v24" />
      <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M20 36H8" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M20 32v8M8 32v8M18 9h-8m10 6H8m10 6h-8"
      />
    </svg>
  );
};

MascaraIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MascaraIcon = withWrapper(MascaraIconComponent);
export default MascaraIcon;
