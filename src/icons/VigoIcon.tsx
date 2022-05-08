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
const VigoIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={3.833}
        d="M24 44.125c9.527 0 17.25-7.616 17.25-17.01 0-2.306-.315-4.5-.99-6.591-.39-1.207-.704-1.783-1.167-2.894-.463-1.111-1.079-2.05-1.78-2.993-.7-.943-2.067-2.798-3.012-3.17 0 1.461-2.873 6.568-3.975 6.824-1.103.257.815-5.369-1.628-9.217-2.443-3.848-6.393-6.374-6.393-4.644 0 1.729-1.093 4.632-2.194 6.072-1.1 1.439-2.886 2.675-4.13 3.256-1.243.581-.793-2.908-1.726-2.292-.94.621-2.278 2.351-2.98 3.437-2.462 3.801-4.525 7.515-4.525 12.212 0 9.394 7.723 17.01 17.25 17.01Z"
      />
      <path
        fill="null"
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={3.833}
        d="M19.295 23.733v8.737a1.878 1.878 0 0 0 2.863 1.598l8.386-5.168a.939.939 0 0 0 0-1.598l-8.386-5.168a1.878 1.878 0 0 0-2.863 1.599Z"
      />
    </svg>
  );
};

VigoIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const VigoIcon = withWrapper(VigoIconComponent);
export default VigoIcon;
