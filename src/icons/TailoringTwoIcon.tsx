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
const TailoringTwoIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="#000"
        d="M42 5h-4.586c-.89 0-1.337 1.077-.707 1.707l4.586 4.586c.63.63 1.707.184 1.707-.707V6a1 1 0 0 0-1-1ZM8 43h4.586c.89 0 1.337-1.077.707-1.707l-4.586-4.586c-.63-.63-1.707-.184-1.707.707V42a1 1 0 0 0 1 1Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M14 4v28a2 2 0 0 0 2 2h28" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M21 13h14v14" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M14 13H6m30 29v-8" />
    </svg>
  );
};

TailoringTwoIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TailoringTwoIcon = withWrapper(TailoringTwoIconComponent);
export default TailoringTwoIcon;
