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
const HealthyRecognitionIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M6 33v6a3 3 0 0 0 3 3h6m18 0h6a3 3 0 0 0 3-3v-6m0-18V9a3 3 0 0 0-3-3h-6M6 15V9a3 3 0 0 1 3-3h6"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M34 24 24 34 14 24c-1-1-1.5-3 0-5s4.5-2 6-1 2 2 4 2 2.5-1 4-2 4.5-1 6 1 1 4 0 5Z"
      />
    </svg>
  );
};

HealthyRecognitionIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HealthyRecognitionIcon = withWrapper(HealthyRecognitionIconComponent);
export default HealthyRecognitionIcon;
