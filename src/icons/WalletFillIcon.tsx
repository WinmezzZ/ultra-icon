/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const WalletFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M2 9h19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9zm1-6h15v4H2V4a1 1 0 0 1 1-1zm12 11v2h3v-2h-3z" />
    </svg>
  );
};

WalletFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const WalletFillIcon = withWrapper(WalletFillIconComponent);
export default WalletFillIcon;
