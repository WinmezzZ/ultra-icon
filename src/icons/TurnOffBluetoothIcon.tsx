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
const TurnOffBluetoothIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M20.672 11.778V4l14.584 11.111-7.179 4.445m4.422 16.418L20.675 44V29.628l11.824 6.346Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="m4 12.5 40 23" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m7.444 34 13.23-4.373" />
    </svg>
  );
};

TurnOffBluetoothIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TurnOffBluetoothIcon = withWrapper(TurnOffBluetoothIconComponent);
export default TurnOffBluetoothIcon;
