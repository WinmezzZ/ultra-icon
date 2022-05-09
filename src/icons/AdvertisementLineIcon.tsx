/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const AdvertisementLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm-1 2H4v14h16V5zM9.399 8l3.199 8h-2.155l-.4-1h-3.29l-.4 1H4.199l3.2-8h2zM19 8v8h-3a3 3 0 0 1 0-6h.999L17 8h2zm-2 4h-1a1 1 0 0 0-.117 1.993L16 14h1v-2zm-8.601-1.115L7.552 13h1.692l-.845-2.115z" />
    </svg>
  );
};

AdvertisementLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const AdvertisementLineIcon = withWrapper(AdvertisementLineIconComponent);
export default AdvertisementLineIcon;
