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
const AirplaneWindowIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M10 18c0-7.732 6.268-14 14-14s14 6.268 14 14v12c0 7.732-6.268 14-14 14s-14-6.268-14-14V18Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M10 17h28m-16-6h4M10 26s5.4-.6 7 1c1.6 1.6 1 3.369 1 3.369 3 0 6 .158 6 3.631 0 2.5-4 4-6.5 2.369C17.5 38.5 17 40 14 40m24-17s-3.5-2-5-1-1 3-1 3c-1.5-1-4 0-4 2.5s2.5 3.5 5 2.5c1 3 3.5 3 5 2"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M25 44v0c7.18 0 13-5.82 13-13V18c0-7.732-6.268-14-14-14v0m-1 40v0c-7.18 0-13-5.82-13-13V18c0-7.732 6.268-14 14-14v0"
      />
    </svg>
  );
};

AirplaneWindowIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const AirplaneWindowIcon = withWrapper(AirplaneWindowIconComponent);
export default AirplaneWindowIcon;
