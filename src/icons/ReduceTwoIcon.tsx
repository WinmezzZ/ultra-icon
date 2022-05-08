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
const ReduceTwoIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <rect width={36} height={36} x={6} y={6} fill="null" stroke="#000" strokeWidth={4} rx={3} />
      <path
        fill="#fff"
        d="M17 30h-4.586c-.89 0-1.337 1.077-.707 1.707l4.586 4.586c.63.63 1.707.184 1.707-.707V31a1 1 0 0 0-1-1Zm13 1v4.586c0 .89 1.077 1.337 1.707.707l4.586-4.586c.63-.63.184-1.707-.707-1.707H31a1 1 0 0 0-1 1Zm1-13h4.586c.89 0 1.337-1.077.707-1.707l-4.586-4.586c-.63-.63-1.707-.184-1.707.707V17a1 1 0 0 0 1 1Zm-13-1v-4.586c0-.89-1.077-1.337-1.707-.707l-4.586 4.586c-.63.63-.184 1.707.707 1.707H17a1 1 0 0 0 1-1Z"
      />
    </svg>
  );
};

ReduceTwoIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ReduceTwoIcon = withWrapper(ReduceTwoIconComponent);
export default ReduceTwoIcon;
