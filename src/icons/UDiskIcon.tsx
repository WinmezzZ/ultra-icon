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
const UDiskIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M30 12V4H18v8" />
      <path
        fill="null"
        stroke="#000"
        strokeWidth={4}
        d="M13 12.373c0-.206.167-.373.373-.373h21.254c.206 0 .373.167.373.373V33c0 6.075-4.925 11-11 11s-11-4.925-11-11V12.373Z"
      />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M20 21h8m-8 8h8" />
    </svg>
  );
};

UDiskIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const UDiskIcon = withWrapper(UDiskIconComponent);
export default UDiskIcon;
