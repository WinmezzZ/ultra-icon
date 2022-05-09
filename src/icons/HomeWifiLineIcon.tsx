/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const HomeWifiLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M6 19h12V9.157l-6-5.454-6 5.454V19zm13 2H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zM8 10a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5v-2zm0 4a3 3 0 0 1 3 3H8v-3z" />
    </svg>
  );
};

HomeWifiLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HomeWifiLineIcon = withWrapper(HomeWifiLineIconComponent);
export default HomeWifiLineIcon;
