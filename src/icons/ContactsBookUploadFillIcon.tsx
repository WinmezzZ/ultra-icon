/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const ContactsBookUploadFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M7 2v20H3V2h4zm12.005 0C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H9V2h10.005zM15 8l-4 4h3v4h2v-4h3l-4-4zm9 4v4h-2v-4h2zm0-6v4h-2V6h2z" />
    </svg>
  );
};

ContactsBookUploadFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ContactsBookUploadFillIcon = withWrapper(ContactsBookUploadFillIconComponent);
export default ContactsBookUploadFillIcon;
