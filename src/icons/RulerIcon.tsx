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
const RulerIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M44 14 34 4l-3.75 3.75-3.75 3.75L19 19l-7.5 7.5-3.75 3.75L4 34l10 10 30-30ZM30.25 7.75l-22.5 22.5M9 29l4 4m1-9 6 6m-1-11 4 4m1-9 6 6M29 9l4 4"
      />
    </svg>
  );
};

RulerIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RulerIcon = withWrapper(RulerIconComponent);
export default RulerIcon;
