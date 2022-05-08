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
const DataLockIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M39 28v4h-8v-4a4 4 0 0 1 8 0Zm-13 4h18v12H26V32Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M32 6h6a4 4 0 0 1 4 4v6M16 42h-6a4 4 0 0 1-4-4v-6M22 8v12c0 2.21-4.03 4-9 4s-9-1.79-9-4V8"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M22 14c0 2.21-4.03 4-9 4s-9-1.79-9-4"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M22 8c0 2.21-4.03 4-9 4s-9-1.79-9-4 4.03-4 9-4 9 1.79 9 4Z"
      />
    </svg>
  );
};

DataLockIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DataLockIcon = withWrapper(DataLockIconComponent);
export default DataLockIcon;
