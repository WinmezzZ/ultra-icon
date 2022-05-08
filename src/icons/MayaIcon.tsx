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
const MayaIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M4 34h40v8H4zm3-7h34v7H7zm3-6h28v6H10zm3-6h22v6H13zm7-8h8v8h-8z"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="m20 15-6 27m14-27 6 27" />
    </svg>
  );
};

MayaIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MayaIcon = withWrapper(MayaIconComponent);
export default MayaIcon;
