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
const IwatchTwoIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeWidth={4}
        d="M15.417 10.5C18.237 7.7 21.942 6 26 6c8.837 0 16 8.059 16 18s-7.163 18-16 18c-4.058 0-7.763-1.7-10.583-4.5"
      />
      <rect
        width={10}
        height={28}
        x={6}
        y={10}
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        rx={2}
      />
      <rect width={4} height={4} x={13} y={18} fill="#fff" rx={2} transform="rotate(90 13 18)" />
      <rect width={4} height={4} x={13} y={25} fill="#fff" rx={2} transform="rotate(90 13 25)" />
    </svg>
  );
};

IwatchTwoIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const IwatchTwoIcon = withWrapper(IwatchTwoIconComponent);
export default IwatchTwoIcon;
