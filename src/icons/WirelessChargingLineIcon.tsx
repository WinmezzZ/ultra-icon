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
const WirelessChargingLineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="m3.929 4.929 1.414 1.414A7.975 7.975 0 0 0 3 12c0 2.21.895 4.21 2.343 5.657L3.93 19.07C2.119 17.261 1 14.761 1 12s1.12-5.261 2.929-7.071zm16.142 0C21.881 6.739 23 9.239 23 12s-1.12 5.262-2.929 7.071l-1.414-1.414C20.105 16.209 21 14.209 21 12s-.895-4.208-2.342-5.656L20.07 4.93zM13 5v6h3l-5 8v-6H8l5-8zM6.757 7.757l1.415 1.415A3.984 3.984 0 0 0 7 12c0 1.105.448 2.105 1.172 2.828l-1.415 1.415A5.985 5.985 0 0 1 5 12c0-1.657.672-3.157 1.757-4.243zm10.487.001A5.984 5.984 0 0 1 19 12a5.985 5.985 0 0 1-1.757 4.243l-1.415-1.415A3.984 3.984 0 0 0 17 12a3.986 3.986 0 0 0-1.17-2.827l1.414-1.415z" />
    </svg>
  );
};

WirelessChargingLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const WirelessChargingLineIcon = withWrapper(WirelessChargingLineIconComponent);
export default WirelessChargingLineIcon;
