/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const SlackFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M6.527 14.514A1.973 1.973 0 0 1 4.56 16.48a1.973 1.973 0 0 1-1.967-1.967c0-1.083.884-1.968 1.967-1.968h1.968v1.968zm.992 0c0-1.083.884-1.968 1.967-1.968 1.083 0 1.968.885 1.968 1.968v4.927a1.973 1.973 0 0 1-1.968 1.967 1.973 1.973 0 0 1-1.967-1.967v-4.927zm1.967-7.987A1.973 1.973 0 0 1 7.52 4.56c0-1.083.884-1.967 1.967-1.967 1.083 0 1.968.884 1.968 1.967v1.968H9.486zm0 .992c1.083 0 1.968.884 1.968 1.967a1.973 1.973 0 0 1-1.968 1.968H4.56a1.973 1.973 0 0 1-1.967-1.968c0-1.083.884-1.967 1.967-1.967h4.927zm7.987 1.967c0-1.083.885-1.967 1.968-1.967s1.967.884 1.967 1.967a1.973 1.973 0 0 1-1.967 1.968h-1.968V9.486zm-.992 0a1.973 1.973 0 0 1-1.967 1.968 1.973 1.973 0 0 1-1.968-1.968V4.56c0-1.083.885-1.967 1.968-1.967s1.967.884 1.967 1.967v4.927zm-1.967 7.987c1.083 0 1.967.885 1.967 1.968a1.973 1.973 0 0 1-1.967 1.967 1.973 1.973 0 0 1-1.968-1.967v-1.968h1.968zm0-.992a1.973 1.973 0 0 1-1.968-1.967c0-1.083.885-1.968 1.968-1.968h4.927c1.083 0 1.967.885 1.967 1.968a1.973 1.973 0 0 1-1.967 1.967h-4.927z" />
    </svg>
  );
};

SlackFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SlackFillIcon = withWrapper(SlackFillIconComponent);
export default SlackFillIcon;
