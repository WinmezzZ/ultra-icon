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
const MailReviewIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M44 24v16.818C44 42.023 43.105 43 42 43H6c-1.105 0-2-.977-2-2.182V24l20 13 20-13Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m4 23.784 10-6.892m30 6.892-10-6.892"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M34 5H14v24.415a2 2 0 0 0 .91 1.677l8 5.2a2 2 0 0 0 2.18 0l8-5.2a2 2 0 0 0 .91-1.677V5Z"
      />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M20 13h4m-4 6h8" />
    </svg>
  );
};

MailReviewIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MailReviewIcon = withWrapper(MailReviewIconComponent);
export default MailReviewIcon;
