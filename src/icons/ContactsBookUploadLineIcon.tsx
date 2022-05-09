/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const ContactsBookUploadLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M19.005 2C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H3V2h16.005zM7 4H5v16h2V4zm12 0H9v16h10V4zm-5 4 4 4h-3v4h-2v-4h-3l4-4zm10 4v4h-2v-4h2zm0-6v4h-2V6h2z" />
    </svg>
  );
};

ContactsBookUploadLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ContactsBookUploadLineIcon = withWrapper(ContactsBookUploadLineIconComponent);
export default ContactsBookUploadLineIcon;
