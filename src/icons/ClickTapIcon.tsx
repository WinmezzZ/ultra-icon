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
const ClickTapIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <g fill="none" fillRule="evenodd" strokeLinecap="round">
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <g stroke="#000" strokeWidth={4}>
          <g strokeLinejoin="round">
            <path d="M15 26V15a3 3 0 1 1 6 0v11" />
            <path d="M39 25v6.5C39 37.851 33.851 43 27.5 43h-1C20.149 43 15 37.851 15 31.5V25" />
            <path d="M21 29v-5a3 3 0 0 1 6 0v5m0 0v-5a3 3 0 0 1 6 0v5m0 0v-5a3 3 0 0 1 6 0v5" />
          </g>
          <path d="M28 15a9.968 9.968 0 0 0-1.958-5.945A9.986 9.986 0 0 0 18 5a9.986 9.986 0 0 0-8.042 4.055A9.968 9.968 0 0 0 8 15" />
        </g>
      </g>
    </svg>
  );
};

ClickTapIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ClickTapIcon = withWrapper(ClickTapIconComponent);
export default ClickTapIcon;
