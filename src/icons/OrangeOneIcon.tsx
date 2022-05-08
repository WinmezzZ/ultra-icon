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
const OrangeOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} clipPath="url(#prefix__a)">
        <path
          fill="null"
          stroke="#000"
          d="M34.15 34.85c8.202-8.202 8.202-21.498 0-29.7L4.453 34.85c8.201 8.2 21.498 8.2 29.699 0Z"
        />
        <path stroke="#333" d="m19.301 20 14.85 14.85M19.302 20v21.213m0-21.213 20.506.707" />
        <path
          stroke="#000"
          d="M39.755 14.997c1.664 6.88-.189 14.437-5.56 19.809-5.372 5.371-12.93 7.224-19.809 5.56m-.034-15.416 8.485-8.485"
        />
      </g>
      <defs>
        <clipPath id="prefix__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

OrangeOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const OrangeOneIcon = withWrapper(OrangeOneIconComponent);
export default OrangeOneIcon;
