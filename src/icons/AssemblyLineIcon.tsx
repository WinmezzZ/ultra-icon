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
const AssemblyLineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <circle cx={16} cy={10} r={4} fill="null" stroke="#000" strokeWidth={4} />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M28 38H13c-4 0-7-2.917-7-7s3-7 7-7h7m0 0h15c4 0 7-2.917 7-7s-3-7-7-7H20M6 10h6m24 28h6"
      />
      <circle cx={32} cy={38} r={4} fill="null" stroke="#000" strokeWidth={4} />
    </svg>
  );
};

AssemblyLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const AssemblyLineIcon = withWrapper(AssemblyLineIconComponent);
export default AssemblyLineIcon;
