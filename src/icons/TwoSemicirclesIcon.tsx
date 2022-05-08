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
const TwoSemicirclesIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M44 25c0-11.046-8.954-20-20-20S4 13.954 4 25h40Zm-30 7c0 5.523 4.477 10 10 10s10-4.477 10-10H14Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

TwoSemicirclesIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TwoSemicirclesIcon = withWrapper(TwoSemicirclesIconComponent);
export default TwoSemicirclesIcon;
