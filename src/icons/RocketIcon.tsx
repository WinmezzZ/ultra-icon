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
const RocketIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <g fill="none" fillRule="evenodd" strokeLinejoin="round">
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <g stroke="#000" strokeWidth={4}>
          <path
            fill="null"
            fillRule="nonzero"
            d="M18.705 7.894 24 4l5.295 3.894A14 14 0 0 1 35 19.172V37H13V19.172a14 14 0 0 1 5.705-11.278Z"
          />
          <path strokeLinecap="round" d="m13 17-6 6v8l6-3zm22 0 6 6v8l-6-3zM18 39v3m6-3v5m6-5v3" />
        </g>
      </g>
    </svg>
  );
};

RocketIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RocketIcon = withWrapper(RocketIconComponent);
export default RocketIcon;
