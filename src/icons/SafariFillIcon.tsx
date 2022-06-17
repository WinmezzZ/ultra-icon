/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const SafariFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="m16.7 6.8-6.114 3.786L6.8 16.7l-.104-.104-1.415 1.414.708.708 1.414-1.415L7.3 17.2l6.114-3.785L17.2 7.3l.104.104 1.415-1.414-.708-.708-1.414 1.415.104.104zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.5-19v2h1V3h-1zm0 16v2h1v-2h-1zM8.094 3.876l.765 1.848.924-.382-.765-1.848-.924.382zm6.123 14.782.765 1.848.924-.382-.765-1.848-.924.382zm.765-15.164-.765 1.848.924.382.765-1.848-.924-.382zM8.86 18.276l-.765 1.848.924.382.765-1.848-.924-.382zM21 11.5h-2v1h2v-1zm-16 0H3v1h2v-1zm15.458 3.615-1.835-.794-.397.918 1.835.794.397-.918zM5.774 8.761 3.94 7.967l-.397.918 1.835.794.397-.918zm14.35-.667-1.848.765.382.924 1.848-.765-.382-.924zM5.342 14.217l-1.848.765.382.924 1.848-.765-.382-.924zm13.376 3.793-1.415-1.414-.707.707 1.414 1.415.708-.708zM7.404 6.697 5.99 5.282l-.708.708 1.415 1.414.707-.707zm3.908 4.615 3.611-2.235-2.235 3.61-1.376-1.375z" />
    </svg>
  );
};

SafariFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SafariFillIcon = withWrapper(SafariFillIconComponent);
export default SafariFillIcon;
