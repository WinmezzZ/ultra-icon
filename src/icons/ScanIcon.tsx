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
const ScanIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M7 24h34M24 7v34" />
      <path
        fill="#000"
        d="M5 5h4v4H5zm9 0h4v4h-4zm16 0h4v4h-4zm9 0h4v4h-4zm0 9h4v4h-4zM5 14h4v4H5zm0 25h4v4H5zm9 0h4v4h-4zm16 0h4v4h-4zm9 0h4v4h-4zm0-9h4v4h-4zM5 30h4v4H5z"
      />
    </svg>
  );
};

ScanIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ScanIcon = withWrapper(ScanIconComponent);
export default ScanIcon;
