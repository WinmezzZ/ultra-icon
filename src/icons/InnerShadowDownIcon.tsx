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
const InnerShadowDownIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M24 44a19.938 19.938 0 0 0 14.142-5.858A19.938 19.938 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4 19.938 19.938 0 0 0 9.858 9.858 19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={4}
        d="M33.9 33.9A13.957 13.957 0 0 1 24 38a13.957 13.957 0 0 1-9.9-4.1"
      />
    </svg>
  );
};

InnerShadowDownIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const InnerShadowDownIcon = withWrapper(InnerShadowDownIconComponent);
export default InnerShadowDownIcon;
