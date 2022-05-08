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
const TeaIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M11 18.167c0-.092.075-.167.167-.167h23.666c.092 0 .167.075.167.167V30c0 6.627-5.373 12-12 12v0c-6.627 0-12-5.373-12-12V18.167Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M35 30a6 6 0 0 0 0-12" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M11 8v3m24-3v3M23 5v6" />
    </svg>
  );
};

TeaIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TeaIcon = withWrapper(TeaIconComponent);
export default TeaIcon;
