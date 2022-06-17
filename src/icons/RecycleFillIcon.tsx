/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const RecycleFillIconComponent = (p: SVGComponentProps) => {
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
      <path d="m19.562 12.098 1.531 2.652a3.5 3.5 0 0 1-3.03 5.25H16v2l-5-3.5 5-3.5v2h2.062a.498.498 0 0 0 .471-.668l-.038-.082-1.531-2.652 2.598-1.5zM7.737 9.384l.53 6.08-1.73-1-1.032 1.786a.498.498 0 0 0 .343.742l.09.008H9v3H5.938a3.5 3.5 0 0 1-3.031-5.25l1.031-1.786-1.732-1 5.53-2.58zm6.013-6.415c.532.307.974.749 1.281 1.281l1.03 1.786 1.733-1-.53 6.08-5.532-2.58 1.732-1-1.031-1.786a.498.498 0 0 0-.814-.073l-.052.073-1.53 2.652-2.599-1.5 1.53-2.652a3.5 3.5 0 0 1 4.782-1.281z" />
    </svg>
  );
};

RecycleFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RecycleFillIcon = withWrapper(RecycleFillIconComponent);
export default RecycleFillIcon;
