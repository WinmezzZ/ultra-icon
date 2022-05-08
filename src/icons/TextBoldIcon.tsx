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
const TextBoldIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 24c5.506 0 9.969-4.477 9.969-10S29.506 4 24 4H11v20h13Zm4.031 20C33.537 44 38 39.523 38 34s-4.463-10-9.969-10H11v20h17.031Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

TextBoldIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TextBoldIcon = withWrapper(TextBoldIconComponent);
export default TextBoldIcon;
