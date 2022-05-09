/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const FileCodeLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992zM17.657 12l-3.536 3.536-1.414-1.415L14.828 12l-2.12-2.121 1.413-1.415L17.657 12zM6.343 12 9.88 8.464l1.414 1.415L9.172 12l2.12 2.121-1.413 1.415L6.343 12z" />
    </svg>
  );
};

FileCodeLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FileCodeLineIcon = withWrapper(FileCodeLineIconComponent);
export default FileCodeLineIcon;
