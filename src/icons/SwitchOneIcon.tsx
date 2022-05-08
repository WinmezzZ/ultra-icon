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
const SwitchOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <circle cx={24} cy={24} r={19} fill="null" stroke="#000" strokeWidth={4} />
      <rect
        width={10.519}
        height={24.012}
        x={36.006}
        y={19.334}
        fill="null"
        stroke="#333"
        strokeWidth={4}
        rx={5.259}
        transform="rotate(90 36.006 19.334)"
      />
      <rect
        width={10}
        height={10}
        x={36.006}
        y={29.852}
        stroke="#333"
        strokeWidth={4}
        rx={5}
        transform="rotate(-180 36.006 29.852)"
      />
    </svg>
  );
};

SwitchOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SwitchOneIcon = withWrapper(SwitchOneIconComponent);
export default SwitchOneIcon;
