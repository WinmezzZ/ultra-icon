/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const FolderSettingsFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zm-3.823 8.809-.991.572 1 1.731.991-.572c.393.371.872.653 1.405.811v1.145h1.999V16.35a3.495 3.495 0 0 0 1.404-.811l.991.572 1-1.73-.991-.573a3.508 3.508 0 0 0 0-1.622l.99-.573-.999-1.73-.992.572a3.495 3.495 0 0 0-1.404-.812V8.5h-1.999v1.144a3.495 3.495 0 0 0-1.404.812L8.6 9.883l-1 1.732.991.572a3.508 3.508 0 0 0 0 1.622zm3.404.688a1.5 1.5 0 1 1 0-2.998 1.5 1.5 0 0 1 0 2.998z" />
    </svg>
  );
};

FolderSettingsFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FolderSettingsFillIcon = withWrapper(FolderSettingsFillIconComponent);
export default FolderSettingsFillIcon;
