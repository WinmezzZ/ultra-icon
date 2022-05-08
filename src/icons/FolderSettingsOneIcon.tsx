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
const FolderSettingsOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M43 23v-9a2 2 0 0 0-2-2H24l-5-6H7a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h15"
      />
      <circle cx={35} cy={35} r={4} fill="null" stroke="#000" strokeWidth={4} />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M35 28v3m0 8v3m4.828-12-2.121 2.121M31.828 38l-2.121 2.121M30 30l2.121 2.121M38 38l2.121 2.121M28 35h3m8 0h3"
      />
    </svg>
  );
};

FolderSettingsOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FolderSettingsOneIcon = withWrapper(FolderSettingsOneIconComponent);
export default FolderSettingsOneIcon;
