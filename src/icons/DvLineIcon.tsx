/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const DvLineIconComponent = (p: SVGComponentProps) => {
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
      <path d="M11.608 3H21a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-7v-2h6V5h-6.255A6.968 6.968 0 0 1 15 9a6.992 6.992 0 0 1-3 5.745V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6.255A7 7 0 1 1 11.608 3zM6 13.584V20h4v-6.416a5.001 5.001 0 1 0-4 0zM8 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm9-3h2v2h-2V7zM7 17h2v2H7v-2z" />
    </svg>
  );
};

DvLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DvLineIcon = withWrapper(DvLineIconComponent);
export default DvLineIcon;
