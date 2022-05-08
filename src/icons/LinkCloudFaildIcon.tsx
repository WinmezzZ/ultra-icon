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
const LinkCloudFaildIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M12 33c-3.333 0-8-1.5-8-7.5 0-7 7-8.5 9-8.5 1-3.5 3-9 11-9 7 0 10 4 11 7.5 0 0 9 1 9 9.5 0 6-4 8-8 8m-7-5L19 38m0-10 10 10"
      />
    </svg>
  );
};

LinkCloudFaildIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const LinkCloudFaildIcon = withWrapper(LinkCloudFaildIconComponent);
export default LinkCloudFaildIcon;
