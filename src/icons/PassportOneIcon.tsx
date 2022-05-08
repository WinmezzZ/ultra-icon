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
const PassportOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M13 40H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v4"
      />
      <rect
        width={34}
        height={28}
        x={13}
        y={44}
        fill="null"
        stroke="#000"
        strokeWidth={4}
        rx={2}
        transform="rotate(-90 13 44)"
      />
      <circle cx={27} cy={27} r={8} stroke="#333" strokeWidth={4} />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={4}
        d="M35 28s-3-.5-5 1c-2.001 1.5-2.599 5.103-2 6m-4-8c0 2-2 4-4 4m11-11s0 4-3 4"
      />
    </svg>
  );
};

PassportOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PassportOneIcon = withWrapper(PassportOneIconComponent);
export default PassportOneIcon;
