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
const TomatoIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 44c11.046 0 20-7.387 20-16.5 0-6.442-4.475-11.799-11-14.516L29.5 14.5 30 20l-6.5-2-6.5 2v-5.5l-3-1.516C8.022 15.837 4 21.393 4 27.5 4 36.613 12.954 44 24 44Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m23.5 4 3.809 5.117L36 9.91l-6.337 4.573L31.5 21l-8-3-8 3 1.837-6.517L11 9.91l8.691-.793L23.5 4Z"
      />
    </svg>
  );
};

TomatoIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TomatoIcon = withWrapper(TomatoIconComponent);
export default TomatoIcon;
