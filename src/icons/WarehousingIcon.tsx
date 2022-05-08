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
const WarehousingIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M34 24H18m6-6-6 6 6 6" />
      <circle cx={38} cy={24} r={4} fill="null" stroke="#000" strokeWidth={4} />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M40.706 13A20.102 20.102 0 0 0 38 9.717 19.935 19.935 0 0 0 24 4C12.954 4 4 12.954 4 24s8.954 20 20 20c5.45 0 10.392-2.18 14-5.717A20.104 20.104 0 0 0 40.706 35"
      />
    </svg>
  );
};

WarehousingIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const WarehousingIcon = withWrapper(WarehousingIconComponent);
export default WarehousingIcon;
