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
const RemoteControlOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeWidth={4}
        d="M11 5.446C11 4.647 11.647 4 12.446 4h23.108C36.353 4 37 4.647 37 5.446V31c0 7.18-5.82 13-13 13s-13-5.82-13-13V5.446Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M17 16h3m8 0h3" />
      <circle cx={17} cy={10} r={2} fill="#000" />
      <circle cx={24} cy={31} r={7} fill="null" stroke="#000" strokeWidth={4} />
    </svg>
  );
};

RemoteControlOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RemoteControlOneIcon = withWrapper(RemoteControlOneIconComponent);
export default RemoteControlOneIcon;
