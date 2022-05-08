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
const FreezingLineColumnIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M40 6H8a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M16.123 6 6 15m20.003-9L6 24M35 6 6 33m13-3L6 42m35-32L29.243 20.852M19 21v21m0-21h23"
      />
    </svg>
  );
};

FreezingLineColumnIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FreezingLineColumnIcon = withWrapper(FreezingLineColumnIconComponent);
export default FreezingLineColumnIcon;
