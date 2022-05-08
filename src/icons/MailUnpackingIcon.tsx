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
const MailUnpackingIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M44 18v21.818C44 41.023 43.105 42 42 42H6c-1.105 0-2-.977-2-2.182V18l20 16 20-16Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 17.784 24 4l20 13.784" />
      <path fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M34 18H14v8l10 8 10-8v-8Z" />
    </svg>
  );
};

MailUnpackingIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MailUnpackingIcon = withWrapper(MailUnpackingIconComponent);
export default MailUnpackingIcon;
