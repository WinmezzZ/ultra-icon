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
const SoccerOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="null" stroke="#000" strokeMiterlimit={2} strokeWidth={4} d="M29 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
      <path fill="#000" d="M19 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="M24.38 18.91 20 27l7.31 6.02c.31.24.53.57.66.94L31 44M20 27l-5.49 7.64c-.54.79-1.56 1.09-2.44.72L4 32"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="M42 24h-7c-.36 0-.72-.09-1.04-.27l-3.21-1.81c-4.01-2.35-8.4-3.96-12.97-4.78l-3.22-.57c-.45-.08-.92 0-1.32.22L7 20"
      />
    </svg>
  );
};

SoccerOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SoccerOneIcon = withWrapper(SoccerOneIconComponent);
export default SoccerOneIcon;
