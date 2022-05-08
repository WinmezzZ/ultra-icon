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
const SofaTwoIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M44 38V18h-8v13H12V18H4v20h40Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M36 6H12v25h24V6Z" />
      <path
        fill="#000"
        fillRule="evenodd"
        d="M10 44a4 4 0 0 0 4-4c-1.097.004-7.3 0-8 0a4 4 0 0 0 4 4Zm28 0a4 4 0 0 0 4-4c-1.905-.007-7.137 0-8 0a4 4 0 0 0 4 4Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

SofaTwoIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SofaTwoIcon = withWrapper(SofaTwoIconComponent);
export default SofaTwoIcon;
