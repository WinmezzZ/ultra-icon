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
const ErrorPromptIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m8 18 12 12m0-12L8 30M34 8c5 4.36 8 9.931 8 16 0 6.069-3 11.64-8 16m-7-26c3.75 2.726 6 6.207 6 10s-2.25 7.274-6 10"
      />
    </svg>
  );
};

ErrorPromptIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ErrorPromptIcon = withWrapper(ErrorPromptIconComponent);
export default ErrorPromptIcon;
