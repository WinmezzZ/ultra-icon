/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const FilePpt2LineIconComponent = (p: SVGComponentProps) => {
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
      <path d="m2.859 2.877 12.57-1.795a.5.5 0 0 1 .571.495v20.846a.5.5 0 0 1-.57.495L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99zM4 4.735v14.53l10 1.429V3.306L4 4.735zM17 19h3V5h-3V3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4v-2zM5 8h8v6H7v2H5V8zm2 2v2h4v-2H7z" />
    </svg>
  );
};

FilePpt2LineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FilePpt2LineIcon = withWrapper(FilePpt2LineIconComponent);
export default FilePpt2LineIcon;
