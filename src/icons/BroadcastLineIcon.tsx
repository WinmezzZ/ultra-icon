/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const BroadcastLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="m4.929 2.929 1.414 1.414A7.975 7.975 0 0 0 4 10c0 2.21.895 4.21 2.343 5.657L4.93 17.07A9.969 9.969 0 0 1 2 10a9.969 9.969 0 0 1 2.929-7.071zm14.142 0A9.969 9.969 0 0 1 22 10a9.969 9.969 0 0 1-2.929 7.071l-1.414-1.414A7.975 7.975 0 0 0 20 10c0-2.21-.895-4.21-2.343-5.657L19.07 2.93zM7.757 5.757l1.415 1.415A3.987 3.987 0 0 0 8 10c0 1.105.448 2.105 1.172 2.828l-1.415 1.415A5.981 5.981 0 0 1 6 10c0-1.657.672-3.157 1.757-4.243zm8.486 0A5.981 5.981 0 0 1 18 10a5.981 5.981 0 0 1-1.757 4.243l-1.415-1.415A3.987 3.987 0 0 0 16 10a3.987 3.987 0 0 0-1.172-2.828l1.415-1.415zM12 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-1 2h2v8h-2v-8z" />
    </svg>
  );
};

BroadcastLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BroadcastLineIcon = withWrapper(BroadcastLineIconComponent);
export default BroadcastLineIcon;
