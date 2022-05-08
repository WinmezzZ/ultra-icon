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
const FirstIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24.68 20.037c-1.115-.299-4.415-1.357-9.51 2.055-3.031 2.03-4.306 5.148-4.736 7.438-.204 1.089.72 1.967 1.82 1.836.796-.094 1.68-.24 2.348-.467 1.97-.667 1.712-1.93 2.717-3.453 1.005-1.522 3.533-2.04 5.612-.885 2.08 1.154 2.747 3.125 2.299 4.797-.448 1.671-1.453 3.194-3.981 3.711-2.528.517-3.343-.896-5.98-2.2-1.374-.68-3.167.202-4.25.899a1.514 1.514 0 0 0-.609 1.822c.175.463.415 1.005.729 1.548.816 1.413 4.378 5.951 8.985 6.588 4.607.638 9.404-1.66 12.12-5.114 2.717-3.452 2.797-8.209.907-12.299"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M33.045 26.42 28.276 4.156c-.107-.5-.575-.845-1.07-.715-1.16.307-2.635 1.077-2.705 2.87-.09 2.305.365 20.038.971 23.256"
      />
    </svg>
  );
};

FirstIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FirstIcon = withWrapper(FirstIconComponent);
export default FirstIcon;
