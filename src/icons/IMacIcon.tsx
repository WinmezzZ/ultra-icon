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
const IMacIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path fill="#fff" fillOpacity={0.01} d="M48 0H0v48h48V0Z" />
      <path fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M4 6h40v22H4V6Z" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M44 28v8H4v-8" />
      <path
        fill="#fff"
        d="M13.09 18h-2.18a.91.91 0 0 0-.91.91v2.18c0 .503.407.91.91.91h2.18a.91.91 0 0 0 .91-.91v-2.18a.91.91 0 0 0-.91-.91Zm0-6h-2.18a.91.91 0 0 0-.91.91v2.18c0 .503.407.91.91.91h2.18a.91.91 0 0 0 .91-.91v-2.18a.91.91 0 0 0-.91-.91Zm8 6h-2.18a.91.91 0 0 0-.91.91v2.18c0 .503.407.91.91.91h2.18a.91.91 0 0 0 .91-.91v-2.18a.91.91 0 0 0-.91-.91Zm0-6h-2.18a.91.91 0 0 0-.91.91v2.18c0 .503.407.91.91.91h2.18a.91.91 0 0 0 .91-.91v-2.18a.91.91 0 0 0-.91-.91Zm8 6h-2.18a.91.91 0 0 0-.91.91v2.18c0 .503.407.91.91.91h2.18a.91.91 0 0 0 .91-.91v-2.18a.91.91 0 0 0-.91-.91Zm0-6h-2.18a.91.91 0 0 0-.91.91v2.18c0 .503.407.91.91.91h2.18a.91.91 0 0 0 .91-.91v-2.18a.91.91 0 0 0-.91-.91Zm8 0h-2.18a.91.91 0 0 0-.91.91v2.18c0 .503.407.91.91.91h2.18a.91.91 0 0 0 .91-.91v-2.18a.91.91 0 0 0-.91-.91Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M20.846 36 16 42h16l-4.846-6"
      />
    </svg>
  );
};

IMacIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const IMacIcon = withWrapper(IMacIconComponent);
export default IMacIcon;
