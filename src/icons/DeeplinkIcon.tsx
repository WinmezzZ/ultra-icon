/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const DeeplinkIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M21 34.993v5.978c0 .569-.423 1.029-.944 1.029H4.944C4.423 42 4 41.54 4 40.971V7.03C4 6.46 4.423 6 4.944 6h15.112c.521 0 .944.46.944 1.029v5.978m6 0V7.03c0-.57.423-1.03.944-1.03h15.112c.521 0 .944.46.944 1.029V40.97c0 .569-.423 1.029-.944 1.029H27.944c-.521 0-.944-.46-.944-1.029v-5.978"
      />
      <path fill="#000" d="M12.5 38a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm23 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M16 23.5h16" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m27.223 28.273 1.59-1.591 3.183-3.182-3.182-3.182-1.591-1.591"
      />
    </svg>
  );
};

DeeplinkIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DeeplinkIcon = withWrapper(DeeplinkIconComponent);
export default DeeplinkIcon;
