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
const ShovelOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M11 4h26l-2.833 20H13.833L11 4Z"
      />
      <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M21 11v6m6-6v6" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M24 24v20" />
    </svg>
  );
};

ShovelOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ShovelOneIcon = withWrapper(ShovelOneIconComponent);
export default ShovelOneIcon;
