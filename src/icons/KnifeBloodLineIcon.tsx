/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const KnifeBloodLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M4.342 1.408 22.373 19.44a1.5 1.5 0 0 1-2.121 2.122l-4.596-4.597L12.12 20.5 8 16.38V19a1 1 0 0 1-2 0v-4a1 1 0 0 0-1.993-.117L4 15v1a1 1 0 0 1-2 0V7.214a7.976 7.976 0 0 1 2.168-5.627l.174-.179zm.241 3.07-.051.11a5.993 5.993 0 0 0-.522 2.103L4 7l-.001.12a5.984 5.984 0 0 0 1.58 4.003l.177.185 6.363 6.363 2.829-2.828L4.583 4.478z" />
    </svg>
  );
};

KnifeBloodLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const KnifeBloodLineIcon = withWrapper(KnifeBloodLineIconComponent);
export default KnifeBloodLineIcon;
