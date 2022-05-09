/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const SteamLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M17 4a5 5 0 1 1-.892 9.92l-2.651 1.989A3.999 3.999 0 0 1 9.5 20.5a3.999 3.999 0 0 1-3.966-4.524L1.708 14.43l.75-1.854 3.826 1.545a3.996 3.996 0 0 1 3.696-1.592l2.042-3.061A5 5 0 0 1 17 4zM9.5 14.5c-.464 0-.892.158-1.231.424l1.606.649a1 1 0 1 1-.75 1.854L7.52 16.78a2.001 2.001 0 0 0 3.981-.279 2 2 0 0 0-2-2zm3.364-2.69-.983 1.476c.284.21.54.458.758.735l1.36-1.02a5.056 5.056 0 0 1-1.135-1.191zM17 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1a2 2 0 1 1 .001 3.999A2 2 0 0 1 17 7z" />
    </svg>
  );
};

SteamLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SteamLineIcon = withWrapper(SteamLineIconComponent);
export default SteamLineIcon;
