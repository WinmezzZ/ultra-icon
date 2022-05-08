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
const CruiseIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m38 42 3.39-9.325a2 2 0 0 0-.984-2.472l-15.512-7.756a2 2 0 0 0-1.788 0L7.594 30.203a2 2 0 0 0-.985 2.472L10 42"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M35 14H13a2 2 0 0 0-2 2v12l12.162-5.613a2 2 0 0 1 1.676 0L37 28V16a2 2 0 0 0-2-2Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M29 14V6a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v8"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M24 32v8" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M4 44c4 0 4-2 7-2s3 2 6 2 3.5-2 7-2 4 2 7 2 3-2 6-2 3 2 7 2"
      />
    </svg>
  );
};

CruiseIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CruiseIcon = withWrapper(CruiseIconComponent);
export default CruiseIcon;
