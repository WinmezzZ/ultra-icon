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
const DeskLampIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeWidth={4}
        d="M8 24.596C8 25.37 8.629 26 9.404 26h29.192C39.37 26 40 25.371 40 24.596V20c0-8.837-7.163-16-16-16S8 11.163 8 20v4.596Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M24 42V26m-9 6v-6m18 16H15" />
    </svg>
  );
};

DeskLampIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DeskLampIcon = withWrapper(DeskLampIconComponent);
export default DeskLampIcon;
