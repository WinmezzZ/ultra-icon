/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const AdvertisementFillIconComponent = (p: SVGComponentProps) => {
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
      <path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zM9.399 8h-2l-3.2 8h2.154l.4-1h3.29l.4 1h2.155L9.399 8zM19 8h-2v2h-1a3 3 0 0 0-.176 5.995L16 16h3V8zm-2 4v2h-1l-.117-.007a1 1 0 0 1 0-1.986L16 12h1zm-8.601-1.115L9.244 13H7.552l.847-2.115z" />
    </svg>
  );
};

AdvertisementFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const AdvertisementFillIcon = withWrapper(AdvertisementFillIconComponent);
export default AdvertisementFillIcon;
