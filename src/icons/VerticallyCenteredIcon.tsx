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
const VerticallyCenteredIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M6 7h36" />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M16 16h16v16H16z"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M6 41h36" />
    </svg>
  );
};

VerticallyCenteredIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const VerticallyCenteredIcon = withWrapper(VerticallyCenteredIconComponent);
export default VerticallyCenteredIcon;
