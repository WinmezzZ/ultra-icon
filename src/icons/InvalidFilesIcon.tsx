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
const InvalidFilesIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M8 44V4h23l9 10.5V44H8Z"
      />
      <path
        fill="null"
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M34 25c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10a9.965 9.965 0 0 1 6.865 2.729A9.972 9.972 0 0 1 34 25Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m17 18 14 14m3-7c0 5.523-4.477 10-10 10M14 25c0-5.523 4.477-10 10-10"
      />
    </svg>
  );
};

InvalidFilesIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const InvalidFilesIcon = withWrapper(InvalidFilesIconComponent);
export default InvalidFilesIcon;
