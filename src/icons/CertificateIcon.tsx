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
const CertificateIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M26 36H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2h-8M12 14h24m-24 7h6m-6 7h4"
      />
      <path fill="null" stroke="#000" strokeWidth={4} d="M30 33a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m30 40 4 2V31.472S32.86 33 30 33c-2.86 0-4-1.5-4-1.5V42l4-2Z"
      />
    </svg>
  );
};

CertificateIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CertificateIcon = withWrapper(CertificateIconComponent);
export default CertificateIcon;
